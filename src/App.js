import React from "react"
import { RatingPage } from "./RatingPage";
import { ThankyouPage } from "./ThankyouPage";

function App() {
  const [rated, setRated] = React.useState(false)
  const [ratedValue, setRatedValue] = React.useState("")

  return (
    <div className="App">
      {!rated && <RatingPage setRated={setRated} setRatedValue={setRatedValue} ratedValue={ratedValue} />}
      {rated && <ThankyouPage ratedValue={ratedValue} />}
    </div>
  );
}

export default App;
