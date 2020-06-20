module.exports = (mongoose, conn) => 
  conn.model('Users', new mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId},
    firstName:  String,
    lastName:   String,
    login:      String,
    email:      String,
    password:   String,
    date:       {type: Date, default: Date.now},
  }))