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
      method: 'Dinheiro',
      tag: 'alimentação',
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
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
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

        <label htmlFor="currency">
          <select
            name="currency"
            id="currency"
            data-testid="currency-input"
            value={ currency }
            onChange={ this.handleChange }
          >
            {coinOptions.map((coinPrice) => (
              <option key={ coinPrice } value={ coinPrice }>
                {coinPrice}
              </option>
            ))}
          </select>
        </label>
        Descrição:
        <input
          data-testid="description-input"
          type="text"
          onChange={ this.handleChange }
          name="description"
          value={ description }
          required
        />
        <label htmlFor="method">
          <select
            name="method"
            id="method"
            data-testid="method-input"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          <select
            name="tag"
            id="tag"
            data-testid="tag-input"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

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
  // fetchCurrance: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOptions: () => dispatch(fetchCoinPrice()),
  fetchCurrance: (store) => dispatch(fetchExpenses(store)),
  // expenses: (expenses) => dispatch(actionAddExpense(expenses)),
  // setWalletData: (walletData) => dispatch(setWalletData(walletData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
