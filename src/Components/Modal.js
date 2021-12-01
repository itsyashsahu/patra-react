import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { setShowOptions } from '../redux/watchlistReducer';
import Draggable from 'react-draggable';

export default function Modal() {
    const dispatch = useDispatch();
    const showOptions = useSelector( (state)=> state.watchlist.showOptions )
    console.log("hellowasdlkfj",showOptions);
    if(showOptions){
    return (
        <Draggable
        // defaultPosition={{x: 300, y: 300}}
        // positionOffset={ { x: '100%' ,y: '50%' } }
        >

        <div className="drag-wrapper">
            <div className="Options-Header">
                
            </div>
            <div className="draggable-window">
                <div onClick={()=> dispatch(setShowOptions()) }>X</div>
                Hello waordl 
            </div>
        </div>
        </Draggable>
    )}else{
        return(
            <div></div>
            )
    }
}
