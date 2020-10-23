const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://maira:Test123@cluster0.mdy4n.mongodb.net/todoDB?retryWrites=true&w=majority');

module.exports = mongoose;
