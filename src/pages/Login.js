import UseLogin from "../utils/UseLogin";

export default function Login() {
  function loginRequest(e) {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let data = {
      username: email,
      password: password,
    };
    UseLogin(data);
  }

  return (
    <div className="telaLogin">
      <form onSubmit={loginRequest}>
        <div>Username:<br/><input type="text" id="email"></input></div>
        <div>Password:<br/><input type="password" id="password"></input></div>
        <button type="submit" className="loginbtn">Entrar</button>
      </form>
    </div>
  );
}