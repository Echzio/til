import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../core/actions/index'

const Main = ({ title, setTitle }) => {
  console.log(actions)
  return (
    <>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <p>{title}</p>
      <span>Main Page</span>
    </>
  );
};

const mapStateToProps = ({ window1: { title } }) => ({ title });
const mapDispatchToProps = dispatch => {
  const { setTitle } = bindActionCreators(actions, dispatch);
  return {
    setTitle: value => setTitle(value)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
