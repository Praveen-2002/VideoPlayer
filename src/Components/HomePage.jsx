import { React, useEffect, useState } from 'react'
import VideoCard from './VideoCard'

function HomePage(props) {
    var [userInput,setUserInput] = useState("");
    var [searched,setSearched] = useState("trending");
    function setInput(e){
        setUserInput(e.target.value);
    }
    function search(){
        setSearched(()=>userInput);
        console.log(searched);
    }

    var [data, setData] = useState(null);
    useEffect(() => {
        async function getData() {
            var api_data = await fetchDataFormAPI();
            setData(api_data.items);
        }
        getData();
    }, [searched])

    async function fetchDataFormAPI() {
        const url = `https://youtube-v31.p.rapidapi.com/search?q=${searched}&part=snippet%2Cid&regionCode=IN&maxResults=50&order=date`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'ApiKey', // Pass the API Key.
                'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
            }
        };
        var data = await fetch(url, options);
        var res = await data.json();
        console.log(res.items);
        return res;
    }
    return (
        <div className='container'>
            <div className="input-group m-3" style={{"width":"80vw"}}>
                <input type="text" className="form-control" placeholder="Recipient's username" onChange={setInput} aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={search}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 18 18">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg></button>
            </div>
            <div className="row row-cols-lg-4 g-2">
                {data && data.map((ele) => {
                    return <VideoCard snippet={ele.snippet} id={ele.id} />
                })}
            </div>
        </div>
    )
}

export default HomePage;