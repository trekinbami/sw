import axios from 'axios';
import { FETCH_CATEGORIES, FETCH_ITEMS, SET_ACTIVE_CATEGORY, LOADING_ITEMS, SET_SINGLE_ITEM, SET_MODAL_STATUS } from './types';
import { BASE_URL } from '../helpers/constants';
import { isUrl } from '../helpers/helpers';

export function fetchCategories() {
  return function(dispatch) {
    axios.get(`${BASE_URL}`)
      .then(data => {
        dispatch({
          type: FETCH_CATEGORIES,
          payload: data.data
        });
      });
  }
}

export function fetchSingleCat(url, name){
  return function(dispatch) {
    dispatch({
      type: SET_ACTIVE_CATEGORY,
      payload: name
    });

    dispatch({
      type: LOADING_ITEMS,
      payload: true
    });

    axios.get(url)
      .then(data => {
        dispatch({
          type: FETCH_ITEMS,
          payload: data.data
        });

        dispatch({
          type: LOADING_ITEMS,
          payload: false
        });
      });
  }
}

export function axGet(url){
  return axios.get(url);
}

export function setSingleItem(originalDetails, urlData, name) {
  return function(dispatch){
    dispatch({
      type: LOADING_ITEMS,
      payload: true
    });

    axios.all(urlData.map(url => axGet(url)))
      .then(data => {
        let newDetails = {...originalDetails};

        data.forEach(d => {
          const url = d.data.url;
          const name = d.data.title || d.data.name;

          Object.keys(originalDetails).forEach(key => {
            const val = originalDetails[key];
            const keyArr = [...originalDetails[key]];
            isUrl(val) && keyArr.push(val);

            const flag = keyArr.some(url => isUrl(url));

            if (!flag)
              return;

            const includesUrl = keyArr.includes(url);

            if (includesUrl) {
              const isString = typeof newDetails[key] === 'string';
              newDetails[key] = isString ? [newDetails[key]] : newDetails[key];

              const i = newDetails[key].indexOf(url);
              newDetails[key].splice(i, 1);
              newDetails[key].push(name);
            }
          });
        });

        delete newDetails['created'];
        delete newDetails['edited'];
        delete newDetails['url'];

        dispatch({
          type: LOADING_ITEMS,
          payload: false
        });
        
        dispatch({
          type: SET_SINGLE_ITEM,
          payload: newDetails
        });

        dispatch({
          type: SET_MODAL_STATUS,
          payload: true
        });


      });
  }
}
