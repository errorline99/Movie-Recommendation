import React from "react"
import Uses from "./uses"
import Pull from "./switch"


export default function Client(props) {
 return(<div>
    <Uses kook={props.tooth} su={props.sums}/>
    <Pull />
    </div>)
}



