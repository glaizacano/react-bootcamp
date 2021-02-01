import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
	// constructor(props) {
	//     // reference to the parent component's constructor function
	//     super(props);

	//     // initialise state
	//     this.state = { latitude: null, errorMessage: '' };
	// }

	// alternate state initialisation
	state = { latitude: null, errorMessage: "" };

	componentDidMount() {
		console.log("My component was rendered to the screen");
		// gets current position
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ latitude: position.coords.latitude }),
			(err) => this.setState({ errorMessage: err.message })
		);
	}

	componentDidUpdate() {
		console.log("My component was just updated - it re-rendered!");
	}

	// helper method
	renderContent() {
		// check if an error occured
		if (this.state.errorMessage && !this.state.latitude) {
			// display error message
			return <div>Error: {this.state.errorMessage}</div>;
		}

		// check if latitude exists
		if (!this.state.errorMessage && this.state.latitude) {
			// display latitude
			return <SeasonDisplay latitude={this.state.latitude} />;
		}

		// else display 'Loading...'
		return <Spinner message="Please accept the geolocation request." />
	}

	render() {
		return (
			<div>
				{this.renderContent()}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
