import React,{useState,useEffect} from 'react'

export default function SignUp() {
    var [user,setUser] = useState(null);
    var [resMsg,setResMsg] = useState("akjsdlf");

    function registerUser(e){
        e.preventDefault();
        var target = e.target;
        setUser({
            name : target.user_name.value,
            email : target.user_email.value,
            password : target.user_password.value
        })
    }

    useEffect(()=>{
        async function StoreUser(){
            var storeUser_res = await fetch(`${process.env.Server_Url}/user/register`,{
                method: "post",
                headers: {
                    "name":user.name,
                    "email":user.email,
                    "password":user.password
                }
            });
            var resData = await storeUser_res.json();
            setResMsg(resData.msg);
        }
        StoreUser();
        console.log(resMsg);
    },[user])

  return (
    <div className="relative inline-flex items-center justify-center mt-10">
            <div className="login_page container m-2 border-2">
                <h2 className="font-medium text-indigo-600 my-3">User Registration</h2>
                <form className="login_form m-3" onSubmit={(e)=>registerUser(e)}>
                <hr/>
                    <ul className="m-1">
                    <li className="m-3">
                            <lable htmlFor="login_name">User Name</lable><br/>
                            <input id="login_name" name="user_name" className="w-3/5 p-2 rounded-sm border-2 rounded-md mt-1" type="text"/>
                        </li> 
                        <li className="m-3">
                            <lable htmlFor="login_email">Email</lable><br/>
                            <input id="login_email" name="user_email" className="w-3/5 p-2 border-2 rounded-md mt-1" type="email"/>
                        </li> 
                        <li className="m-3">
                            <lable htmlFor="login_password">Passwrod</lable><br/>
                            <input id="login_password" name="user_password" className="w-3/5 p-2 rounded-sm border-2 rounded-md mt-1" type="password"/>
                        </li> 
                    </ul>
                    <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 font-small text-indigo-600 ease-out border-2 border-purple-500 rounded-full shadow-md" type="submit">
                        <span className="relative">Signup</span>
                    </button>
                </form>
            </div>
        </div>
  )
}
