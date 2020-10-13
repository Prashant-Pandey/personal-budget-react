import React, { Component } from 'react';
import './HomePage.css';

export default class HomePage extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="page-area" role="presentation">
				<article className="text-box" itemProp="additionalProperty" itemScope
					itemType="https://schema.org/PropertyValue">
					<h1 itemProp="name">D3 JS</h1>
					<p itemProp="value">
						<svg id="d3Chart" height="300" width="500"></svg>
					</p>
				</article>
				<article className="text-box" itemProp="additionalProperty" itemScope
					itemType="https://schema.org/PropertyValue">
					<h1 itemProp="name">Chart JS</h1>
					<p itemProp="value">
						<canvas id="myChart" height="300" width="500"></canvas>
					</p>
				</article>
				<article className="text-box" itemProp="additionalProperty" itemScope
					itemType="https://schema.org/PropertyValue">
					<h1 itemProp="name">Stay on track</h1>
					<p itemProp="value">
						Do you know where you are spending your money? If you really stop to track it down,
						you would get surprised! Proper budget management depends on real data... and this
						app will help you with that!
					</p>
				</article>
				<article className="text-box" itemProp="additionalProperty" itemScope
					itemType="https://schema.org/PropertyValue">
					<h1 itemProp="name">Alerts</h1>
					<p itemProp="value">
						What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
					</p>
				</article>
				<article className="text-box" itemProp="additionalProperty" itemScope
					itemType="https://schema.org/PropertyValue">
					<h1 itemProp="name">Results</h1>
					<p itemProp="value">
						People who stick to a financial plan, budgeting every expense, get out of debt faster!
						Also, they to live happier lives... since they expend without guilt or fear...
						because they know it is all good and accounted for.
					</p>
				</article>
				<article className="text-box" itemProp="additionalProperty" itemScope
					itemType="https://schema.org/PropertyValue">
					<h1 itemProp="name">Free</h1>
					<p itemProp="value">
						This app is free!!! And you are the only one holding your data!
					</p>
				</article>
				<article className="text-box" itemProp="additionalProperty" itemScope
					itemType="https://schema.org/PropertyValue">
					<h1 itemProp="name">Stay on track</h1>
					<p itemProp="value">
						Do you know where you are spending your money? If you really stop to track it down,
						you would get surprised! Proper budget management depends on real data... and this
						app will help you with that!
					</p>
				</article>
				<article className="text-box" itemProp="additionalProperty" itemScope
					itemType="https://schema.org/PropertyValue">
					<h1 itemProp="name">Alerts</h1>
					<p itemProp="value">
						What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
					</p>
				</article>
			</div>
		)
	}
}