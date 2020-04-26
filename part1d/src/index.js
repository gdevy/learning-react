import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToValue = (newValue, setter) => {
    return () => {
      console.log('updating ', newValue, setter)
      setter(newValue)
    }
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={setToValue(good + 1, setGood)}>good</button>
      <button onClick={setToValue(neutral + 1, setNeutral)}>neutral</button>
      <button onClick={setToValue(bad + 1, setBad)}>bad</button>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

const Statistic = ({ text, num }) => {

  return (
    <tr>
      <td> {text} </td>
      <td> {num} </td>
    </tr>
  )
}

const Statistics = ({ good, bad, neutral }) => {

  let total = good + bad + neutral
  let average = (good - bad) / total


  if (total > 0) {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <Statistic text={"good"} num={good} />
          <Statistic text={"neutral"} num={neutral} />
          <Statistic text={"bad"} num={bad} />
          <Statistic text={"average"} num={average} />
          <Statistic text={"positive"} num={100 * good / total + " %"} />
        </table>
      </div>
    )
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
}

ReactDOM.render(<App />,
  document.getElementById('root')
)