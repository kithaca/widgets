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
  
});

module.exports = WeatherClock;
