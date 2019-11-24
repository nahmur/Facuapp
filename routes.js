const express = require('express');
const router = express.Router();
const City = require('./backend/City');

router.route('/api/cities')
    .get(async function(req, res){
        try{
            const cities = await City.find();
            res.send(cities);
        } catch(e){
            res.send(e);
        }
    })
    .post(async function(req, res){
        try{
            const city = new City({name: req.body.name, country: req.body.country, url: req.body.url});
            await city.save();
            res.send(city);
        } catch(e){
            res.send(e);
        }
    });

router.route('/api/cities/:id')
    .get(async function(req, res){
        try{
            const city = await City.findById(req.params.id);
            res.send(city);
        } catch(e){
            res.send(e);
        }
    })
    .delete(async function(req, res){
        try{
            const city = await City.findOneAndDelete({_id: req.params.id});
            res.send(city);
        } catch(e){
            res.send(e);
        }
    })
    .put(async function(req, res){
        try{
            const city = await City.findByIdAndUpdate(req.params.id, req.body);
            res.send(city);
        } catch(e){
            res.send(e);
        }
    });

module.exports = router;