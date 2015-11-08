import { connect } from 'react-redux';
import Main from '../components/Main';


require('normalize.css');
require('./App.scss');


function mapStateToProps(/* state */) {
  return {};
}


export default connect(mapStateToProps)(Main);
