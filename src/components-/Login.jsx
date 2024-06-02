import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IoEye, IoEyeOff } from "react-icons/io5";


const Login = () => {
    useEffect(() => {
        document.title = "Login"
    });
   

    const { SignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        SignIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('User Login Successfully');
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                toast.error('User Email Not Found');
                console.log(error.message);
            });

    }
    return (
      
      <div>
      
            <div style={{
                backgroundImage: 'url(https://i.ibb.co/7WPqjf9/image.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',


            }} className="animate__animated animate__zoomInDown ">

                <form onSubmit={handleLogin} className="md:relative md:z-10 mx-5 md:w-2/3 lg:w-1/2 md:mx-auto mt-5  shadow-2xl rounded-2xl p-5 bg-black bg-opacity-50 text-white ">
                    <h3 className="text-center text-3xl font-bold my-8"> Please LogIn</h3>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered text-black" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"} placeholder="password" name="password"
                                className="input input-bordered w-full text-black" required />
                            <span className="absolute mt-4 ml-[-40px] text-black text-xl" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <IoEye /> : <IoEyeOff />
                                }
                            </span>
                        </div>

                    </div>
                    <div className="form-control my-6">
                        <button className="btn btn-primary">Log In</button>
                    </div>
                    <p className="mb-6 text-center">Don't have an account? <Link to="/register"><span className="font-bold text-blue-700 ">Register</span></Link></p>





                </form>

            </div>
      </div>
    );
};

export default Login;