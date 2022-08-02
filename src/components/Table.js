import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { tableExpenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {tableExpenses.map((expense, index) => (
              <tr key={ index }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{parseFloat(expense.value).toFixed(2)}</td>
                <td>{expense.exchangeRates[expense.currency].name}</td>
                <td>
                  {parseFloat(expense.exchangeRates[expense.currency].ask)
                    .toFixed(2)}
                </td>
                <td>
                  {parseFloat(
                    expense.exchangeRates[expense.currency].ask * expense.value,
                  ).toFixed(2)}
                </td>
                <td>Real</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  tableExpenses: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = (state) => ({
  tableExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
