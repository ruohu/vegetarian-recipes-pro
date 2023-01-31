export const addChecked = (checked, category) => {
  return {
    type: 'ADD_CHECKED',
    payload: { checked, category }
  }
}

export const removeChecked = (checked, category) => {
  return {
    type: 'REMOVE_CHECKED',
    payload: { checked, category }
  }
}

export const setOptionsQuery = (optionsQuery) => {
  return {
    type: 'SET_API_QUERY',
    payload: optionsQuery
  }
}

export const resetChecked = () => {
  return {
    type: 'RESET_CHECKED'
  }
}
