import React from 'react';
import Field from './Field'

class CVItem extends React.Component {
	constructor(props){ 
		super(props)
		this.state = {
			editable: this.props.editable
		}
	}

	static getDerivedStateFromProps(props, state) {
		if(props.editable !== state.editable){
			return ({
				editable: props.editable
			})
		}
		return null;
	}



	render() {
		let {position, organization, city, from, to, description} = this.props.data
		return(
			<div id={this.props.id} className={this.props.className}>
				<Field labelText="Position" labelName="position" editable={this.state.editable} value={position}/>  
				<Field labelText="Company or School" labelName="organization" editable={this.state.editable} value={organization} />  
				<Field labelText="City" labelName="city" editable={this.state.editable} value={city} />  
				<Field labelText="From" labelName="from" editable={this.state.editable} value={from} />  
				<Field labelText="To" labelName="to" editable={this.state.editable} value={to}/>  
				<Field labelText="Description" labelName="description" editable={this.state.editable} value={description} />  
			</div>
		)

	}

} 

export default CVItem
