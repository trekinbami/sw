import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
  <Link
    to="/list"
    type="button"
    className={`btn btn--lined ${props.active && 'is-active'}`}
    onClick={() => props.fetchSingleCat(props.url, props.name)}>{props.name}</Link>
);
