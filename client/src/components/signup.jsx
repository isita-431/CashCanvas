import React from 'react';
export const Signup = () => {
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <label>
          Retype Password:
          <input type="text" name="password" />
        </label>
        <button>Submit</button>
      </form>
      <span> Have an account? </span>
      <a href="login">
        <span>Log in</span>
      </a>
    </div>
  );
};

export default Signup;
