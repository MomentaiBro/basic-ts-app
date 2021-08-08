import React from "react";
import { UserType } from "../App";
import SecondLevel from "./SecondLevel";

interface Props{
   user: UserType;
}


export default function MyMessage({user}: Props) {
    
    console.log(user)

    return (
        <div>
            Hello
            <br />
            <SecondLevel users={user}/>
        </div>
    )
}