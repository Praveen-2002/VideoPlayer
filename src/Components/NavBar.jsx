import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

function NavBar(props) {
    var [userInput,setUserInput] = useState("");
    var [searched,setSearched] = useState(null);
    function setInput(e){
        setUserInput(e.target.value);
    }
    function search(){
        setSearched(()=>userInput);
    }

    useEffect(() => {
        async function getData() {
            var api_data = await fetchDataFormAPI();
            props.setData(api_data.items);
        }
        getData();
    }, [searched])

    async function fetchDataFormAPI() {
        const url = `https://${process.env.REACT_APP_YoutubeApi_domain}/search?q=${searched}&part=snippet%2Cid&regionCode=IN&maxResults=50&order=date`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': process.env.REACT_APP_YoutubeApi_ApiKey, 
                'x-rapidapi-host': process.env.REACT_APP_YoutubeApi_domain
            }
        };
        var data = await fetch(url, options);
        var res = await data.json();
        return res;
    }
    return (
        <nav className="navbar dark:text-white h-8 mb-10">
            <div className="container mx-auto flex m-3 h-full">
                <Link className="flex " id="App_Title" to='/'><strong>YouTube</strong></Link>
                <div className='flex m-auto w-1/2'>
                <input type="text" placeholder='Search' onChange={setInput} className='rounded-full border-2 border-gray-500 dark:bg-black dark:text-white indent-3 w-full' />
                <button onClick={search}
                    className="flex space-x-3 items-center px-5 py-3 bg-indigo-500 hover:bg-indigo-800 rounded-full drop-shadow-md">
                    <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14" height="14"
                        viewBox="0 0 30 30">
                        <path
                            d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                        </path>
                    </svg>
                </button>
                </div>
                <div className="flex m-1"> {/*Todo: Add User Icon*/}
                    <strong className="user-name">{props.userName}</strong>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;