// Coloque aqui suas actions

export function setUserData(userData) {
  return {
    type: 'SET_USER_DATA',
    userData,
  };
}

export function setWalletData(walletData) {
  return {
    type: 'ADD_EXPENSE',
    walletData,
  };
}

export function deleteExpense(expenseId) {
  return {
    type: 'DELETE_EXPENSE',
    expenseId,
  };
}

export const FETCH_COIN_PRICE = 'FETCH_COIN_PRICE';

export const COIN_PRICE = 'COIN_PRICE';

export const coinPrice = (currencies) => ({
  type: COIN_PRICE,
  currencies,
});

export const fetchCoinPrice = () => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((getCoins) => Object.keys(getCoins))
    .then((filterArrCoins) => filterArrCoins.filter((item) => item !== 'USDT'))
    .then((getCurrencies) => dispatch(coinPrice(getCurrencies)));
};

export function fetchExpenses(payload) {
  return async (dispatch) => {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await request.json();
    payload.exchangeRates = data;
    dispatch(setWalletData(payload));
  };
}
