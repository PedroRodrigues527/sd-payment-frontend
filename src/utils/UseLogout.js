export default function UseLogout(message = null) {
    const api_url = process.env.REACT_APP_API_URL;
  
    const url = `${api_url}/api/logout`;
  
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include", // Enable cookies
    })
      .then((response) => {
        response.json();
        if(response.status === 200){
          alert("Logout realizado com sucesso");
          localStorage.setItem("auth", false)
          window.location.href="/login"
        }
      })
      .catch((error) => {
        if (message && message?.fail) {
          alert(message?.fail);
        }
      });
  }