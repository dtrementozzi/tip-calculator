import React from 'react';

class Tip_Percentage extends React.Component {
	render() {
		return(
			<button className='tipPercentage' onClick={() => this.props.onClick()}>{this.props.tipAmount + "%"}</button>
		);
	}
}

export default Tip_Percentage;