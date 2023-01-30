import styles from './styles.module.scss'
import { Link } from 'react-router-dom';

const Navbar = () => {

    return(
             <div className={styles.navbar}>
             <div className={styles.wrapper}>
             <h6>LOGO</h6>
             </div>
            <ul>
                <li>
                <Link to={`/`}>HOME</Link>
                </li>
                <li>
                <Link to={`/Users/`}> USERS</Link>
                </li>

            </ul>
        </div>
    )
}

export default Navbar;