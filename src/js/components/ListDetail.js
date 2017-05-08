import React from 'react';
import { underscoreToSpace } from '../helpers/helpers';

export default props => (
  <ul className="detail-list">
    {Object
      .keys(props.data)
      .map((key,i) => <li key={`detail${i}`}>
                        <span className="detail-list__title">{underscoreToSpace(key)}</span>
                        <div className="detail-list__content">
                          {Array.isArray(props.data[key])
                            ? <ul className="detail-list__sub-list">
                                {props.data[key].map((k,i) => <li key={`detaili${i}`}>{k}</li>)}
                              </ul>
                            : props.data[key]
                          }
                        </div>
                      </li>)}
  </ul>
)
