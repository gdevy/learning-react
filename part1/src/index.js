import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part={[part1, part2, part3]} num={[exercises1, exercises2, exercises3]} />
      <Total total={exercises1+exercises2+exercises3}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
} 

const Content = (props) => {
  return (
    <div>
      <Part part={props.part[0]} num={props.num[0]} />
      <Part part={props.part[1]} num={props.num[1]} />
      <Part part={props.part[2]} num={props.num[2]} />
    </div>
  )
} 

const Part = (props) => {
  return (
    <p>
      {props.part} {props.num}
    </p>
  )
} 

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
} 

ReactDOM.render(<App />, document.getElementById('root'))