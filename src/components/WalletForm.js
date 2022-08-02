import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoinPrice, fetchExpenses } from '../redux/actions';
// import { fetchCoinPrice, fetchCurrance } from '../redux/actions';

// const TAG_FORM = 'Alimentação';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: 'Lazer',
      description: '',
    };
  }

  async componentDidMount() {
    const { fetchOptions } = this.props;
    await fetchOptions();
  }

  handleClick = () => {
    const { fetchCurrance } = this.props;
    fetchCurrance(this.state);
    this.setState((prev) => ({
      id: prev.id + 1,
      value: '',
      currency: 'EUR',
      method: 'Cartão de débito',
      tag: 'Trabalho',
      description: '',
    }));
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { value,
      description,
      currency,
      method,
      tag } = this.state;

    const { coinOptions } = this.props;
    console.log(coinOptions);
    return (
      <form>
        Valor:
        <input
          data-testid="value-input"
          type="number"
          onChange={ this.handleChange }
          name="value"
          value={ value }
          required
        />

        <select
          data-testid="currency-input"
          name="currency"
          id="currency"
          value={ currency }
        >
          {coinOptions.map((coinPrice) => (
            <option key={ coinPrice } value={ coinPrice }>
              {coinPrice}
            </option>
          ))}
        </select>

        Descrição:
        <input
          data-testid="description-input"
          type="text"
          onChange={ this.handleChange }
          name="description"
          value={ description }
          required
        />

        <select data-testid="method-input" name="method" value={ method }>
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select data-testid="tag-input" name="tag" value={ tag }>
          <option name="select">Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>

        <button type="button" onClick={ this.handleClick }>
          {' '}
          Adicionar despesa
          {' '}
        </button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  fetchOptions: propTypes.func.isRequired,
  coinOptions: propTypes.arrayOf(propTypes.string).isRequired,
  fetchCurrance: propTypes.func.isRequired,
  // expenses: propTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  coinOptions: state.wallet.currencies,
  fetchCurrance: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOptions: () => dispatch(fetchCoinPrice()),
  fetchCurrance: (store) => dispatch(fetchExpenses(store)),
  // expenses: (expenses) => dispatch(actionAddExpense(expenses)),
  // setWalletData: (walletData) => dispatch(setWalletData(walletData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
