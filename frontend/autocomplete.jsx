var React = require('react');
var ReactDOM = require('react-dom');

var Autocomplete = React.createClass(
  {
    getInitialState: function () {
      return {value: ""};
    },

    handleChange: function (event){
      this.setState({value : event.target.value});
    },

    handleClick: function (name) {
      this.setState({value : name});
    },

    render: function () {
      var that = this;
      var downcased = this.props.names.map(function (name) {return name.toLowerCase();});
      var foundNames = downcased.filter( function(el) {
        var re = new RegExp(that.state.value);
        if (el.match(re)) {
          return true;
        } else {
          return false;
        }
      });
      return (<article>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>

        <ul>
          {
            foundNames.map(function (el) {
              return (<li onClick={that.handleClick.bind(that, el)}>{el}</li>);
            })
          }
        </ul>
      </article>);
    }
  }
);


module.exports = Autocomplete;
