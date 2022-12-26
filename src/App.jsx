import { useState, useEffect } from 'react'
import './App.css'
import AddCoursesTo from './Components/AddCoursesTo'
import AddNotes from './Components/AddNotes'
import SavedNotes from './Components/SavedNotes'
import Buttons from './Components/Buttons'


function App() {
  const [count, setCount] = useState(0)
  const [courses, setCourses] = useState([])
  const [data, setData] = useState([]);
  const URL = "https://luentomuistiinpano-api.deta.dev/notes/";

  const ReturnCourses = (data) => {
    const Courses = Array.from(
      new Set(data.map((it) => it.course.name))
    );
    return Courses;
  };
  const deleteByText = (t) =>{
    const r = results.filter(noteData => noteData.text !==t)
    setResults(r)
  }
//  päivittää/renderöi
  useEffect(() => {
    fetch(URL)
      .then((r) => r.json())
      .then((r) => {
        setData(r);
        setCourses(ReturnCourses(r))
      });
  }, []);

  

  return (
    <>
    <div className="App">
      <h1>Notes App</h1>
    <Buttons className="buttons" handleClick={setCount} count={count}></Buttons> 
    {count === 1 && (
        <AddNotes handleClick={setCount}  data={data} setData={setData} courses={courses} deleteByText={deleteByText}></AddNotes>
      )}
     {count === 2 && (
        <SavedNotes handleClick={setCount}  data={data} courses={courses}></SavedNotes>
      )}
     {count === 3 && (
        <AddCoursesTo handleClick={setCount}  data={data}></AddCoursesTo>
      )}

      {/* Testi buttoneit, toimiiko consolis */}
    {/* <button onClick={() => console.log(data)}>test</button>
    <button onClick={() => console.log(courses)}>test</button> */}

    </div>
    </>
  )
}

export default App
