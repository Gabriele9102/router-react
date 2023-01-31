import styles from './styles.module.scss'
import { Link, Outlet } from 'react-router-dom';

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
                <Link to={`/users/`}> USERS</Link>
                </li>
                <li>
                <Link to={`/posts/`}> POSTS</Link>
                </li>

            </ul>
            <Outlet />
        </div>
    )
}

export default Navbar;