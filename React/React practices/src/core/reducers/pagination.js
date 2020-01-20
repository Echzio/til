export const pagination = (state = { currentPage: 1, countOnPage: 6 }, action) => {
  switch (action.type) {
    case 'CHANGE_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload.page,
      };
    case 'CHANGE_COUNT_ON_PAGE':
      return {
        ...state,
        countOnPage: action.payload.actionOnPage,
      };
    default:
      return state;
  }
};
