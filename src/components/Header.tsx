import logo from '../assets/logo.svg'
import style from './Header.module.css'

export default function Header(){
    return (
        <header className={style.header}>
          <img src={logo} />
        </header>
    )
}