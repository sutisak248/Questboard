const mongoose = require('mongoose');

const Infoma = mongoose.model(
    'Infoma',
    new mongoose.Schema({
        skill : []
    })
)

export default Infoma


