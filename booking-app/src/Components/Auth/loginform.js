import "./auth.css";

import { Link } from "react-router-dom";
import { useState } from "react"
import {logIn} from "../../Utilities/users-servies"


export default function LogIn(props) {



  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [errorState, setErrorState] = useState('')

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const payload = {
        email: formData.email,
        password: formData.password,
      }

      const user = await logIn(payload);
      props.setUser(user);

    } catch {
      setErrorState('Sign Up Failed - Try Again');
    }
  }

  return (
    <>
      <section className="login-big-container">
        <div >
        <form className="login-container"  autoComplete="off" onSubmit={handleSubmit}>
                 <h1>Login</h1>

                 <label htmlFor="email">Email</label>
                <input type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required />
               <label>Password</label>
                <input   type="password"
                      name="password"
                     value={formData.password}
                   onChange={handleChange}
                   required />
                 <button type="submit">Log In</button>
                 </form>
                 <p className="error-message">{errorState}</p>
            <p>
            don't have an account?<Link to="/signup">Create an account</Link>
          </p>
        </div>
      </section>
    </>
  );
}





// export default function LogIn (props) {
  
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   })

//   const [errorState, setErrorState] = useState('')

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {

//       const payload = {
//         email: formData.email,
//         password: formData.password,
//       }

//       const user = await logIn(payload);
//       props.setUser(user);

//     } catch {
//       setErrorState('Sign Up Failed - Try Again');
//     }
//   }

//   const handleChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   }

//   return (
//     <>
//       <div className="form-container">
//         <form autoComplete="off" onSubmit={handleSubmit}>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit">SIGN UP!</button>
//         </form>
//         <p className="error-message">{errorState}</p>
//       </div>
//     </>
//   )
// }