import React, { Component } from 'react';
import NavBtn from './NavBtn';

class Nav extends Component {
  render() {
    return (
      <nav className={`navigation ${this.props.headerMode ? 'navigation--header' : ''}`}>
        <div className="wrapper">
          <div className="nav-content">
            {Object
              .keys(this.props.categories.items)
              .map((cat,i) => <NavBtn
                                key={`nav${i}`}
                                name={cat}
                                active={this.props.activeCat === cat ? true : false}
                                fetchSingleCat={this.props.fetchSingleCat}
                                url={this.props.categories.items[cat]} />)
            }
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
