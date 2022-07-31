#!usr/bin/env node
import { getArgs } from './helpers/args.js'
import { printHelp, printSuccess, printError } from './services/log.service.js'
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js'
import { getWeather } from './services/api.service.js'

const saveToken = async (token) => {
    if (!token.length) {
        printError('Не передан токен')
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
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
    getWeather('moscow')
}

initCLI()