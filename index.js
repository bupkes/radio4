var request = require('request');
request('http://www.bbc.co.uk/radio4/programmes/schedules/fm/today.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    body = JSON.parse(body);
    function convertToTwoDigits(n) {return n > 9 ? "" + n : "0" + n;};

    var arr=[];
    var listOfProgrammes = body.schedule.day.broadcasts;
    listOfProgrammes.forEach(function(programme, index) {
      // console.log(programme);

      var date = new Date(Date.parse(programme.start))
      var time = convertToTwoDigits(date.getUTCHours()) + "." + convertToTwoDigits(date.getUTCMinutes());
      var programmeName = programme.programme.display_titles.title;
      // console.log(time + " - " + programme.programme.display_titles.title);
      arr.push({
            "time": time,
            "programmeName": programmeName
    });
      console.log(time + " - " + programmeName);
  })

return(arr);



// TODO - add to array a short description of the programme
// var now = new Date();
// var jsonDate = now.toJSON();
// console.log(jsonDate);

// TODO make functions for getting current/next programmes


  }
})
