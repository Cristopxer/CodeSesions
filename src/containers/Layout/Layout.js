import React, { Component } from 'react'
import style from './layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'

class Layout extends Component {
    render() {
        return (
            <div>
                <Toolbar/>
                <main className={style.content}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;