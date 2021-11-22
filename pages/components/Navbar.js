import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const Navbar = () => {
    return (
            <nav className={styles.nav}>
                <Link className={styles.li}href='/'> 
                    <a>Hexadecimal</a>
                </Link>

                <Link className={styles.li}href='/binarios'> 
                    <a>Binarios</a>
                </Link>

                <Link className={styles.li}href='/virtualbox'> 
                    <a>Virtual Box</a>
                </Link>

                <Link className={styles.li}href='/saibamais'> 
                    <a>Saiba Mais</a>
                </Link>
            </nav>
    )
}

export default Navbar