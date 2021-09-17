import React from "react";
import CVItem from "./CVItem";
class ExpandableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
			childrenEditable: this.props.editable
    };
    this.addItem = this.addItem.bind(this);
		this.toggleEditable = this.toggleEditable.bind(this) 
  }



  addItem() {
    let itemNum = this.state.list.length;
    let newItem = {
        id:`${this.props.listName}_${itemNum}`,
        key:`${this.props.listName}_${itemNum}`,
        editable:this.state.childrenEditable,
				data: {} ,
    };
    let currList = this.state.list;
    this.setState( {
      list: [ newItem, ...currList],
    });
  }

	componentDidUpdate(prevProps) {
		if(prevProps.editable !== this.props.editable)
		{
			this.toggleEditable(this.props.editable)
			this.state.list.forEach((item) => { 
			item.editable = this.state.childrenEditable
			})
		}
	}

	toggleEditable(value){ 
		this.setState( {childrenEditable: value}) 
	}

	static getDerivedStateFromProps(props,_state){
		return ({
			childrenEditable: props.editable

		})
	}


  render() {
    let jsxList = null;
    if (this.state.list.length !== 0)
      jsxList = this.state.list;

    return (
      <div key={this.props.listName} className="expandablelist">
        {jsxList && jsxList.map((item)=>{
					console.log(item);
					return(<CVItem {...item} className="cvitem"/>)
				})}
        <button type="button" onClick={this.addItem}>
          Add Item
        </button>
      </div>
    );
  }
}

export default ExpandableList;
