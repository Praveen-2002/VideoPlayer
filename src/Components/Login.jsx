import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage(props)
{
    var navigate = useNavigate();

    var [check,setCheck] = useState(false);
    var [curr_email,setCurr_email] = useState("");
    var [curr_pass,setCurr_pass] = useState("");
    var [loginResMsg,setLoginResMsg] = useState(null);

    function handleSubmit(e){
        e.preventDefault();
        setCurr_email(e.target.email.value);
        setCurr_pass(e.target.password.value);
        setCheck(prev=>!prev);
    }

    useEffect(()=>{
        var serverData = async() =>{
            var options = {
                email : curr_email,
                password : curr_pass
            }
            var responce = await fetch("http://localhost:2000/user/login",{
                method: "get",
                headers : options,
                credentials: 'include'
            });
            let json_res = await responce.json()
            setLoginResMsg(json_res);
            props.setUserName(json_res.userName)
        }
        serverData();
    },[check])

    function navigatToReg(e){
        e.preventDefault();
        navigate("/user/register");
    }

    useEffect(()=>{
        if(loginResMsg){
            if(loginResMsg.status!=200){
                setTimeout(()=>{
                    setLoginResMsg(null);
                },2000)
            }else{
                navigate("/");
            }
        }
    },[loginResMsg])


    
    return (
        <div className="relative inline-flex items-center justify-center mt-10">
            <div className="login_page container m-2 border-2">
                <h2 className="font-medium text-indigo-600 my-3">User Login</h2>
                <form className="login_form m-3" onSubmit={handleSubmit}>
                    <hr/>
                    <ul className="m-1">
                        <li className="m-3">
                            <lable httpfor="login_email">Please Enter your Email</lable><br/>
                            <input id="login_email" name="email" className="w-3/5 p-2 border-2 rounded-md mt-1" type="email"/>
                        </li> 
                        <li className="m-3">
                            <lable httpfor="login_password">Please Enter your Passwrod</lable><br/>
                            <input id="login_password" name="password" className="w-3/5 p-2 rounded-sm border-2 rounded-md mt-1" type="password"/>
                        </li> 
                    </ul>

                    <p className='m-2'>If you are not registered <a className='text-blue-700' href="user/register" onClick={navigatToReg}>click here</a></p>

                    <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 font-small text-indigo-600 ease-out border-2 border-purple-500 rounded-full shadow-md" type="submit">
                        <span className="relative">login</span>
                    </button>
                </form>
                {loginResMsg && (loginResMsg.status === 400 || loginResMsg.status === 500) &&
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Try Again !</strong>
                        <span className="block sm:inline">{loginResMsg.msg}</span>
                    </div>
                }
            </div>
        </div>
    )
}