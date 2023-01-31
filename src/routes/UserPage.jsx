import { useParams,Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { GET } from '../Api/HTTP';
import User from '../components/User';
import styles from "./style/userP.module.scss"



export default function UserPage(){
    const [singleUser, setSingleUser]= useState({})
    const params = useParams();

    useEffect(()=>{
        GET(`users/${params.userId}`)
        .then(data => setSingleUser(data))
    }, [])
    return(
        <div className={styles.card}>
            <User users={singleUser}/>
            <Link to='/users'> Go forward</Link>
        </div>
    )
}