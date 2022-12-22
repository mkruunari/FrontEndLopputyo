import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ListNotes from './Components/ListNotes'
import AddCourses from './Components/AddCourses'
import CreateNotesForClass from './Components/CreateNotesForClass'
import AddCoursesTo from './Components/AddCoursesTo'
import AddNotes from './Components/AddNotes'
import SavedNotes from './Components/SavedNotes'
import Buttons from './Components/Buttons'


function App() {
  const [count, setCount] = useState(0)
  const [coursesData, setCoursesData] = useState([]);
  const [courses, setCourses] = useState([]);
  const [data, setData] = useState([]);
  

  return (
    <>
    <div className="App">
      <h1>Notes App</h1>
    <Buttons className="buttons" handleClick={setCount} count={count}>
    {count === 1 && (
        <AddNotes courses={coursesData} data={data} setData={setData}></AddNotes>
      )}
    
   
    </Buttons> 

    
    {/* <AddCoursesTo />
    <AddNotes />
    <SavedNotes />  */}

{/* /* <CreateNotesForClass />
    <ListNotes />
    <AddCourses /> */}

    </div>
    </>
  )
}

export default App
