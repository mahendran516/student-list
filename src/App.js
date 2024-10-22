import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { StudentProvider } from './StudentContext';
import StudentList from './StudentList';
import FavouriteStudents from './FavouriteStudents';


const App = () => {
  return (
    <StudentProvider>
      <Router>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/favourites" element={<FavouriteStudents />} />
        </Routes>
      </Router>
    </StudentProvider>
  );
};

export default App;
