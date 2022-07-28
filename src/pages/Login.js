import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { setUserData } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleClickSubmit = () => {
    const { history, setUserData: actionUserData } = this.props;
    // const { history } = this.props;
    actionUserData(this.state);
    history.push('/wallet');
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  validateForm = () => {
    const { password } = this.state;

    const minLength = 6;
    const anyInfo = password.length >= minLength;

    if (anyInfo) {
      return false;
    }
    return true;
  };

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="email">
          <input
            data-testid="email-input"
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={ this.handleChange }
            value={ email }
            required
          />
        </label>

        <label htmlFor="password">
          <input
            data-testid="password-input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={ this.handleChange }
            value={ password }
            required
          />
        </label>

        <button
          type="button"
          onChange={ this.handleChange }
          onClick={ this.handleClickSubmit }
          disabled={ this.validateForm() }
        >
          ENTRAR
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUserData: (userData) => dispatch(setUserData(userData)),
});

Login.propTypes = {
  setUserData: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
