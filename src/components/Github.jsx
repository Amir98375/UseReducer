import axios from "axios"
import './Github.css'
import { useEffect, useReducer, useState } from "react"

const GithubActions={
   
  "fetch":"fetch",
  "success":"success",
  "failure":"failure"
}
const reducer =(state,action)=>{
    switch(action.type){
       case GithubActions.fetch:{
           return{
                   ...state,
                   loading:true,
                   error:false,
                   data:null
           }
       }
       case GithubActions.success:{
        return{
                ...state,
                loading:false,
                error:false,
                data:action.payload
        }
    }
     
    case GithubActions.failure:{
        return{
                ...state,
                loading:false,
                error:true,
               
        }
    }
    default:return state

    }
}

export const GitHubUsers=()=>{
    const [{loading,error,data},dispatch] =useReducer(reducer,GithubActions)
const [d,setdata]=useState('')
    useEffect(()=>{
        dispatch({
            type:GithubActions.fetch
        })
        axios.get(`https://api.github.com/search/users`,{
            params:{
                q:"masai"
            }
        })
        .then((res)=>{
            dispatch({
                type:GithubActions.success,
                payload:res.data
            })
        })
        .catch((err)=>{
            dispatch({
                type:GithubActions.failure
            })
        })
    },[])
    console.log(data)
console.log(d)
    return(
        
        <div>
         <input type="text" style={{width:"40%"}} onChange={(e)=>dispatch(e.target.value)}></input>
         
          <button >search</button>


            {loading && <div>Laoding</div>}
            {error && <div>Error</div>}
          {data?.items.map((el)=>{
              return(
                      <div className="Container">
                           <div className="Main" key={el.id}>
                               <hr></hr>
                               <p>{el.login}</p>
                               <p>{el.id}</p>
                               <img className="image" src={el.avatar_url} alt="" />
                           </div>
                      </div>
              )
          })}
        </div>
    )
}