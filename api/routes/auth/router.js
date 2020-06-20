const controllers = require('./controllers')

router
  .get('/user/:id', middleware.verify.default, controllers.getUser)
  .post('/signup', controllers.signUp)
  .post('/signin', controllers.signIn)

module.exports = router