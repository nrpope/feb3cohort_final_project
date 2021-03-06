import { /*  useEffect */ useState } from 'react';
import store from 'store';
import IngredientDB from '../data/mock-db';
/* import axios from 'axios'; */
//gonna be needing these soon
/* import HistoryFunctions from './HistoryFunctions'; */
export default function useApplicationData() {
  const [ state, setState ] = useState({
    value: [],
    results: {},
    snackBarOpen: false,
    ButtonGroup: false,
    history: [],
    addItem: [],
  });

  //when Filter results is ran, return the corresponding Info
  //Results does exist on the page, but is not rendering properly, when the term is searched for
  function snackHandler(bool = false) {
    return bool
      ? setState({
          ...state,
          snackBarOpen: true,
        })
      : setState({
          ...state,
          snackBarOpen: false,
        });
  }

  function resultWrapper() {
    const filterResults = (searchTerm) => {
      if (searchTerm.length === 0) {
        return [];
      }
      const filtered = IngredientDB.filter((result) =>
        result.name.toLowerCase().includes(searchTerm.replace(/s$/g, '').toLowerCase()),
      );
      setState({
        value: [ ...state.value, filtered ],
        results: [ ...filtered ],
      });
      store.set('LocalAppStorage', { filtered, ...state });
    };

    return { filterResults };
  }

  function ButtonOn(bool = false) {
    return bool
      ? setState({
          ...state,
          ButtonGroup: true,
        })
      : setState({
          ...state,
          ButtonGroup: false,
        });
  }
  /*  const addItem = (item) => {
    setState({
      history: item,
    });
  }; */
  return { state, resultWrapper, snackHandler, ButtonOn };
}
