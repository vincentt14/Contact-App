import React from "react";
import PropTypes from "prop-types";

class LoginInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onEmailChangeHandler(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChangeHandler(event) {
    this.setState({ password: event.target.value });
  }

  onSubmitHandler(event) {
    event.preventDefault();

    this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <form className="login-input" onSubmit={this.onSubmitHandler}>
        <input type="email" placeholder="Email" onChange={this.onEmailChangeHandler} />
        <input type="password" placeholder="Password" onChange={this.onPasswordChangeHandler} />
        <button>Masuk</button>
      </form>
    );
  }
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
