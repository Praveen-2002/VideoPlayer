import React,{useState, useEffect} from "react";

export default function LoginPage(props)
{
    var [check,setCheck] = useState(null);
    useEffect(()=>{
        var serverData = async() =>{
            var responce = await fetch(process.env.Server_Url);
            setCheck(await responce.text());
        }
        serverData();
    },[check])
    
    return (
        <div className="relative inline-flex items-center justify-center mt-10">
            <div className="login_page container m-2 border-2">
                <h2 className="font-medium text-indigo-600 my-3">User Login</h2>
                <form className="login_form m-3">
                <hr/>
                    <ul className="m-1">
                        <li className="m-3">
                            <lable httpfor="login_email">Please Enter your Email</lable><br/>
                            <input id="login_email" className="w-3/5 p-2 border-2 rounded-md mt-1" type="email"/>
                        </li> 
                        <li className="m-3">
                            <lable httpfor="login_password">Please Enter your Passwrod</lable><br/>
                            <input id="login_password" className="w-3/5 p-2 rounded-sm border-2 rounded-md mt-1" type="password"/>
                        </li> 
                    </ul>
                    <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 font-small text-indigo-600 ease-out border-2 border-purple-500 rounded-full shadow-md" type="submit">
                        <span className="relative">login</span>
                    </button>
                </form>
            </div>
        </div>
    )
}