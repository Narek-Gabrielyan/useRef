import React, { useRef } from 'react';
// Components
import { Header } from './Components/Header/Header';
import { Courses } from './Components/Courses/Courses';
import { Advantages } from './Components/Advantages/Advantages';
// css
import './App.css'

export default function App() {
  const coursesRef = useRef(null);
  const advantagesRef = useRef(null);

  // Courses
  const coursesScroll = () => {
    coursesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Advantages
  const advantagesScroll = () => {
    advantagesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Header
        coursesScroll={coursesScroll}
        advantagesScroll={advantagesScroll}
      />
      <Courses ref={coursesRef} />
      <Advantages ref={advantagesRef} />
    </div>
  );
}