import React from "react";

export default function WindowTracker() {

    const [width , setwidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        function WatchWidth() {
            console.log("setting up")
            setwidth(window.innerWidth)  
        }
        window.addEventListener("resize" , WatchWidth)
       

        return function() {
            console.log("cleaning up")
            window.removeEventListener("resize" , WatchWidth)
        }


    }, [])

    return (
        <h1>Window width : {width}</h1>
    )
}