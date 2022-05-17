import React from "react";
import ProfessorList from "./ProfessorContainers/ProfessorList";
import CourseList from "./CourseContainers/CourseList";

function App() {
    const professors = [
        {
            id: 1,
            name: "Saro Deravanesyan",
            rating: 9.9,
            img_src: 'https://people.aua.am/files/2019/09/0R8A9633-e1568031092696.jpg',
            courses:['Database Systems', 'Applied topics in CS', 'Applied topics in CS', 'Applied topics in CS']
        },
        {
            id: 2,
            name: "Michael Poghosyan",
            rating: 6.7,
            img_src: 'https://people.aua.am/files/2019/09/0R8A9633-e1568031092696.jpg',
            courses:['Statistics', 'Machine Learning']
        },
        {
            id: 3,
            name: "Lilit Avetisyan",
            rating: 2.3,
            img_src: 'https://people.aua.am/files/2019/09/0R8A9633-e1568031092696.jpg',
            courses:['Statistics']
        }
    ]
    return (
        <div className="wrapper">
            <h1>wdfkqekfeqhkdf</h1>
            <ProfessorList professors={professors}/>
        </div>
    );
}

export default App;
