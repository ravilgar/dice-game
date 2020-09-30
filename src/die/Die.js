import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDiceOne,
	faDiceTwo,
	faDiceThree,
	faDiceFour,
	faDiceFive,
	faDiceSix,
} from "@fortawesome/free-solid-svg-icons";

export default class Die extends Component {
	render() {
		// задаем массив с ссылками на иконки
		const Dice = [
			faDiceOne,
			faDiceTwo,
			faDiceThree,
			faDiceFour,
			faDiceFive,
			faDiceSix,
		];
		return (
			<div className="Die">
				<FontAwesomeIcon icon={Dice[this.props.result]} size="10x" color="rgb(8, 49, 138)" />
			</div>
		);
	}
}
