import Course from "./components/Course"

const App = () => {

  const courses = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Refactoring modules',
          exercises: 10,
          id: 2
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 3
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web Development Curriculum</h1>
      { courses.map((course, courseIndex) => <Course key={courseIndex} course={course} /> )}
    </div>
    )
}

export default App