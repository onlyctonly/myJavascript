var React=require('react');
var ReactDOM=require('react-dom');

var GreeterMessage = require('./components/GreeterMessage');


var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: "jxyu",
      message: "yoyo, how do you do? man"
    };
  },
  getInitialState: function() {
    return {
      name:this.props.name
    };
  },
  onButtonClick: function(e){
    e.preventDefault();

    var nameref = this.refs.name;
    var name = nameref.value;
    nameref.value='';

    if (typeof name === 'string' && name.length>0) {
        this.setState({
        name: name
      });
    }
  },
  render: function(){
    var name = this.state.name;
    var message = this.props.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/><br/>
          <button>Submit</button>
        </form>
      </div>

    );
  }
});

ReactDOM.render(
  <Greeter />,
  document.getElementById('app')
);
