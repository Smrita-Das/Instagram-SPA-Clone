import { use } from "react";
import UsersData from "../UsersData";
import { useParams } from "react-router-dom";
import Feed from "../components/Feed";



function UserDetails(){
    let {username} = useParams()
    let user = UsersData.find(user => user.username === username);
    
    return(
        <>
        <div className="w-[600px] mx-auto mt-24 mb-24 flex gap-5 items-center">
        <div className="w-1/4">

            <img src={user.image} alt="" className="h-[140px] w-[140px] rounded-full object-cover " />

        </div>
        <div className="w-3/4">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <h1 className="">{user.designation}</h1>
            <p>{user.description}</p>
            <div className="flex gap-3 mt-3">
                <div className="rounded-md bg-neutral-200 px-3 py-1">{user.followers} Followers</div>
                <div className="rounded-md bg-neutral-200 px-3 py-1">{user.following} Following</div>

            </div>

        </div>
        </div>


<div className="">
    {
        user.posts.map(photo=> <Feed img={photo.pic} />)
    }
</div>


        </>
    )
}
export default UserDetails;