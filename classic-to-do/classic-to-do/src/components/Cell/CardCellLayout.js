import classes from './CardCellLayout.module.css'

const CardCellLayout = ({ children }) => {
  return <main className={classes.main}>
    {children}
  </main>
}
export default CardCellLayout;