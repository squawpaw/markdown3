var React = require('react');
var insertMarked = require('./insertMarked')

var App = React.createClass({
	getInitialState: function(){
		return {
			text: "",
			name: this.props.name
		}
	},

	handleUserInput: function(e){
		var uInput = e.target.value;
		this.setState({
			text: e.target.value,
		});
	},

	render: function(){

		return (<div>
			<h1> Greetings, {this.state.name}</h1>
			<textarea onChange={this.handleUserInput} value={this.state.text} />
			<div dangerouslySetInnerHTML = {insertMarked(this.state.text)} />
			</div>);
	}
});

module.exports = App;