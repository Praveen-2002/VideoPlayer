import React, { useState, useEffect } from 'react'
import { useNavigate  } from 'react-router-dom';

export default function SignUp() {
    var navigate = useNavigate();
    var [user, setUser] = useState({name:"", email:"", password:""});
    var [resMsg, setResMsg] = useState(null);

    function reset_response_message(){
        setTimeout(()=>{
            setResMsg(null);
        },2000)
    }

    useEffect(()=>{
        reset_response_message()
    },[resMsg])

    function navigatToLogin(e){
        e.preventDefault();
        navigate("/user/login");
    }

    function registerUser(e) {
        e.preventDefault();
        var target = e.target;
        setUser({
            name: target.user_name.value,
            email: target.user_email.value,
            password: target.user_password.value
        })
    }

    useEffect(() => {
        async function StoreUser() {
            var storeUser_res = await fetch("http://localhost:2000/user/register", {
                method: "post",
                headers: {
                    "name": user.name,
                    "email": user.email,
                    "password": user.password
                }
            });
            var resData = await storeUser_res.json();
            setResMsg(resData);
        }
        StoreUser();
    }, [user])

    return (
        
        <div className="relative inline-flex items-center justify-center mt-10">
            <div className="login_page container m-2 border-2">
                {resMsg && resMsg.status === 200 &&
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Success</strong>
                    </div>
                }
                <h2 className="font-medium text-indigo-600 my-3">User Registration</h2>
                <form className="login_form m-3" onSubmit={(e) => registerUser(e)}>
                    <hr />
                    <ul className="m-1">
                        <li className="m-3">
                            <lable htmlFor="login_name">User Name</lable><br />
                            <input id="login_name" name="user_name" className="w-3/5 p-2 rounded-sm border-2 rounded-md mt-1" type="text" />
                        </li>
                        <li className="m-3">
                            <lable htmlFor="login_email">Email</lable><br />
                            <input id="login_email" name="user_email" className="w-3/5 p-2 border-2 rounded-md mt-1" type="email" />
                        </li>
                        <li className="m-3">
                            <lable htmlFor="login_password">Passwrod</lable><br />
                            <input id="login_password" name="user_password" className="w-3/5 p-2 rounded-sm border-2 rounded-md mt-1" type="password" />
                        </li>
                    </ul>

                    <p className='m-2'>If you are a registered  user <a className='text-blue-700' href="user/login" onClick={navigatToLogin}>Login</a></p>

                    <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 font-small text-indigo-600 ease-out border-2 border-purple-500 rounded-full shadow-md" type="submit">
                        <span className="relative">Signup</span>
                    </button>
                </form>
                
                {resMsg && (resMsg.status === 400 || resMsg.status === 500) &&
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Try Again !</strong>
                        <span className="block sm:inline">{resMsg.msg}</span>
                    </div>
                }
                
            </div>
        </div>
    )
}
