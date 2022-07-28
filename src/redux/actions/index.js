// Coloque aqui suas actions

export function setUserData(userData) {
  return {
    type: 'SET_USER_DATA',
    userData,
  };
}

export function setWalletData(walletData) {
  return {
    type: 'SET_WALLET_DATA',
    walletData,
  };
}
