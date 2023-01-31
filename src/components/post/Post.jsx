import { useNavigate } from 'react-router-dom';
import styles from './styles.modules.scss';

const Post = ({posts}) =>{

    const navigate = useNavigate();

    const onHandleClick = () => navigate(`/posts/${posts.id}`)
    return(
    <>
        <div onClick={onHandleClick} className={styles.container}>

        <p>{posts.id}</p>
        <h3>{posts.title}</h3>
        <p>{posts.body}</p>
        {/* <p>Tags: #{posts?.tags[0]} #{posts?.tags[1]}</p>
         */}
        </div>

        </>
    )
}

export default Post;