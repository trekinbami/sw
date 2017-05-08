import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categoryActions from '../../actions/categoryActions';
import * as modalActions from '../../actions/modalActions';
import { isUrl } from '../../helpers/helpers';

import ModalCnt from '../../components/ModalCnt';
import ListDetail from '../../components/ListDetail';
import ListTable from '../../components/ListTable';
import ListGrid from '../../components/ListGrid';
import NavCnt from '../NavCnt';
import ViewSelector from '../../components/ViewSelector';

class List extends Component {
  constructor() {
    super();

    this.state = {
      view: 'table'
    };

    this.setView = this.setView.bind(this);
    this.showSingleItem = this.showSingleItem.bind(this);
  }

  componentDidMount() {
    if(!Object.keys(this.props.categories.items).length) {
      this.props.history.push('/');
    }
  }

  showSingleItem(result) {
    const name = result.name || result.title;
    const urlArr = Object.keys(result).reduce((prev, arrVal) => {
      if(isUrl(result[arrVal])){
        prev = [...prev, result[arrVal]];
      }

      return prev;
    }, []).reduce((prev, arrVal) => prev.concat(arrVal), []);

    this.props.categoryActions.setSingleItem(result, urlArr, name);
  }

  setView(view) {
    this.setState({ view })
  }

  render() {
    const { items } = this.props.items;

    return (
      <div>
        <NavCnt headerMode={true} />
        <div className="wrapper wrapper--small">
          <ViewSelector setView={this.setView} currentView={this.state.view} />
          {
            this.state.view === 'table'
              ? <ListTable
                  results={items.results || []}
                  itemsLoading={this.props.items.itemsLoading}
                  nextUrl={items.next}
                  prevUrl={items.previous}
                  fetchSingleCat={this.props.categoryActions.fetchSingleCat}
                  showSingleItem={this.showSingleItem}
                  activeCat={this.props.categories.active} />
              : <ListGrid
                  results={items.results || []}
                  itemsLoading={this.props.items.itemsLoading}
                  nextUrl={items.next}
                  prevUrl={items.previous}
                  fetchSingleCat={this.props.categoryActions.fetchSingleCat}
                  showSingleItem={this.showSingleItem}
                  activeCat={this.props.categories.active} />
          }

          { this.props.modal.active
            && <ModalCnt setModalStatus={this.props.modalActions.setModalStatus}>
                <ListDetail data={this.props.items.singleActive} />
               </ModalCnt> }

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    items: state.items,
    modal: state.modal
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    categoryActions: bindActionCreators(categoryActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
