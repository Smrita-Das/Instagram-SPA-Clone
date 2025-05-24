import { data } from "react-router-dom";
import UsersData from "../UsersData";
import UserCard from "../components/UserCard";

function Requests(){
    return(
        <>
        <div className="mx-auto w-[400px] mb-24">
    <h1 className="text-2xl text-center mt-24 font-black">Your follow requests</h1>
    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem.</p>
     {
        UsersData.map(user=><UserCard img={user.image} name={user.name} prof={user.designation} username={user.username}/>)
    } 
    </div>

        </>
    )
}
export default Requests;