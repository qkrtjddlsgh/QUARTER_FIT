var express = require('express');
var router = express.Router();
var record = require('../../models/Record');

router.post('/', function(req, res){
    var recv_data = req.body;

    var date = recv_data.date;
    var region = recv_data.region;
    var gender = recv_data.gender;
    var name = recv_data.name;

    var type = recv_data.type;
    var scale = recv_data.scale;

    var time_min = recv_data.time_min;
    var time_sec = recv_data.time_sec;

    var round_round = recv_data.round_round;
    var round_remainder = recv_data.round_remainder;

    var point_point = recv_data.point_point;

    record.find({date: date, region: region, gender: gender, name: name}, function(err, doc){
        if(err){
            console.error(err.message);
        }
        if(doc.length == 0){
            var new_record = new record();
            new_record.date = date;
            new_record.region = region;
            new_record.gender = gender;
            new_record.name = name;
            new_record.type = type;
            new_record.scale = scale;
            new_record.time_min = time_min;
            new_record.time_sec = time_sec;
            new_record.round_round = round_round;
            new_record.round_remainder = round_remainder;
            new_record.point_point = point_point;
            new_record.save();

            var res_data = new Object();
            res_data.code = "9999";
            res_data.message = "Record is registered";

            res.send(res_data);
            res.end();
        }
        else{
            var res_data = new Object();
            res_data.code = "8888";
            res_data.message = "Record is already exist";

            res.send(res_data);
            res.end();
        }
    });

});

module.exports = router;