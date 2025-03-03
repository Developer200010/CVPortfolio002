import React, {useEffect, useRef} from 'react'
import Typed from "typed.js"
export const TypedComponent = () => {
    const typedElement = useRef(null)
    const typedInstance = useRef(null)

    useEffect(()=>{
        typedInstance.current = new Typed(typedElement.current,{
            strings: ["Frontend developer", "Backend developer", "Problem solver", "Knowledge of Relational and Non-Relational Data Base"], // Text strings
            typeSpeed: 50,
            backSpeed: 25,
            loop: true,
        })
        return () =>{
            typedInstance.current.destroy();
        }
    },[])
    return <span ref={typedElement}/>
}