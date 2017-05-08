import React, { Component } from 'react';

export default class ModalCnt extends Component {
  componentDidMount() {
    document.body.classList.add('no-scroll');
  }

  componentWillUnmount() {
    document.body.classList.remove('no-scroll');
  }

  render() {
    return (
      <div className={`modal is-active`}>
        <div className="modal__inner">
          <button
            type="button"
            className="btn btn--lined btn--sm modal__close"
            onClick={() => this.props.setModalStatus(false)}>Sluit</button>
          {this.props.children}
        </div>
      </div>
    )
  }
}
