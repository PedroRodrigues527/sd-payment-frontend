import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul style={{ display: "flex", gap: "30px" }}>
          <li>
            <Link to="/">Listagem de pagamentos</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
