import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProviders";
import auth from "../../firebase/firebase.config";
import authpic from "../../assets/authpic.jpg";
import axios from "axios";

const LogIn = () => {

    const googleProvider = new GoogleAuthProvider();
    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        //   console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const user = { email }
                console.log(user);

                axios.post('https://testy-food-server-ten.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                        if (res.data.success) {
                            Swal.fire({
                                title: "User Logged In Successfully",
                                icon: "success",
                                showClass: {
                                    popup: `
                                animate__animated
                                animate__fadeInUp
                                animate__faster
                              `
                                },
                                hideClass: {
                                    popup: `
                                animate__animated
                                animate__fadeOutDown
                                animate__faster
                              `
                                }
                            });
                            navigate(location?.state ? location.state : '/')
                        }
                    })
            })
            .catch(error => {
                Swal.fire({
                    title: `error logging in, ${error.code}`,
                    icon: "warning",
                    showClass: {
                        popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                    },
                    hideClass: {
                        popup: `
                    animate__animated
                    animate__fadeOutDown
                   animate__faster
                  `
                    }
                });
            });
    }

    const HandleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const email = result.user.email;
                console.log(email);
                const user = { email };
                console.log(user);

                axios.post('https://testy-food-server-ten.vercel.app/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                        if (res.data.success) {
                            Swal.fire({
                                title: "User Logged In Successfully",
                                icon: "success",
                                showClass: {
                                    popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                                },
                                hideClass: {
                                    popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                                }
                            });
                            navigate(location?.state ? location.state : '/')
                        }
                    })
            })
            .catch(error => {
                Swal.fire({
                    title: `error logging in, ${error.code}`,
                    icon: "warning",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
                console.error(error);
            })
    }

    return (

        <div className="p-12 min-h-screen bg-base-200">
            <Helmet>
                <title>Testy Food | Login</title>
            </Helmet>

            <div className="">
                <div className="text-center lg:text-left mb-8">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card lg:card-side shadow-2xl bg-base-100">
                    <div className="lg:w-[52%] lg:h-[60%]">
                        <img className="w-full h-96 lg:h-[480px]" src={authpic} alt="" />
                    </div>
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="form-control">
                            <button onClick={HandleGoogleSignIn} className="btn text-white bg-red-600">Google login</button>
                        </div>
                        <p className="pl-5">
                            New Here? Please <Link to='/register'> <button className="btn btn-link">Register</button></Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;