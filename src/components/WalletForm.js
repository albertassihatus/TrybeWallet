import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoinPrice } from '../redux/actions';

class WalletForm extends Component {
  async componentDidMount() {
    const { fetchOptions } = this.props;
    await fetchOptions();
  }

  render() {
    const { coinOptions } = this.props;
    return (
      <form>
        <label htmlFor="despesa">
          <input
            placeholder="Despesa"
            data-testid="value-input"
            type="text"
            // onChange={ this.handleChange }
            name="despesa"
            required
          />
        </label>

        <label htmlFor="description">
          <input
            placeholder="Descrição"
            data-testid="description-input"
            type="text"
            // onChange={ this.handleChange }
            name="description"
            required
          />
        </label>

        <select data-testid="currency-input" name="currency">
          {coinOptions.map((coinPrice) => (
            <option key={ coinPrice } value={ coinPrice }>
              {coinPrice}
            </option>
          ))}
        </select>

        <select data-testid="method-input">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>

        <select data-testid="tag-input" name="select">
          <option name="select">Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>

        <button type="button" label="Enviar">
          {' '}
          Adicionar Despesa
          {' '}
        </button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  fetchOptions: propTypes.func.isRequired,
  coinOptions: propTypes.arrayOf(propTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  coinOptions: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOptions: () => dispatch(fetchCoinPrice()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
