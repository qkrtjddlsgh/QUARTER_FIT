var express = require('express');
var router = express.Router();
var record = require('../../models/Record');

router.post('/', function(req, res){
    var recv_data = req.body;

    var type = recv_data.type;

    var date = recv_data.date;
    var region = recv_data.region;
    var scale = recv_data.scale;

    if(type == "T"){
        record.find({date: date, region: region, type: type, scale: scale}).sort({time_min: 1, time_sec: 1}).exec(function(err, doc){
            if(err){
                console.error(err.message);
            }
            else{
                var res_data = new Object();
                res_data.code = "9999";

                var add_data = new Object();
                add_data.result = doc;

                res_data.response = add_data;

                res.send(res_data);
                res.end();
            }
        });
    }
    else if(type == "R"){
        record.find({date: date, region: region, type: type, scale: scale}).sort({round_round: -1, round_remainder: -1}).exec(function(err, doc){
            if(err){
                console.error(err.message);
            }
            else{
                var res_data = new Object();
                res_data.code = "9999";

                var add_data = new Object();
                add_data.result = doc;

                res_data.response = add_data;

                res.send(res_data);
                res.end();
            }
        });
    }
    else if(type == "P"){
        record.find({date: date, region: region, type: type, scale: scale}).sort({point_point: -1}).exec(function(err, doc){
            if(err){
                console.error(err.message);
            }
            else{
                var res_data = new Object();
                res_data.code = "9999";

                var add_data = new Object();
                add_data.result = doc;

                res_data.response = add_data;

                res.send(res_data);
                res.end();
            }
        });
    }

});

module.exports = router