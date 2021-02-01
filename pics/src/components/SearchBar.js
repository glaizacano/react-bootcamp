import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	onFormSubmit = (event) => {
		// Prevents the browser from executing default action/submitting the form to the backend server and refresh the page
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label htmlFor="search">Image Search</label>
						<input
							type="text"
							id="search"
							value={this.state.term}
							onChange={(e) => this.setState({ term: e.target.value })}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
