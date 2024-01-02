export default function UseLogin(body, message = null) {
    const api_url = process.env.REACT_APP_API_URL;
  
    const url = `${api_url}/api/login`;
  
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
      credentials: "include", // Enable cookies
    })
      .then((response) => {
        response.json();
        if(response.status === 200){
          alert("Login Realizado com sucesso.");
          localStorage.setItem("auth", true)
          window.location.href="/"
        }else{
          alert("Credencias erradas");
        }
      })
      .catch((error) => {
        if (message && message?.fail) {
          alert(message?.fail);
        }
      });
  }