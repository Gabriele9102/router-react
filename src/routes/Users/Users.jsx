import { useState, useEffect } from "react";
import { GET } from "../../Api/HTTP";
import styles from "./styles.module.scss";
import User from './../../components/User';

const Users = () => {

    const [usersData, setUsersData]= useState([])

    useEffect(() => {
        GET(`users`)
       .then(({users}) => setUsersData(users))
       
    }, [])

    return( 

        <div className={styles.wrapper}>

        {usersData.map((user, index) => (
                <User key={index} users={user}/>
            ))}

        </div>
        
        
    )

}

export default Users;