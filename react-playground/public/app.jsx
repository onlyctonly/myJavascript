var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: "jxyu",
      message: "yoyo, how do you do? man"
    };
  },
  onButtonClick: function(e){
    e.preventDefault();
    var name = this.refs.name.value;
    alert(name);

  },
  render: function(){
    var name =this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + "!!"}</p>

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
