import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ul className="menuNavegacao">
        <li>
          <Link to="/">Listagem de pagamentos</Link>
        </li>
        {localStorage.getItem("auth") === "true" ? (
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
          <li>
            <Link to="/payment-create">Criar Pagamento</Link>
          </li>

      </ul>

      <Outlet />
    </>
  );
};

export default Layout;
