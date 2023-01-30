import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Navbar from './../../components/navbar/Navbar';

const Users = () => {
    let {userId} = useParams();
    const navigate = useNavigate();

    const [usersData, setUsersData]= useState({})

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${userId}`)
       .then((res) => res.json())
       .then((data) => setUsersData(data))
       
    }, [userId])


    const prevClick = () => navigate(`/users/${--userId}`);
    const nextClick = () => navigate(`/users/${++userId}`);

    


    return( 

        <div className={styles.wrapper}>
        <Navbar />

        <div className={styles.users} id = {usersData.id}>
        <img src={usersData.image} alt={usersData.firstName} />
        <h3 className={styles.firstName}>{usersData.firstName} {usersData.lastName}</h3>
        <p>{usersData.age}</p>
        <p>{usersData.birthDate}</p>

        <button disabled={userId == 1} onClick={prevClick}>prev</button>
        <button onClick={nextClick}>next</button>
        </div>

        </div>
        
        
    )

}

export default Users;