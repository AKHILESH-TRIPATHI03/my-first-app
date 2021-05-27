import classes from "./Layout.module.css";
import MainNAvigation from "./MainNAviagtion";

function Layout(props) {
  return (
    <div>
      <MainNAvigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
