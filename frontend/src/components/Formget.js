import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import'./Forget.css'

function Formget() {
    const [users,setUsers]=useState([])
    const Navigate=useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:1900/userget')
        .then(Response=>{
            setUsers(Response.data);
            
        })
        .catch(Error=>{
            console.error('Error fetching user:',Error)
        })


    },[])
    

   
    return(
        <div>
            <h2>User list</h2>
            {users.length > 0 ?(
                <div className='list'>
                    {users.map(user=>(
                        <div key={user._id}>
                           <ol>
                           <li> <strong>name:</strong>{user.name}<br/></li>
                            <li><strong>email:</strong>{user.email}<br/></li>
                           <li> <strong>age:</strong>{user.age}</li>
                            </ol>
                          
                          </div>
                    ))}
                    
                    </div>
            ) : (
                <p>no Users found.</p>
            )}
        </div>
    )
  
}

export default Formget