import React from 'react';



class Field extends React.Component {
	constructor(props) { 
		super(props)

		this.state = {
			text: "" 
		}
		this.handleChange = this.handleChange.bind(this)
		if(this.props.value !== ""){
			this.setState({text: this.props.value}) 
		}
	}

	handleChange(e){
		let text = e.target.value
		this.setState({text: text});
	}


	
	render() {

		if(this.props.editable){ 
		return ( 
			<div className={this.props.className}>
			<input className={"field"} id="labelName" onChange={this.handleChange} placeholder={this.props.labelText} value={this.state.text}></input> 
			</div>
		)}
		else{
		return (
			<div className={this.props.className}>
			<span className="savedField">{this.state.text === "" ? this.props.labelText : this.state.text}</span> 
			</div>
		)}
	}
}
export default Field;
