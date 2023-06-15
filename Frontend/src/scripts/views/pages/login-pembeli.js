const LoginPembeli = {
    async render() {
      return `
        <div class="container-login">
          <h2 id="login-title">Login Pembeli</h2>
          <form id="loginForm">
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" id="username" name="username" required>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" name="password" required>
            </div>
            <button class="login" type="submit">Login</button>
          </form>
        </div>
      `;
    },
  
    async afterRender() {
      const loginButton = document.querySelector('#loginButton');
      const footer = document.querySelector('.footer');
      footer.style.display='none';
      loginButton.style.display='none';
    },
  };
  
  export default LoginPembeli;
  