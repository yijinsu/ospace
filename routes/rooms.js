var express = require('express');
var router = express.Router();

/* GET rooms listing. */
router.get('/rooms', function(req, res) {
    var data = req.app.get('roomsData');
    var pageRooms = data.rooms;

    res.render('rooms', {
    title: 'Seats in each room',
    rooms: pageRooms,
    pageID:'roomsList'});
});

router.get('/rooms/:roomid', function(req, res) {
  var data = req.app.get('roomsData');
  var pageSeats = [];
  var pageRooms = [];

  data.rooms.forEach(function(item) {
    if (item.shortname == req.params.roomid) {
      pageRooms.push(item);
      pageSeats = pageSeats.concat(item.seats);
    }
  });

  res.render('rooms', {
        title: 'Room Info',
        seats: JSON.stringify(pageSeats),
        rooms:pageRooms,
        pageID:'roomsDetail'
  });
});

module.exports = router;
