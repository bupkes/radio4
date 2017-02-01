var request = require('request');

request('http://www.bbc.co.uk/radio4/programmes/schedules/fm/today.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    body = JSON.parse(body);
    var now = new Date();
    var jsonDate = now.toJSON();
    console.log(jsonDate);
    var programmes = body.schedule.day.broadcasts;
    console.log("try this:    " + programmes[1]);


// go through each entry and check if the programme is on
// should be a case of comparing


  }
})
