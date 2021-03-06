const { Types } = require('mongoose')
const bcrypt = require('bcryptjs')

module.exports = async (req, res) => {
  const { login, password, email } = req.body
  const findUser = await db.Users.findOne({login})
  if (findUser) return res.status(401).send({msg: "Пользователь с таким логином существует"})
  const salt = await bcrypt.genSalt(4)
  if (!salt) return res.status(500).send({msg: "Неудалось сгенерировать соль", row: 8})
  const hash = await bcrypt.hash(password.toString(), salt)
  if (!hash) return res.status(500).send({msg: "Неудалось сгенерировать пароль", row: 12})

  const user = new db.Users({
    _id: new Types.ObjectId(),
    login, password: hash, email
  })

  user.save().then(resultat => {
    res.send({user: resultat, msg: "Пользователь успешно добавлен"})    
  }).catch(error => {
    res.status(500).send({msg: "Ошибка сервера, неудалось сохранить пользователя", row: 22})
  })
}