import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { setUserData } from '../redux/actions';
import './login.css';

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
    history.push('/carteira');
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  validateForm = () => {
    const { email, password } = this.state;

    const minLength = 6;
    const anyInfo = password.length >= minLength;

    return !(anyInfo && email.includes('@') && email.endsWith('.com'));
  };

  render() {
    const { email, password } = this.state;
    return (
      <main>
        <form>
          <h1>Sign In</h1>
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
              className="mb-3"
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
            className="btn btn-success"
            type="button"
            onClick={ this.handleClickSubmit }
            disabled={ this.validateForm() }
          >
            ENTRAR
          </button>
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUserData: (userData) => dispatch(setUserData(userData)),

  // setUserData: (state) => dispatch(setUserData(state)),
  // });
});

Login.propTypes = {
  setUserData: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
