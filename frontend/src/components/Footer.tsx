import { Link } from "react-router-dom"

const Footer = () =>{
    return(
        <div className="bg-yellow-600 py-6">
           <div className="container flex justify-between">

              <span className="text-3xl font-bold text-white tracking-tight">
                <Link to={"/"}>www.House24.com</Link>
              </span>
              <span className="text-2xl text-white flex gap-4">
                <Link to={""}>Privacy Policy</Link>
                <Link to={""}>Terms</Link>
              </span>
           </div>
        </div>
    )
}

export default Footer