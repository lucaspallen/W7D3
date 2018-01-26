import React from 'react';

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    // console.log(this.props);
    return (
      <div>
        <img className="item-img" src={this.props.singleItem.image_url}></img>
        <p>Item Id: {this.props.singleItem.id}</p>
        <p>Happiness: {this.props.singleItem.happiness}</p>
        <p>Name: {this.props.singleItem.name}</p>
        <p>Pokédollar Price: {this.props.singleItem.price}</p>
      </div>
    );
  }
}

export default ItemDetail;
