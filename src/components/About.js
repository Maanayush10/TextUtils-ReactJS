import React, { useState } from 'react'

export default function About(props) {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
    })
    const myFunct =()=>{
        if(props.mode === 'dark')
        {
            return ({
                        color: 'yellow',
                        backgroundColor: 'black',
                    })
        }
        else
        {
            return ({
                color: 'black',
                backgroundColor: 'white',
            })
        }
    }
    // const [myText, setMyText] = useState("Enable Dark mode")
    // const handleDarkMode = () => {
    //     setMyStyle({
    //         color: 'yellow',
    //         backgroundColor: 'black',
    //     })
    // }
    // const handleLightMode = () => {
    //     setMyStyle({
    //         color: 'black',
    //         backgroundColor: 'white',
    //     })
    // }
    // const toggleStyle = () => {
    //     if (props.mode === "dark") {
    //         setMyStyle({
    //             color: 'yellow',
    //             backgroundColor: 'black',
    //             border: '0.5px solid white'
    //         })
    //         // setMyText("Enable Light Mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //         })
    //         // setMyText("Enable Dark Mode")
    //     }
    // }
    return (
        <div className='container my-5' style={myFunct()}>
            <h1 className='my-2'>About Us</h1>
            <div className="accordion" id="accordionExample" style={myFunct()}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myFunct()} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myFunct()}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myFunct()} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myFunct()}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myFunct()} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myFunct()}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="conatiner">
                <button type="button" className="btn btn-warning my-3" onClick={handleDarkMode}>Enable dark mode</button>
                <button type="button" className="btn btn-primary mx-5 my-3" onClick={handleLightMode}>Enable Light mode</button>
                <button type="button" className="btn btn-info mx-5 my-3" onClick={toggleStyle}>{myText}</button>
            </div> */}
        </div>
    )
}
