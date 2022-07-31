#!usr/bin/env node
import { getArgs } from './helpers/args.js'
import { printHelp } from './services/log.service.js'

const initCLI = () => {
    const args = getArgs(process.argv)
    if (args.h) {
        // Help
        printHelp()
    }
    if (args.s) {
        // Save
    }
    if (args.t) {
        // Token
    }
}

initCLI()