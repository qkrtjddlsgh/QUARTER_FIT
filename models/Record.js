var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var recordData = new Schema({
    date : String,
    region : String,

    name : String,
    gender : String,

    // TIME, ROUND, POINT
    type : String,
    // A, B C
    scale : String,

    time_min : Number,
    time_sec : Number,

    round_round : Number,
    round_remainder : Number,

    point_point : Number
});

var record = mongoose.model('record', recordData, 'records');

module.exports = record;