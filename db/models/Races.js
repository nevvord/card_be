module.exports = (mongoose, conn) => 
  conn.model('Users', new mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId},
    title: String,
    img: {type: mongoose.Schema.Types.ObjectId, ref: 'Images'},
    skill: {type: mongoose.Schema.Types.ObjectId, ref: 'Skills'},
    description: String,
    date: {type: Date, default: Date.now}
  }))