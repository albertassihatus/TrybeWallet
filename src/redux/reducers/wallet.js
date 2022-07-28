// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const initialState = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo
};

function walletReducer(state = initialState, action) {
  // desestruturar o state da action tbm é uma possibilidade
  const { wallet } = action;

  switch (action.type) {
  case 'SET_WALLET_DATA':
    return {
      ...state,
      wallet,
    };
  default:
    return state;
  }
}

export default walletReducer;
