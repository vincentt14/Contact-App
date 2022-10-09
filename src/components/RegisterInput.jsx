import React from "react";
import PropTypes from "prop-types";

class RegisterInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  onSubmitHandler(event) {
    event.preventDefault();

    this.props.register({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <form className="register-input" onSubmit={this.onSubmitHandler}>
        <input type="text" placeholder="Nama" onChange={this.onNameChange} />
        <input type="email" placeholder="Email" onChange={this.onEmailChange} />
        <input type="password" placeholder="Password" autoComplete="current-password" onChange={this.onPasswordChange} />
        <button>Register</button>
      </form>
    );
  }
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
