import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as categoryActions from '../actions/categoryActions';
import Nav from '../components/Nav';

class NavCnt extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <Nav
        headerMode={this.props.headerMode || false}
        categories={this.props.categories}
        fetchSingleCat={this.props.fetchSingleCat}
        activeCat={this.props.categories.active} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  };
}

export default connect(mapStateToProps, categoryActions)(NavCnt);
