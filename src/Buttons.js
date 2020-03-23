import React from 'react';
import './index.css';

class Buttons extends React.Component {
	render() {
		return (
			<button className='buttons' onClick={() => this.props.onClick()}>{this.props.value}</button>
		);
	}
}

export default Buttons;