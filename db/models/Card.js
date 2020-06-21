module.exports = (mongoose, conn) => 
  conn.model('Users', new mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId},
    title:  String,
    img:   String,
    strength:      String,
    skill:      String,
    type:   String,
    description:       {type: Date, default: Date.now},
    race: String
  }))