import UseLogin from "../utils/UseLogin";

export default function Login() {
  function loginRequest(e) {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let data = {
      email: email,
      password: password,
    };
    UseLogin(data);
  }

  return (
    <div>
      <form onSubmit={loginRequest}>
        Email:<input type="email" id="email"></input>
        <br></br>
        Password<input type="password" id="password"></input>
        <br></br>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}