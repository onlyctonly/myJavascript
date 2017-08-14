class Clock extends React.Component {

  constructor(props) {
  super(props);
  this.state = {date: new Date()};
}

  // componentDidMount() {
  //   this.timerID = setInterval(
  //   () => this.tick(),
  //   1000
  // );
  // }
  //
  // componentWillUnmount() {
  //   clearInterval(this.timerID);
  // }
  //
  // tick() {
  //   this.setState({
  //     date: new Date()
  //   });
  // }
  handleclick(e) {
    // e.preventDefault();
    console.log("button clicked");
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={this.handleclick}>click me!</button>
      </div>
    );
  }
}
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
