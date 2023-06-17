import AgroMartDbSource from "../../../data/agromartdb-source";

const LoginPembeli = {
    async render() {
      return `
      <section class="login_page_container">
      <div class="login-page">
        <form id="login-form">
          <div class="login_page_title">
            <h1>Welcome to Agromart </h1>
          </div>
          <div class="login_page_form">
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Enter Username" name="username" required>

            <label for="password">Password</label>
            <input type="password" placeholder="Enter Password" name="password" id="password" required>

            <button class="login_page_button" type="submit" value="Login" >Login</button>

          </div>
        </form>
      </div>
      </section>
      `;
    },
  
    async afterRender() {
      const loginButton = document.querySelector('#loginButton');
      const footer = document.querySelector('.footer');
      footer.style.display='none';
      loginButton.style.display='none';

      document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value
        const password = document.getElementById("password").value
        
        const login =  AgroMartDbSource.loginUser(username,password);
        return login;
      });
    },
  };
  
  export default LoginPembeli;
  