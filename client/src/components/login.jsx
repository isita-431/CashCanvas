import React from 'react';

export const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <button>Submit</button>
      </form>
      <span>Don&apos;t have an account? create one </span>
      <a href="signup">
        <span>signup</span>
      </a>
    </div>
  );
};

export default Login;
