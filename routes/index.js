var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var data = req.app.get('roomsData');
  var pageRooms = data.rooms;

  res.render('index', {
    title: 'ASML SEATS ASSIGNMENT',
    rooms: pageRooms});
});

module.exports = router;
