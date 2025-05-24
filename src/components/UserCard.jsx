import UsersData from "../UsersData";
import {Link} from "react-router-dom";


function UserCard({img, name, prof, username}){
    return(
        <>
<Link to={`/${username}`} className="hover:pointer-cursor">

<div className="flex mt-4 gap-5 items-center">
                <img src={img} alt="" className="h-14 w-14 rounded-full object-cover" />
                <div className="">
                    <p>{name}</p>
                    <p className="text-sm text-neutral-500">{prof}</p>
                </div>
            </div>

</Link>

            


        </>
    )
}
export default UserCard;