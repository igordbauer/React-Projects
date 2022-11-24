import classes from './Layout.module.css'

const Layout = ({ children }) => {
  return <main className={classes.main}>{children}</main>
}
export default Layout