import React from 'react';

import API from './Services/PersonService';


export default class PersonList extends React.Component {

	state = {
		persons: [],
		name: '',
	}

	componentDidMount() {
		API.get('users')
			.then(res => {
				const persons = res.data;
				this.setState({ persons });
			})
	}

	handleChange = event => {
		this.setState({ name: event.target.value });
	}

	handleSubmit = async event => {
		event.preventDefault();

		const user = {
			name: this.state.name
		};

		const response = await API.delete(`users/${this.state.id}`)
			.then(res => {
				console.log(res);
				console.log(res.data);
			})

		console.log(response);
	}


	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Person Name:
						<input type="text" name="name" onChange={this.handleChange} />
					</label>
					<button type="submit">Add</button>
				</form>
				<ul>
					{this.state.persons.map(person => <li>{person.name}</li>)}
				</ul>
			</div>
		)
	}
}