module.exports = (mongoose, conn) => 
  conn.model('Users', new mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId},
    title:  String,
    img:   String,
    skill:      String,
    description:       {type: Date, default: Date.now},
    race: String
  }))