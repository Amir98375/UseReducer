import { useReducer } from "react"

const initstate={
    counter:0,
    noOfClicks:0
}
const counterActions={
    decreament:"decreament",
    increament:"increament",
    reset:"reset"
}

const reducer =(state,action)=>{
    switch(action.type){
        case "increament":{
            return{
                ...state,
                counter:state.counter+1,
                noOfClicks:state.noOfClicks+1
                
            };
        }
        case "decreament":{
            return {
                ...state,
                counter:state.counter-1,
                noOfClicks:state.noOfClicks+1
            };

        }
        case "reset":{
            return{
               ...initstate


            }
        }default:  return state
    }  
   
}

export const Counter =()=>{
    const [state,dispatch] = useReducer(reducer,initstate)
    console.log(state)
    return(
        <div>
            <h2>counter:{state.counter}</h2>
           
            
            <button onClick={()=>dispatch(
                {
                    type:counterActions.increament
                }
            )}>Add</button>
            <button onClick={()=>dispatch({
                type:counterActions.decreament
            })}>Reduce</button>
            <button onClick={()=>
                dispatch({
                    type:counterActions.reset
                })
            }>reset</button>
             <h2>No.ofclicks{state.noOfClicks}</h2>
        </div>
    )
}