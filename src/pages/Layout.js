import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <ul className="menuNavegacao">
          <li><Link to="/">Listagem de pagamentos</Link></li>
          <li><Link to="/login">To Login</Link></li>
        </ul>

      <Outlet />
    </>
  );
};

export default Layout;
