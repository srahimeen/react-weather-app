import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Form extends React.Component {
	render() {
		return (
			<form onSubmit={this.props.getWeather}>
				<TextField label="City" floatingLabelText="City" name="city" onChange={this.change}/> <span></span>
				<TextField label="Country"floatingLabelText="Country" name="country" onChange={this.change} />
				<Button variant="raised" color="primary" type="submit">Submit</Button>
			</form>
		);
	}
};

export default Form;