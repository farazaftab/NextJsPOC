const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
} = require('next/constants')
const fs = require('fs')
const dotenv = require('dotenv')


const dev = process.env.NODE_ENV !== 'production'

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration


module.exports = phase => {
    // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
    let buildEnv = process.env.NODE_ENV && process.env.NODE_ENV == "development" ? "dev1" : process.env.NODE_ENV;

    let env = dotenv.config().parsed;

    console.log("my config -- ", env)
/*
    const envConfig = dotenv.parse(fs.readFileSync('environment/' + buildEnv + '.env'))
    for (const k in envConfig) {
        env[k] = envConfig[k]
    }
*/
    // next.config.js object
    return {
        env,
    }
}

