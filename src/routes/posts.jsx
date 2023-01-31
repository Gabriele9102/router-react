import { useState, useEffect } from "react";
import { GET } from "../Api/HTTP";
import Post from './../components/post/Post';
import styles from "./style/posts.module.scss"


const Posts = () => {

    const [postsData, setPostsData]= useState([])

    useEffect(() => {
        GET(`posts`)
       .then(({posts}) => setPostsData(posts))
       
    }, [])

    return( 

        <div className={styles.wrapper}>

        {postsData.map((post, index) => (
                <Post key={index} posts={post}/>
            ))}

        </div>
        
        
    )

}

export default Posts;