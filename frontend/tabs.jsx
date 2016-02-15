var React = require('react');
var ReactDOM = require('react-dom');

var Tabs = React.createClass({
  selected: 0,

  getInitialState: function () {
    return {
      selected: 0
    };
  },

  tabClick: function (key) {
    this.setState({selected: key});
  },

  render: function () {
    var tabs = this;
    return(
      <div>
        <ul>
          {
          this.props.tabs.map(function(tab) {
            return <li key={ tab.id } onClick={tabs.tabClick.bind(tabs, tab.id)}>{ tab.title }</li>;
          })
        }
        </ul>
        <article>
          {this.props.tabs[this.state.selected].content}
        </article>
      </div>
    );
  }
});

module.exports = Tabs;
