import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Moment from 'react-moment';
import moment from 'moment';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = { seconds : 0, todayDate: moment().format() };
	}

	tick() {
		this.setState(prevState => ({
			seconds: prevState.seconds + 1,
			todayDate: moment().format()
		}));
	}

	componentDidMount() {
		this.interval = setInterval( () => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	calculateTimer() {
		
		const startDate = moment().hours(18).minutes(54).seconds(0).format();
		
		if(moment(this.state.todayDate).isSameOrAfter(startDate)) {
			return (
				<span>
					We have reached maximum momentum. Start the timers!
				</span>
			)
		} else {
			return (
				this.state.todayDate
			)
		}
	}

	render() {

		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p>
					Seconds : {this.state.seconds}
				</p>
				<p>
					Current Date: { this.calculateTimer() }
				</p>
			</div>
		);
	}
}

export default App;
