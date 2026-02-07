#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

const { execSync } = require('node:child_process')
const { readdirSync } = require('node:fs')
const { resolve, join } = require('node:path')

const rootDir = process.cwd()
const packagesDir = resolve(rootDir, 'packages')
const ignored = new Set(['__stories__', 'core'])

const entries = readdirSync(packagesDir, { withFileTypes: true })
    .filter((e) => e.isDirectory() && !ignored.has(e.name))
    .map((e) => e.name)
    .sort()

for (const name of entries) {
    const pkgDir = join(packagesDir, name)
    console.log(`Publishing ${name}...`)
    execSync('npm publish --no-git-checks', { cwd: pkgDir, stdio: 'inherit' })
}
