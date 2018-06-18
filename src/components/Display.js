import React from "react";
import Typography from '@material-ui/core/Typography';

class Display extends React.Component {
	render() {
		return (
			<div>
			{ !this.props.error && this.props.city && this.props.country && <p><Typography variant="headline" gutterBottom>Location: {this.props.city}, {this.props.country} </Typography></p> }
			{ !this.props.error && this.props.temp && <p><Typography variant="headline" gutterBottom>Temperature: {this.props.temp} °F </Typography></p>}
			{ !this.props.error && this.props.humidity && <p><Typography variant="headline" gutterBottom>Humidity: {this.props.humidity}% </Typography></p>}
			{ this.props.error && <p>{this.props.error}</p>}
			</div>
		);
	}
};

export default Display;