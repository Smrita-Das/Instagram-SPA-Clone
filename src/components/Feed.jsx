import {Link} from 'react-router-dom';
// import Post from '../pages/Post';


function Feed({img, id}){
    return(
        <>
<Link to={`/photo/${id}`}>
<img src={img} alt="pictures" className="h-[260px] w-[260px] object-cover" />

</Link>


        </>
    )
}

export default Feed;