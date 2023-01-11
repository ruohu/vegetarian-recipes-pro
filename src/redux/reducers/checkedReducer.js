const initialState = {
  checkedList: {
    cuisines: [],
    excludes: []
  },
  apiQuery: ""
}

const checkedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHECKED':
      let temp = state.checkedList[action.payload.category];
      temp.push(action.payload.checked);
      return ({
        ...state,
        checkedList: {
          ...state.checkedList,
          [action.payload.category]: temp
        }
      });
    case 'REMOVE_CHECKED':
      return {
        ...state,
        checkedList: {
          ...state.checkedList,
          [action.payload.category]: state.checkedList[action.payload.category].filter(
            (checked) => checked !== action.payload.checked
          )
        }
      };
    case 'SET_API_QUERY':
      return {
        ...state,
        apiQuery: action.payload
      };
    case 'RESET_CHECKED':
      return {
        ...state,
        checkedList: {
          cuisines: [],
          excludes: []
        },
      }
    default:
      return state;
  }
}


export default checkedReducer;
