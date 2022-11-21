import logo from './logo.svg';
import './App.css';
import { configure } from '@testing-library/react';


const Header = ( {name} ) => <h1>{name}</h1>

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => <li>{part.name} {part.exercises}</li>)}
    </div>
  )
}

const Course = ( {course} ) => {
  const id = course.id
  const name = course.name
  const parts = course.parts
  let total = 0

  const finalTotal = course.parts.forEach(element => {
    total += element.exercises
  });

  console.log(total)

  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <p>total of {total} exercises</p>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App;
