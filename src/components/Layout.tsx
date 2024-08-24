import * as React from "react";
import { Link, Outlet } from "react-router-dom";

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ubuntu-app-installer">Ubuntu Application Installer</Link>
          </li>
          <li>
            <Link to="/ssh-setup">SSH Setup</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
};
