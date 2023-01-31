import { useNavigate } from "react-router-dom";
import styles from  "./styles.module.scss";

const User = ({users}) => {

    const navigate = useNavigate();

    const onHandleClick = () => navigate(`/users/${users.id}`)

    return (
        <div onClick={onHandleClick} className={styles.users}>
        <img src={users.image} alt={users.firstName} />
        <h3 className={styles.firstName}>{users.firstName} {users.lastName}</h3>
        <p>Age: {users.age}</p>
        <p>{users.birthDate}</p>
        </div>

    )
}

export default User;