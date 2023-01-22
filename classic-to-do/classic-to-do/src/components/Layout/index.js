import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className={classes.label}>igor</div>
      <main className={classes.main}>{children}</main>
    </>
  );
};
export default Layout;
