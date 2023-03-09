import { Link, Outlet } from "react-router-dom";

export default function GeneralPage() {

  return (
    <>
      <header>
        <Link to="/">Main</Link>
        <Link to="/login">Login</Link>
        <Link to="/help">Help</Link>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}
