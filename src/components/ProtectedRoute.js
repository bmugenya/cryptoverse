// // ProtectedRoute.js
// // import { useSelector } from 'react-redux'
// import { NavLink, Outlet } from 'react-router-dom'
// // import Cookies from 'js-cookie'
// import { useNavigate } from "react-router-dom";

// const ProtectedRoute = () => {

//   const navigate = useNavigate();



//   // show unauthorized screen if no token is found in redux store
//   // if (!userToken) {
//     return (
//       <div className='unauthorized'>
//         <h1>Unauthorized :(</h1>
//         <span>
//           <NavLink to='/auth'>Login or refresh page</NavLink> to gain access
//         </span>
//       </div>
//     )
//   // }

//   // returns child route elements

//   return <Outlet />
// }
// export default ProtectedRoute