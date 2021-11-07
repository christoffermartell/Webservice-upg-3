import React, {useState,  useContext} from 'react';
import { Context } from '../Auth/AuthProvider';
import { useHistory } from 'react-router';


const Posts = () => {
    const {token,setToken,setIsAuthenticated, author, setAuthor} = useContext(Context);
    const [createPost, setCreatePost] = useState({titel:"",content:"",username:author});
    const [post, setPost] = useState([]);
    
    
    
    let history = useHistory();

    const changePostData = (e) => {
        setCreatePost({...createPost, [e.target.name]: e.target.value});
    };

    const postHandler = (e) => {
        e.preventDefault();
        const buildPost = async () => {
        const res = await fetch ("http://localhost:8080/poster/create",{
            method: "post",
            body: JSON.stringify(createPost),
            headers: {
                token: token,
                "Content-Type": "application/json",
            },
        });

        if(res.status === 201) {
        const data = await res.text();
        console.log(data);
    }else {
        alert("Something went wrong");
    };
    }

    buildPost();
    fetchPosts();
    };


    const deletePost = async (title) => {

        
        
      /*  if(Object.is(author,post.username)){
            alert("hej")
        }*/

         await fetch(`http://localhost:8080/poster/delete/${title}`,{
            method: "DELETE",
            headers: {
                token: token,
                username:author
            },
        });
        fetchPosts();
    
    }; 


    const fetchPosts = async () => {
		const res = await fetch("http://localhost:8080/poster/all", {
			method: "GET",
			headers: {
				token: token,
			},
		});
        
        if(res){
        const data = await res.json();
		setPost(data);
        }
		
	};

    const logoutHandler = () => {
        const logout = async () => {
            const res = await fetch("http://localhost:8080/user/logout", {
                method: "post",
                headers: {token:token}
            })
            if(res){
                setToken("");
                setAuthor("");
                
                history.push("/login")
            }
           
        }
        logout();
    }


    if(token === ""){
        setIsAuthenticated(false)
        history.push("/login")
    }


    return (
        <div className="container">
            
                
                
  <div className="row">
    <div className="col">
    <form onSubmit={postHandler}>
                <input 
                    type="text"
                        name="title"
                            className="form-control rounded-0" 
                        placeholder="Title"
                    onChange={changePostData}
                 >

                 </input>
                 <input 
                    type="text"
                        name="content"
                            className="form-control rounded-0" 
                        placeholder="Content"
                    onChange={changePostData}
                 >

                 </input>
                 <i 
                    type="text"
                        name="creator"
                            className="form-control rounded-0" 
                        placeholder="Author"
                    
                 >User: {author}

                 </i>
                <button className="form-control rounded-0 btn-secondary" type="submit">Create

                </button>
            </form> </div>

    <div className="col">
           
            <ul className="list-group-item" >
            {post.map((p,i)=>{
                return (
                    <div key={i} className="container">
                    <div className="row justify-content-md-center">
                    <div  className="col col-lg-2">{p.title}</div>
                    <div  className="col-md-auto">{p.content}</div>  
                    <div  className="col col-lg-2">{p.username}</div>
                    <button onClick={()=> deletePost(p.title)}>Delete</button>
                    </div>
                    </div>    
                        )
                     })}
                     
            </ul>

           
    </div>
    <div className="w-100"></div>
    <div className="col">Skapa ny sida för alla posts</div>
    <div className="col"> <button className="btn btn-outline-success" onClick={fetchPosts}>Todays Posts</button></div>
  </div>




            <button  type="submit" onClick={logoutHandler}>Logout</button>

        </div>
    )
}

export default Posts

/*

<div className="" key ={i} >

                       title: {p.title}<br/>
                       content: {p.content}<br/>
                       Author: {p.creator}<br/>
                      </div> 

*/