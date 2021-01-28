import {NavLink} from 'react-router-dom'
import style from './NavItem.module.css'

const navitem = (props) => {
    return(
        <li className={style.NavItem}>
            <NavLink to={props.link} exact activeClassName={style.active}>{props.children}</NavLink>
        </li>
    )
}
export default navitem;