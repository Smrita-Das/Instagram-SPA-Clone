import {Link} from "react-router-dom";


function Navbar(){
    return(
        <>
<div className="p-3 border-b-1 border-neutral-300">
        <div className="flex mx-auto items-center w-[900px] justify-between">
            <Link to='/' className="text-2xl font-black">Instagram</Link>
        <div className="flex gap-3">
            <Link to='/requests' className="">Requests</Link>

            <Link to='/about' className="">About us</Link>
            <Link to='/error' >Random link</Link>
        </div>
        </div>


</div>
        </>
    )
}
export default Navbar;