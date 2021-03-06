export default {
  getBudgetById: (state, getters) => (budgetId) => {
    return state.budgets && budgetId in state.budgets ? state.budgets[budgetId] : false;
  },

  getCategoryById: (state, getters) => (categoryId) => {
    return state.categories && categoryId in state.categories ? state.categories[categoryId] : false;
  },

  getCategorySelectList: (state, getters) => {
    return state.categories && Object.keys(state.categories).length > 0 ? Object.values(state.categories) : [];
  },

  getBudgetCategoryById: (state, getters) => (budgetId, budgetCategoryId) => {
    return state.budgets && budgetId in state.budgets
      ? state.budgets[budgetId].budgetCategories && budgetCategoryId in state.budgets[budgetId].budgetCategories
        ? state.budgets[budgetId].budgetCategories[budgetCategoryId]
        : false
      : false;
  }
};
