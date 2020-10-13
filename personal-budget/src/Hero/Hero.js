import React, { Component } from 'react';
import './Hero.css';

export default class Hero extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="hero" itemScope itemType="https://schema.org/Product" role="heading">
				<h1 itemProp="name">Personal Budget</h1>
				<h2 itemProp="description">A personal-budget management app</h2>
			</section>
		)
	}
}