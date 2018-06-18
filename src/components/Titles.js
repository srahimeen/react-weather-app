import React from "react";
import Typography from '@material-ui/core/Typography';

class Titles extends React.Component {
	render() {
		return (
			<div>
		      	<p><Typography variant="display2" gutterBottom>Weather App</Typography></p>
				<p><Typography variant="display1" gutterBottom>Get basic weather information...</Typography></p>
			</div>
		);
	}
};

export default Titles;