import React from 'react';
import { incrementLike, decrementLike } from './Actions';
import {createStore} from 'redux';
import reducer from './Reducer';
const store = createStore(reducer);
const LikeCounter = () => {
    const [likes,setLikes] = React.useState(store.getState().likes)
    function HandleLike(){
        store.dispatch(incrementLike())
    }
    function HandleUnlike () {
        store.dispatch(decrementLike())
    } 
    React.useEffect(()=>{
        const subscribe = store.subscribe(()=>setLikes(store.getState().likes));
        return subscribe;
    },[])   
    return(
        <>
            <h1>{store.getState().likes}</h1>
            <button onClick={HandleLike}>Like</button>
            <button onClick={HandleUnlike}>Unlike</button>
        </>
    )
}

export default LikeCounter