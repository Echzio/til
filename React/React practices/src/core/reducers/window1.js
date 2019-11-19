export const window1 = (state = { title: 'undefined title' }, action) => {
  switch (action.type) {
    case 'setTitle':
      return {
        ...state,
        title: action.payload.title,
      };
    default:
      return state;
  }
};
