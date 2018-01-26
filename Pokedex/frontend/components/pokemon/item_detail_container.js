import { connect } from 'react-redux';
import { selectSingleItem } from '../../reducers/selectors';
import ItemDetail from './item_detail';

const mapStateToProps = (state, ownProps) => {
  return ({
    singleItem: selectSingleItem(state, ownProps.match.params.itemId)
  });
};


export default connect(
  mapStateToProps,
  null
)(ItemDetail);
