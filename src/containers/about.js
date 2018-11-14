/*
 about
 */

import React, { Component } from 'react';
import '../styles/about.less';
import { Link } from 'react-router-dom';
import { addToCart, logOut } from '../actions/about-actions';
import { connect } from 'react-redux';
import Tab from '../components/tab/tab';

class About extends Component {
  constructor() {
    super();
    this.state = {
      themeColor : 'red'
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    this.props.addToCart({
      action: 'yonghuChanpin',
      cid: 2,
      idCard: 2017092001,
      company_type: 1,
    })
  }

  componentWillUnmount() {
    this.props.logOut({});
  }

  render() {
    return (
      <div className="about">
        <Link to="/list">list</Link>
        <Tab aboutListItem={this.props.aboutListItem.chanPinList} />
        <span className="custom-item" onClick={this.addToCart}>dj</span>
        <ul>
          {this.props.aboutListItem.chanPinList.map((data) => {
            return (
              <li key={data.id}>{data.name}</li>
            )
          })}
        </ul>
        about123
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    aboutListItem: state.aboutReducerData
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart:(res) => {
      dispatch(addToCart(res))
    },
    logOut:(res) => {
      dispatch(logOut(res))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(About);