import HttpCall from "../utils/HttpCall";

export default function PaymentCreate() {
  function handleSubmit(e) {
    e.preventDefault();
    let amount = document.getElementById("amount").value;
    let information = document.getElementById("information").value;
    let expirationDate = document.getElementById("expirationDate").value;

    let data = {
      amount: amount,
      information: information,
      expirationDate: expirationDate,
    };
    
    HttpCall("api/payment", null, "POST", data);
  }

  return (
    <div className="telaLogin">
      <form onSubmit={handleSubmit}>
        <div>
          Valor:
          <br />
          <input type="number" id="amount"></input>
        </div>
        <div>
          Informação:
          <br />
          <input type="password" id="information"></input>
        </div>
        <div>
          Data de expiração:
          <br />
          <input type="date" id="expirationDate"></input>
        </div>
        <button type="submit" className="loginbtn">
          Entrar
        </button>
      </form>
    </div>
  );
}
