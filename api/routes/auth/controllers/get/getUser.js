module.exports = async (req, res) => {
  const id = req.params.id
  const body = {
    id,
    name: 'Vitalii',
    login: 'nevvord'
  }
  res.send({body, msg: "Пользователь найден"})
}