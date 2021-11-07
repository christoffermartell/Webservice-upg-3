import React, { useState, useEffect } from "react";

export const AllPosts = () =>{



const [post, setPost] = useState([]);


useEffect(() => {

    fetchPosts();
    
},[]);


const fetchPosts = async () => {
    const res = await fetch("http://localhost:8080/poster/all", {
        method: "GET",
       
    });
    
    if(res){
    const data = await res.json();
    setPost(data);
    }




    
};

return (
    <div>
         <ul className="list-group-item" >
            {post.map((p,i)=>{
                return (
                    <div key={i} className="container">
                    <div className="row justify-content-md-center">
                    <div  className="col col-lg-2">{p.title}</div>
                    <div  className="col-md-auto">{p.content}</div>  
                    <div  className="col col-lg-2">{p.username}</div>
                    </div>
                    </div>    
                        )
                     })}
                     
            </ul>
    </div>
)

}