import React from 'react'

const Part = ({ part }) => {

    return (
        <p>{part.name} {part.exercises}</p>
    )
}

const Course = ({ course }) => {
    console.log('course', course)
    return (
        <div>
            <h2>{course.name}</h2>
            {course.parts.map(part => <Part key={part.id} part={part} />)}
            <p><b>total of {course.parts.reduce((acc, val) => acc += val.exercises, 0)} courses</b></p>
        </div>
    )
}

export default Course
