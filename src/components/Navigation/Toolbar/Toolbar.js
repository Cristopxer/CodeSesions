import style from './Toolbar.module.css'
import NavItems from '../NavItems/NavItems'

const toolbar = (props) => {
    return (
        <header>
            <nav className={style.Toolbar}>
                <NavItems/>
            </nav>
        </header>
    )
}

export default toolbar;