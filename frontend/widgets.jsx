var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./tabs');
var WeatherClock = require('./weatherclock');
var Autocomplete = require('./autocomplete');

var Widgets = React.createClass({
  getInitialState: function () {
    return {
      tabs: [
        {title: "first", content: "first widget", id: 0},
        {title: "second", content: "second widget", id: 1},
        {title: "third", content: "third widget", id: 2}
      ],
      names: ["Markov", "Gizmo", "Breakfast", "Earl", "Lassie", "Old Dan"]
    };
  },

  render: function () {

    return(
      <div>
        <Tabs tabs={this.state.tabs}></Tabs>
        <WeatherClock></WeatherClock>
        <Autocomplete names={this.state.names}></Autocomplete>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets/>, document.getElementById('main'));
});
