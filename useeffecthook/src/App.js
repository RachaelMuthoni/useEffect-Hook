import React, { useEffect, useState } from "react";
import './App.css';

const App = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => response.json())
            .then((actualData) => setData(actualData))
    }, [])
    return ( 
<div className = "App" >
        <h1> Data Fetching </h1> 

{data?.map((post) => (
<>
<p>{post.title}</p>
</>
))}</div>
    );
}

export default App;