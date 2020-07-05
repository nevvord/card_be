const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

module.exports = async (req, res) => {
  const { login, password } = req.body

  const user = await db.Users.findOne({login})
  console.log('1');
  if (!user) return res.status(401).send({msg: "Пользователь не найден"})
  console.log('2');
  const passwordMatch = await bcrypt.compare(password, user.password)
  console.log('3');
  if (!passwordMatch) return res.status(401).send({msg: "Неверный пароль"})
  console.log('4');
  const token = await jwt.sign({_id: user._id}, process.env.SECRET_KEY)
  console.log('5');
  if (!token) return res.status(500).send({msg: "Ошибка сервера"})
  console.log('6');
  res.send({token, msg: "Авторизация успешна"})
  console.log('signin')
}