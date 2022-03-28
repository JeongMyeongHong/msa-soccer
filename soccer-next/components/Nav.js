import Link from "next/link"
import style from "../styles/Nav.module.css"


export default function Nav(){
    return(
        <nav className={style.nav}>
            <ul>
                <li className={style.li}> <Link href='/'>Home</Link></li>
                <li className={style.li}> <Link href='/basic/bmi'>bmi</Link></li>
                <li className={style.li}> <Link href='/basic/calc'>calc</Link></li>
                <li className={style.li}> <Link href='/basic/counter'>counter</Link></li>
                <li className={style.li}> <Link href='/basic/grade'>grade</Link></li>
            </ul>
        </nav>
    )
}