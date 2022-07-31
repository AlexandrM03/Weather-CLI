#!usr/bin/env node
import { getArgs } from './helpers/args.js'

const initCLI = () => {
    const args = getArgs(process.argv)
    console.log(args)
    if (args.h) {
        // Help
    }
    if (args.s) {
        // Save
    }
    if (args.t) {
        // Token
    }
}

initCLI()