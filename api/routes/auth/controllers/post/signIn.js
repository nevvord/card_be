const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

module.exports = async (req, res) => {
  const { login, password } = req.body

  const user = await db.Users.findOne({login})
  if (!user) return res.status(401).send({msg: "Пользователь не найден"})
  const passwordMatch = await bcrypt.compareSync(password, user.password)
  if (!passwordMatch) return res.status(401).send({msg: "Неверный пароль"})
  const token = await jwt.sign({_id: user._id}, process.env.SECRET_KEY)
  if (!token) return res.status(500).send({msg: "Ошибка сервера"})
  res.send({token, msg: "Авторизация успешна"})
}