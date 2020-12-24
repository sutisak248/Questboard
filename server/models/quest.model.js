const mongoose = require('mongoose');

const Quest = mongoose.model(
    'Quest',
    new mongoose.Schema({
        questname:String
    })
)

export default Quest