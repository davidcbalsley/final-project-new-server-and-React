import React, { useState } from "react";
import API from "../utils/API";

function Home() {

    const [catname, setCatname] = useState();

    const handleSubmit = event => {
        event.preventDefault();

        console.log("catname = " + catname);
        // Nothing yet
        API.postCatName({
            name: catname
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
        }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="catname">Enter cat name</label>
                <input 
                 type="text" 
                 id="catname" 
                 placeholder="cat name"
                 onChange={event => setCatname(event.target.value)} />
                 <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default Home;