var express = require('express');
var router = express.Router();

/* GET seats */
router.get('/seats', function(req, res) {
    var data = req.app.get('seatsData');
    var pageSeats = data.seats;

    res.render('seats', {
    title: 'Seats',
    seats: pageSeats,
    pageID:'seatsList'});
});

router.get('/seats/:seatid', function(req, res) {
  var data = req.app.get('seatsData');
  var pageSeats = [];
  var pageTime = [];
  var pageOccupation = [];
  var pageDate ='';


  data.seats.forEach(function(item) {
    if (item.id == req.params.seatid) {
      pageSeats.push(item);
      pageTime = pageTime.concat(item.tracktime);
      pageOccupation = pageOccupation.concat(item.occupation);
      pageDate = item.trackdate;
    }
  });

  res.render('seats', {
        title: 'Seat Info',
        seats: pageSeats,
        trackdate: JSON.stringify(pageDate),
        tracktime: JSON.stringify(pageTime),
        occupation:JSON.stringify(pageOccupation),
        pageID:'seatDetail'
  });
});

module.exports = router;