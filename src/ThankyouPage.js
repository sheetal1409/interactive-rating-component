import React from "react"

export function ThankyouPage(props) {
    return (
        <div className="thankyou-page">
            <div className="thankyou-img"><img src="/illustration-thank-you.svg" alt="thankyouIcon" /></div>
            <div className="rateDisplay">You have selectd {props.ratedValue} out of 5 </div>
            <h1>Thank you!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support,don't hesitate to get in touch!</p>
        </div>
    )
}