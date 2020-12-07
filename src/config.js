const env = process.env;

export default {
    mongo: {
        url: `mongodb://${env.MONGO_USERNAME}:${env.MONGO_PASSWORD}@${env.MONGO_HOSTNAME}:${env.MONGO_PORT}/${env.MONGO_DB}`
    },
    auth: {
        token: `${env.AUTH_TOKEN}`,
        tokenHeaderName: 'x-auth-token'
    }
}
