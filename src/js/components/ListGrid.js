import React, { Component } from 'react';

class ListGrid extends Component {
  render() {
    const { results, fetchSingleCat, activeCat, itemsLoading} = this.props;
    return (
      <div className={`block-grid ${itemsLoading ? 'is-loading' : ''}`} data-loading-msg="Data ophalen..">
        {results.map((result,i) =>
          <article className="block" key={`list${i}`}>
            <div className="block__inner">
              <h3 className="block__title">{result.name || result.title}</h3>
              <button type="button" className="btn btn--lined btn--sm" onClick={() => this.props.showSingleItem(result)}>Bekijk details</button>
            </div>
          </article>
        )}
        <footer>
          <div className="btn-cnt">
            { this.props.prevUrl && <button onClick={() => fetchSingleCat(this.props.prevUrl, activeCat)} className="btn btn--lined">Vorige</button> }

            { this.props.nextUrl && <button onClick={() => fetchSingleCat(this.props.nextUrl, activeCat)} className="btn btn--lined">Volgende</button> }
          </div>
        </footer>
      </div>
    );
  }
}

export default ListGrid;
