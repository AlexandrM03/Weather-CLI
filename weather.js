#!usr/bin/env node
import { getArgs } from './helpers/args.js'
import { printHelp, printSuccess, printError } from './services/log.service.js'
import { saveKeyValue } from './services/storage.service.js'

const saveToken = async (token) => {
    try {
        await saveKeyValue('token', token)
        printSuccess('Токен сохранён')
    } catch (e) {
        printError(e.message)
    }
}

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
        return saveToken(args.t)
    }
}

initCLI()