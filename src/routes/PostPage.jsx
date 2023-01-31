import { useParams,Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { GET } from '../Api/HTTP';
import Post from './../components/post/index';




export default function PostPage(){
    const [singlePost, setSinglePost]= useState({})
    const params = useParams();

    useEffect(()=>{
        GET(`posts/${params.postId}`)
        .then(data => setSinglePost(data))
    }, [])

    
    return(
        <div>
            <Post posts={singlePost}/>
            <Link to='/posts'> Go forward</Link>
        </div>
    )
}