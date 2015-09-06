var TwinRouter = module.exports = function(io) {

    var _class = {};

    var router = require('express').Router();
    var socketRouter = require('ajaxy-websockets');
    var ajaxy = new socketRouter(io);


    _class.get = function(route, callback) {
      router.get(route, callback);
      ajaxy.get(route, callback);
    }


    _class.post = function(route, callback) {
      router.post(route, callback);
      ajaxy.post(route, callback);
    }


    _class.put = function(route, callback) {
      router.put(route, callback);
      ajaxy.put(route, callback);
    }


    _class.delete = function(route, callback) {
      router.delete(route, callback);
      ajaxy.put(route, callback);
    }


    return {
      router: router,
      builder: _class
    };

  }
