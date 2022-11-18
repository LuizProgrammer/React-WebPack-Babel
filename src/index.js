import React, {useState} from "react";
import ReactDOM from "react-dom/client";

const App = ()=>{
    const [name, setName] = useState("");

    return(
        <>
        <h1>{name}</h1>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);