var React = require('react');
var ReactDOM = require('react-dom');

var WeatherClock = React.createClass({

  render: function () {
    return (
      <div>
        <Clock></Clock>
        <Weather></Weather>
      </div>
    );
  }
});

var Clock = React.createClass({
  getInitialState: function () {
    return { currentTime: 0};
  },

  componentDidMount: function () {
    this.setState({ currentTime: new Date() });
    this.timer = setInterval(this.tick, 1000);
  },

  tick: function () {
    var time = this.state.currentTime;
    time.setSeconds(time.getSeconds() + 1);
    this.setState(
      {
        currentTime: time
      }
    );
  },

  render: function () {
    return (
      <div>{this.state.currentTime.toString()}</div>
    );
  }

});

var Weather = React.createClass({
  getInitialState: function () {
    return { currentLat: null, currentLon: null};
  },

  componentDidMount: function() {
    var lat, lon;
    var that = this;
    var coord = window.navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      that.setState({ currentLat: lat, currentLon: lon});
      that.queryOpenWeather();
    });
  },

  queryOpenWeather: function () {
    var request = new XMLHttpRequest();
    var that = this;

    request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat='
      + this.state.currentLat + '&lon=' + this.state.currentLon
      + '&APPID=645c5d39c7603f17e23fcaffcea1a3c1', true);

    // request.withCredentials = true;
    // request.setRequestHeader('APPID', '645c5d39c7603f17e23fcaffcea1a3c1');

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var resp = request.responseText;
        var parsed = JSON.parse(resp);
        var desp = parsed.weather[0].description;
        var temp = parsed.main.temp - 273;
        that.setState({description : desp, temperature : Math.round(temp).toString()});
      } else {
        // We reached our target server, but it returned an error
        console.log("reached but error");
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
      console.log("just bad");
    };

    request.send();
  },

  render: function () {
    return (<div>Description: {this.state.description}, temperature: {this.state.temperature}</div>);
  }

});

module.exports = WeatherClock;
