const controllers = require('./controllers')

router
  .get('/user', middleware.verify.default, controllers.getUser)
  .post('/signup', controllers.signUp)
  .post('/signin', controllers.signIn)

module.exports = router