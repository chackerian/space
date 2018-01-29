module.exports = {
  servers: {
    one: {
      host: '52.33.216.167',
      username: 'ubuntu',
      pem: '/Users/nathanchackerian/Desktop/ai.pem'
    }
  },

  meteor: {
    name: 'app',
    path: '../',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      ROOT_URL: 'http://spacetrades.io',
      MONGO_URL: 'mongodb://localhost/meteor',
      DISABLE_WEBSOCKETS: 1,
    },

    docker: {
      image: 'abernix/meteord:node-8.4.0-base'
    },

    deployCheckWaitTime: 60,

    enableUploadProgressBar: true
  },

  mongo: {
    port: 27017,
    version: '3.4.1',
    servers: {
      one: {}
    }
  }
};
