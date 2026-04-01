import { Link,NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-gray-200 flex justify-between shadow-xl p-3">
        <div className="">
            <NavLink to="/" className="flex h-20 w-full"><img src="mylogo.png" className="h-20 w-full" alt="MyLogo.png" />
            </NavLink>
        </div>
        <div className="flex gap-5 text-xl font-semibold p-5">
            <NavLink to="/passgen">Password Generator</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    </div>
  )
}

export default Navbar
