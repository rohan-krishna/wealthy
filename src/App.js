import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Moment from 'react-moment';
import moment from 'moment';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = { seconds : 0, 
			todayDate: moment(),
			startDate : moment().hours(19).minutes(23).seconds(0),
			endDate: moment().hours(23).minutes(59).seconds(0)
		};
	}

	tick() {
		this.setState(prevState => ({
			todayDate: moment(),
			secondsDiff : prevState.endDate.diff(moment(), 'seconds'),
			minsDiff : prevState.endDate.diff(moment(), 'minutes')
		}));
	}

	componentDidMount() {
		this.interval = setInterval( () => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	calculateTimer() {
		
		if(moment(this.state.todayDate).isSameOrAfter(this.state.startDate)) {
			
			return (
				<span>
					<strong>
						We need to show this as minutes : {this.state.minsDiff}
					</strong>
				</span>
			)
		} else {
			return (
				<span>
					We have not reached max capacity : {this.state.todayDate.format("LTS")}
				</span>
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
					{ this.calculateTimer() }
				</p>
			</div>
		);
	}
}

export default App;
