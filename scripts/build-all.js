#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

const { execSync } = require('node:child_process')

console.log('Running pnpm -r run build ...')
execSync('pnpm -r run build', { stdio: 'inherit' })
