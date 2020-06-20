const { Types } = require('mongoose')
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
  const login = req.body.password.toString()
  const password = req.body.password.toString()
  const email = req.body.email.toString()

  const salt = await bcrypt.genSaltSync('18')
  const hash = await bcrypt.hashSync(password, salt)

  const user = new db.Users({
    _id: new Types.ObjectId(),
    login, password: hash, email
  })

  user.save().then(resultat => {
    res.send({user: resultat, msg: "Пользователь успешно добавлен"})    
  }).catch(error => {
    res.status(500).send({msg: "Ошибка сервера, неудалось сохранить пользователя"})
  })
}