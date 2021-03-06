import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNAvigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Reacts Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNAvigation;
