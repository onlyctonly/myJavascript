class Logincontrol extends React.Component {
  constructor(props){
      super(props);
      this.state = {isLoggedIn:false};
      this.login=this.login.bind(this);
      this.logout=this.logout.bind(this);
  }

  login(){
    this.setState({isLoggedIn:true});
  }

  logout(){
    this.setState({isLoggedIn:false});
  }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        {isLoggedIn ?
          (<div><p>you are logged in</p><button onClick={this.logout}>logout</button></div>) :
          (<div><p>you are not logged in</p><button onClick={this.login}>login</button></div>)
        }
      </div>
    );
  }
}

  ReactDOM.render(
    <Logincontrol />,
    document.getElementById('root')
  );
