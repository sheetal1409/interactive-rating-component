import React from "react"


export function RatingPage(props) {
    function handleValue(event) {
        props.setRatedValue(event.target.value)
    }
    function handleSubmit() {
        props.setRated(true)
    }

    return (<div className="rated-page">
        <div className="icon-star item-holder"><img src="/icon-star.svg" alt="icon-star" /></div>
        <h4 className="rated-page-h4">How did we do?</h4>
        <p className="rated-page-p">Please let us know how we did with your support request.All feedback is appreciated to help us improve our offering!</p>
        <ul className="rate-values" onClick={handleValue}>
            <li ><button className="rate-btn" value="1">1</button></li>
            <li ><button className="rate-btn" value="2">2</button></li>
            <li ><button className="rate-btn" value="3">3</button></li>
            <li ><button className="rate-btn" value="4">4</button></li>
            <li ><button className="rate-btn" value="5">5</button></li>
        </ul>
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div >)
}