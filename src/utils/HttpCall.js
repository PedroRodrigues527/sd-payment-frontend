/**
 * Make a request to API, by identifying only the path, and (not required) method and body if is a GET method
 * Examples:
 * - HttpCall('teste', setData) (default method is GET)
 * - HttpCall('testeaa', null, "POST", {teste: "teste", abacate:'uai'})
 * - HttpCall('teste/1', null, "PUT", {teste: "teste", abacate:'uai'})
 * - HttpCall('teste/3', null, "DELETE", {teste: "teste", abacate:'uai'}, {success: 'Apagado com sucesso', fail: 'erro ao apagar'})
 * @param {string} path path to api controler
 * @param {function} setHook useState hook to save the response
 * @param {string} method HTTP method
 * @param {json} body HTTP body
 * @param {json} message {success: 'msg', fail: 'msg'} contains message when success and fail.
 */
export default function HttpCall(
  path,
  setHook,
  method = "GET",
  body,
  message = null
) {
  const api_url = process.env.REACT_APP_API_URL;

  const url = `${api_url}/${path}`;
  if (method === "GET") {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include", // Enable cookies
    })
      .then((response) => response.json())
      .then((json) => {setHook(json); console.log(json)})
      .catch((error) => console.error(error));
  } else {
    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include", // Enable cookies
      body: JSON.stringify(body),
    })
      .then((response) => {
      })
      .catch((error) => {
      });
  }
}
