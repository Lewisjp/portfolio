// <script>
// Working with Dates

Date.prototype.addHours = function(h) {
  this.setTime(this.getTime() + (h*60*60*1000));
  return this;
}

// API Calls

function loadBronx(){
  var BronxURL = "http://api.wunderground.com/api/0486ba7f7ee73edb/hourly10day/q/NY/Bronx.json";
  loadDoc(BronxURL,"the Bronx, NY");
}

function loadWestchester(){
  var WestchesterURL = "http://api.wunderground.com/api/0486ba7f7ee73edb/hourly10day/q/NY/Westchester.json";
  loadDoc(WestchesterURL,"Westchester, NY");
}

function loadMap(){
  document.getElementById("row").innerHTML = '<img src="/img/background/map16district.png" class="img-responsive">';
}


function loadDoc(weatherURL,placeName) {
  var contentKing = new String;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log("API Call succeeded.");
      contentKing = this.responseText;
      displayWeather(contentKing,placeName,weatherURL);
    } else if (this.readyState != 4 && this.status != 200) {
      document.getElementById("row").innerHTML = "API call in progress.";
    }
  };
  xhttp.open("GET", weatherURL, true);
  xhttp.send();
  return contentKing;
}

function displayWeather(reportJSON, reportPlace, weatherURL){
  var todayDate = new Date();
  var tomorrowDate = new Date().addHours(24);
  var thirdDate = new Date().addHours(48);
  var fourthDate = new Date().addHours(72);
  document.getElementById("row").innerHTML = "<center><H1>Weather Forecast for "+reportPlace+"</H1></center><div id='dayone' class='col-3 col-md-offset-1'><div id='daily'></div><div id='hourly'></div></div><div id='daytwo' class='col-3 col-md-offset-1'><div id='daily'></div><div id='hourly'></div></div><div id='daythree' class='col-3 col-md-offset-1'><div id='daily'></div><div id='hourly'></div></div><div id='dayfour' class='col-3'><div id='daily'></div><div id='hourly'></div></div>";

  overAll(todayDate, "dayone", weatherURL);
  checkhour(reportJSON, todayDate, "dayone");
  
  overAll(tomorrowDate, "daytwo", weatherURL);
  checkhour(reportJSON, tomorrowDate,"daytwo");
  
  overAll(thirdDate, "daythree", weatherURL);
  checkhour(reportJSON, thirdDate, "daythree");
  
  overAll(fourthDate, "dayfour", weatherURL);
  checkhour(reportJSON, fourthDate, "dayfour");
  
}

function overAll(whichDay, whichId, weatherURL){
  var dailyWeatherURL =  weatherURL.replace("hourly10day","forecast10day");
  var contentQueen = new String;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log("API Call succeeded.");
      contentQueen = this.responseText;
      var dailyDetails = JSON.parse(contentQueen);
      for(i = 0; i < dailyDetails.forecast.simpleforecast.forecastday.length; i++ ){
        if(dailyDetails.forecast.simpleforecast.forecastday[i].date.day == whichDay.getDate()) {
          $("#"+ whichId + " #daily").append("<center><strong>&nbsp;&nbsp;"+whichDay.toDateString()+"&nbsp;&nbsp;</strong><br><br><img src='"+dailyDetails.forecast.simpleforecast.forecastday[i].icon_url +"' class='img-responsive'><br>"+dailyDetails.forecast.simpleforecast.forecastday[i].conditions+"<br><br></center>");
        }
      }
    } else if (this.readyState != 4 && this.status != 200) {
      console.log("API call in progress.");
    }
  };
  xhttp.open("GET", dailyWeatherURL, true);
  xhttp.send();
}

function checkhour(reportJSON, whichDay,whichId) {
  $("#" + whichId + " #hourly").append("<center><strong>Hourly Weather</strong></center><br>");
  var rawDetails = JSON.parse(reportJSON);
  for(i = 0; i < rawDetails.hourly_forecast.length; i++ ){
    if(rawDetails.hourly_forecast[i].FCTTIME.mday == whichDay.getDate()) {
      if(rawDetails.hourly_forecast[i].FCTTIME.hour > 8 && rawDetails.hourly_forecast[i].FCTTIME.hour < 13) {
          if(rawDetails.hourly_forecast[i].FCTTIME.hour == 12) {
            $("#"+ whichId + " #hourly").append(rawDetails.hourly_forecast[i].FCTTIME.hour + " PM / " + rawDetails.hourly_forecast[i].condition + "<br>");
          } else {
            $("#"+ whichId + " #hourly").append(rawDetails.hourly_forecast[i].FCTTIME.hour + " AM / " + rawDetails.hourly_forecast[i].condition + "<br>");
          }
      }
      else if(rawDetails.hourly_forecast[i].FCTTIME.hour > 12 && rawDetails.hourly_forecast[i].FCTTIME.hour < 22) {
          $("#"+ whichId + " #hourly").append((rawDetails.hourly_forecast[i].FCTTIME.hour - 12) + " PM / " + rawDetails.hourly_forecast[i].condition + "<br>");
      }
    }
  }
}

// Debugging

// </script>