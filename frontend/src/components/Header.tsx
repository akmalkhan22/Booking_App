import { Link } from "react-router-dom"

const Header = () => {
    return(
        <>
         <div className="bg-yellow-600 py-6">
             <div className="container flex justify-between mx-auto">
                 <span className="text-2xl text-white font-bold tracking-tight">
                    <Link to={"/"}>
                       www.House24.com
                    </Link>
                 </span>
                 <span className="flex space-x-2">
                    <Link to={''} className="btn bg-teal-50 p-1 rounded-sm text-black">Sign In</Link>
                 </span>
             </div>
         </div>
        </>
    )
}

export default Header;