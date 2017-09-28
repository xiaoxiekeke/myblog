module.exports = {
  port: 8082,
  session: {
    secret: 'myblog',
    key: 'myblog',
    maxAge: 2592000000
  },
  // mongodb: 'mongodb://localhost:27017/myblog'
  mongodb: 'mongodb://blog-runner:1qaz2wsx@localhost:19999/myblog'
};