import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAsyncData} from "./reducer/getPotterReducer";

const App = () => {
    const dispatch = useDispatch()
    const {persons} = useSelector(state => state.getPotterReducer)
    useEffect(() => {
        dispatch(getAsyncData())
    }, [])
    console.log(persons)
    return (
        <div>
            {
                persons?(
                    persons.map((item)=> (
                        <div>
                            <span>{item.userId}</span>
                        </div>
                    ))
                ):(
                    <span>Нету данных родной</span>
                )
            }
        </div>
    );
};

export default App;