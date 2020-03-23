import React from 'react';
import Buttons from './Buttons';
import Tip_Percentage from './Tip_Percentage';

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			totalAmount: 0,
			isDecimal: false,
			numDecimal: 0
		};
	}

	handleClick(buttonNum) {
		var temp = this.state.totalAmount;
		if (this.state.isDecimal) {
			const numDec = this.state.numDecimal + 1;
			if (numDec > 2) {
				return;
			}
			temp = Number((temp + (buttonNum / Math.pow(10, numDec))).toFixed(2));
			this.setState({
				numDecimal: numDec
			});
		} else {
			temp = (temp * 10) + buttonNum;
		}
		this.setState({
			totalAmount: temp,
		});
	}

	handleDec() {
		const temp = true;
		this.setState({
			isDecimal: temp
		});
	}

	handleClear() {
		this.setState({
			totalAmount: 0,
			isDecimal: false,
			numDecimal: 0
		})
	}

	handleTip(tipAmount) {
		var temp = this.state.totalAmount;
		temp = Number((temp + (tipAmount / 100) * temp).toFixed(2));
		this.setState({
			totalAmount: temp
		});
	}

	renderButton(buttonNum) {
		if (buttonNum == 10) {
			return (
				<Buttons buttonNum={buttonNum} 
				value={"."}
				onClick={() => this.handleDec()}/>
			);
		} else if (buttonNum == 11) {
			return (
				<Buttons buttonNum={buttonNum} 
				value={"Clear"}
				onClick={() => this.handleClear()}/>
			);
		}
		return (
			<Buttons buttonNum={buttonNum} 
			value={buttonNum} 
			onClick={() => this.handleClick(buttonNum)}/>
		);
	}

	renderTipButton(tipAmount) {
		return(
			<Tip_Percentage tipAmount={tipAmount}
				onClick={() => this.handleTip(tipAmount)} />
		);
	}

	render() {
		return (
			<div className="calculator">
				<div className="totalAmount">{this.state.totalAmount}</div>
				<div className="calcRow">
					{this.renderButton(0)}
					{this.renderButton(1)}
					{this.renderButton(2)}
				</div>
				<div className="calcRow">
					{this.renderButton(3)}
					{this.renderButton(4)}
					{this.renderButton(5)}
				</div>
				<div className="calcRow">
					{this.renderButton(6)}
					{this.renderButton(7)}
					{this.renderButton(8)}
				</div>
				<div className="calcRow">
					{this.renderButton(9)}
					{this.renderButton(10)}
					{this.renderButton(11)}
				</div>
				<div className="calcRow">
					{this.renderTipButton(10)}
					{this.renderTipButton(15)}
					{this.renderTipButton(20)}
				</div>
			</div>
		);
	}
}

export default Calculator;