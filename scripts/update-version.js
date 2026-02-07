#!/usr/bin/env node

const { readFileSync, writeFileSync, readdirSync, existsSync } = require('node:fs')
const { resolve, join } = require('node:path')

const args = new Set(process.argv.slice(2))
const modes = ['--patch', '--minor', '--major']
const selected = modes.filter((m) => args.has(m))

if (selected.length !== 1) {
    console.error('Usage: node scripts/update-version.js --patch|--minor|--major')
    process.exit(1)
}

const mode = selected[0]
const rootDir = process.cwd()
const rootPkgPath = resolve(rootDir, 'package.json')
const pkg = JSON.parse(readFileSync(rootPkgPath, 'utf8'))

function bumpVersion(version, bumpMode) {
    if (!/^\d+\.\d+\.\d+$/.test(version)) {
        throw new Error(`Invalid version format in package.json: ${version}`)
    }

    let [major, minor, patch] = version.split('.').map((n) => Number(n))

    if (bumpMode === '--patch') {
        patch += 1
    } else if (bumpMode === '--minor') {
        minor += 1
        patch = 0
    } else if (bumpMode === '--major') {
        major += 1
        minor = 0
        patch = 0
    }

    return `${major}.${minor}.${patch}`
}

const current = pkg.version
const next = bumpVersion(current, mode)
pkg.version = next
writeFileSync(rootPkgPath, JSON.stringify(pkg, null, 4) + '\n')

const packagesDir = resolve(rootDir, 'packages')
const ignored = new Set(['__stories__', 'core'])
if (existsSync(packagesDir)) {
    const entries = readdirSync(packagesDir, { withFileTypes: true })
    for (const entry of entries) {
        if (!entry.isDirectory()) continue
        if (ignored.has(entry.name)) continue
        const pkgPath = join(packagesDir, entry.name, 'package.json')
        if (!existsSync(pkgPath)) continue
        const pkgData = JSON.parse(readFileSync(pkgPath, 'utf8'))
        pkgData.version = bumpVersion(pkgData.version, mode)
        writeFileSync(pkgPath, JSON.stringify(pkgData, null, 4) + '\n')
    }
}

console.log(`Version updated: ${current} -> ${next}`)
