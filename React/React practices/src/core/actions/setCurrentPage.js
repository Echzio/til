export const setCurrentPage = page => ({
  type: 'CHANGE_CURRENT_PAGE',
  payload: {
    page: Number(page),
  },
});
