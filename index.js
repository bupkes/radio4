var request = require('request');
request('http://www.bbc.co.uk/radio4/programmes/schedules/fm/today.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    body = JSON.parse(body);
    function convertToTwoDigits(n) {return n > 9 ? "" + n : "0" + n;};


    var listOfProgrammes = body.schedule.day.broadcasts;
    listOfProgrammes.forEach(function(programme, index) {
      // console.log(programme);

      var date = new Date(Date.parse(programme.start))
      var time = convertToTwoDigits(date.getUTCHours()) + "." + convertToTwoDigits(date.getUTCMinutes());
      console.log(time + " - " + programme.programme.display_titles.title);

    });






    // function convertToTwoDigits(n) {return n > 9 ? "" + n : "0" + n;};
    //
    // var date = new Date(Date.parse(listOfProgrammes.start))
    // var time = convertToTwoDigits(date.getUTCHours()) + "." + convertToTwoDigits(date.getUTCMinutes());
    // console.log(time + " - " + listOfProgrammes.programme.programme.title);


// go through each entry and check if the programme is on
// should be a case of comparing


  }
})


// NOW
// var now = new Date();
// var jsonDate = now.toJSON();
// console.log(jsonDate);
