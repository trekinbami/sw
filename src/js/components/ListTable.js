import React, { Component } from 'react';

class ListTable extends Component {
  render() {
    const { results, fetchSingleCat, activeCat, itemsLoading} = this.props;
    return (
      <table className={`table-view ${itemsLoading ? 'is-loading' : ''}`} data-loading-msg="Data ophalen..">
        <thead>
          <tr>
            <th>Naam</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result,i) =>
            <tr key={`list${i}`}>
              <td>{result.name || result.title}</td>
              <td><button type="button" className="btn btn--lined btn--sm" onClick={() => this.props.showSingleItem(result)}>Bekijk details</button></td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2" className="btn-cnt">
              { this.props.prevUrl && <button onClick={() => fetchSingleCat(this.props.prevUrl, activeCat)} className="btn btn--lined">Vorige</button> }

              { this.props.nextUrl && <button onClick={() => fetchSingleCat(this.props.nextUrl, activeCat)} className="btn btn--lined">Volgende</button> }
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default ListTable;
