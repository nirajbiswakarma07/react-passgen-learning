import { NavLink } from "react-router-dom"

const Card = ({title,linkto}) => {
  return (
    <NavLink to={linkto} className='text-2xl font-bold'>
      <div className='bg-teal-200 p-10 rounded-xl hover:scale-95 transition duration-700 ease-in-out shadow-2xl'>
        {title}
      </div>
    </NavLink>
  )
}

export default Card
