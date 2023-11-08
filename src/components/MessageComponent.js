import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMessage } from "../action/messageActions";


const MessageComponent = () => {
    const message = useSelector((state) => state.message);
    const dispatch = useDispatch();

    const changeMessage = () => {
        dispatch(setMessage("Hello Vietnam!"));
    };

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={changeMessage}>Change Message</button>
        </div>
    );
};

export default MessageComponent;
