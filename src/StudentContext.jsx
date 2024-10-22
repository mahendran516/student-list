import React, { createContext, useState } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([
    { name: 'Mahendran', favourite: false },
    { name: 'Praveen', favourite: false },
    { name: ' Smith', favourite: false },
    
  ]);

  const addFavourite = (name) => {
    setStudents(students.map(student =>
      student.name === name ? { ...student, favourite: true } : student
    ));
  };

  const removeFavourite = (name) => {
    setStudents(students.map(student =>
      student.name === name ? { ...student, favourite: false } : student
    ));
  };

  return (
    <StudentContext.Provider value={{ students, addFavourite, removeFavourite }}>
      {children}
    </StudentContext.Provider>
  );
};
