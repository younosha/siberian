import { Link } from "../Link/Link"
import Styles from './Header.module.css'

export const Header = () => {
  return <div className={Styles.container}>
    <Link name="Main" to="/"/>
    <Link name="About" to="/about"/>
  </div>
}