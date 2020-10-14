import React, { Component } from 'react';
import './HomePage.scss';
import axios from 'axios';
import ChartJSComponent from '../ChartJSComponent/ChartJSComponent';
import D3JSComponent from '../D3JSComponent/D3JSComponent';

export default class HomePage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			budgets: []
		}
	}

	async componentDidMount() {
		const res = (await axios.get("http://localhost:3000/budget")).data.data;
		this.setState({ budgets: res });
		this.forceUpdate();
	}

	render() {
		return (
			<div className="page-area" role="presentation">
				<article className="text-box" itemProp="additionalProperty" itemScope
					itemType="https://schema.org/PropertyValue">
					<h1 itemProp="name">D3 JS</h1>
					<D3JSComponent itemProp="value" budgets={this.state.budgets} />
				</article>
				<article className="text-box" itemProp="additionalProperty" itemScope
					itemType="https://schema.org/PropertyValue">
					<h1 itemProp="name">Chart JS</h1>
					<ChartJSComponent itemProp="value" budgets={this.state.budgets} />
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