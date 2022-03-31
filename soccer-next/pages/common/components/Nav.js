import Link from "next/link"
import style from "../styles/Nav.module.css"

export default function Nav(){
    return(
        <nav className={style.nav}>
            <ul>
                <li className={style.li}> <Link href='/'>Home</Link></li>
                <li className={style.li}> <Link href='/basic/components/bmi'>bmi</Link></li>
                <li className={style.li}> <Link href='/basic/components/calc'>calc</Link></li>
                <li className={style.li}> <Link href='/basic/components/counter'>counter</Link></li>
                <li className={style.li}> <Link href='/basic/components/grade'>grade</Link></li>
            </ul>
        </nav>
    )
}