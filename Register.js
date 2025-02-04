import React from "react";
import loginImg from "../../login.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
       <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="firstname">name</label>
              <input type="text" name="firstname" placeholder="Firstname" />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">lastname</label>
              <input type="text" name="lastname" placeholder="Lastname" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmpassword">confirmPassword</label>
              <input type="text" name="confirmpassword" placeholder="Confirmpassword" />
          </div>
          <div className="form-group">
              <label htmlFor="phonenumber">Phonenumber</label>
              <input type="text" name="confirmpassword" placeholder="Confirmpassword" />
          </div>
        </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}