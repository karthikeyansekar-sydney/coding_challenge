import React from 'react';

export class Buttn extends React.Component {
	render() {
		return (
			<button
				className={ this.props.light ? 'light-button' : 'dark-button' } onClick={this.props.onClick}>
				Refresh
			</button>
		);
	}
}
