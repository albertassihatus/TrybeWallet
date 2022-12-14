// Esse  será responsável por tratar o todas as informações relacionadas as despesas

const initialState = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo
};

function wallet(state = initialState, action) {
  // desestruturar o state da action tbm é uma possibilidade
  // const { walletData } = action;

  switch (action.type) {
  case 'COIN_PRICE':
    return {
      ...state,
      currencies: action.currencies,
    };
  case 'ADD_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses, action.walletData],
    };
  case 'DELETE_EXPENSE':
    return {
      ...state,
      expenses: [...state.expenses].filter(
        (expense) => expense.id !== action.expenseId,
      ),
    };
  default:
    return state;
  }
}

export default wallet;
