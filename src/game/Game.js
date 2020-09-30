import React, { Component } from "react";
import Die from "../die/Die";
import "./Game.css";

// Получает случайное число от 0 до 5
function getRandomDice() {
	return Math.floor(Math.random() * 6);
}

export default class Game extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dice1: getRandomDice(),
			dice2: getRandomDice(),
		};
		this.handleClick = this.handleClick.bind(this);
	}
	// Обновить кубики при нажатии
	handleClick(e) {
		this.setState({ dice1: getRandomDice(), dice2: getRandomDice() });
	}
	render() {
		// возвращает сумму, выпавших значений кубиков
		const sum = this.state.dice1 + 1 + this.state.dice2 + 1;
		return (
			<div>
				<h1>You result is {sum}</h1>
				<button className="Game-button" onClick={this.handleClick}>
					Shake!
				</button>
				<Die result={this.state.dice1} />
				<Die result={this.state.dice2} />
			</div>
		);
	}
}
