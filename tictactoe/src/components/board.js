import React from "react";
import Sqaure from "./square";


export default function Board(){
    return(
        <div>
            <div className="border-row">
                <Sqaure/>
                <Sqaure/>
                <Sqaure/>
            </div>

            <div className="border-row">
                <Sqaure/>
                <Sqaure/>
                <Sqaure/>
            </div>

            <div className="border-row">
                <Sqaure/>
                <Sqaure/>
                <Sqaure/>
            </div>
        </div>
        
    )
}