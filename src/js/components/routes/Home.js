import React, { Component } from 'react';
import NavCnt from '../../containers/NavCnt';

class Home extends Component {
  render() {
    return (
      <section className="full-page-block">
        <div>
          <header className="page-header mb20">
            <h1 className="page-header__title">Star Wars dingen</h1>
            <span>Selecteer je categorie:</span>
          </header>
          <NavCnt headerMode={false}/>
        </div>
      </section>
    );
  }
}

export default Home;
