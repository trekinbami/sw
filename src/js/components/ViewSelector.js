import React from 'react';

export default props => (
  <div className="btn-cnt mb10">
    <button
      type="button"
      className={`btn btn--lined btn--sm ${props.currentView === 'table' && 'is-active'}`}
      onClick={() => props.setView('table')}>Tableview</button>

    <button
      type="button"
      className={`btn btn--lined btn--sm ${props.currentView === 'grid' && 'is-active'}`}
      onClick={() => props.setView('grid')}>Gridview</button>
  </div>
)
