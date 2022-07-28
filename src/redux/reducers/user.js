// Esse reducer será responsável por tratar as informações da pessoa usuária

const initialState = {
  email: '', // string que armazena o email da pessoa usuária
};

function userReducer(state = initialState, action) {
  // desestruturar o state da action tbm é uma possibilidade
  const { user } = action;

  switch (action.type) {
  case 'SET_USER_DATA':
    return {
      ...state,
      user,
    };
  default:
    return state;
  }
}

export default userReducer;
