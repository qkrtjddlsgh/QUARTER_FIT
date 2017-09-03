var express = require('express');
var router = express.Router();
var record = require('../../models/Record');

router.post('/', function(req, res){
    var recv_data = req.body;

    var date = recv_data.date;
    var region = recv_data.region;
    var gender = recv_data.gender;
    var name = recv_data.name;

    record.find({date: date, region: region, gender: gender, name: name}, function(err, doc){
        if(err){
            console.error(err.message);
        }
        if(doc.length == 0){
            var res_data = new Object();
            res_data.code = "8888";
            res_data.message = "Record is not exist";

            res.send(res_data);
            res.end();
        }
        else{
            record.remove({date: date, region: region, gender: gender, name: name}, function(err, result){
                if(err){
                    console.error(err.message);
                }
                else{
                    var res_data = new Object();
                    res_data.code = "9999";
                    res_data.message = "Record is removed";

                    res.send(res_data);
                    res.end();
                }
            });
        }
    });

});

module.exports = router;