import React, { useContext } from 'react';
import {StudentContext} from "./StudentContext"
import { Link } from 'react-router-dom';

const FavouriteStudents = () => {
  const { students, removeFavourite } = useContext(StudentContext);

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
    <h1 className="text-3xl font-bold mb-4">Favourite Students</h1>
    <ul className="w-full max-w-md bg-white shadow-lg rounded-lg p-4">
      {students.filter(student => student.favourite).map(student => (
        <li key={student.name} className="flex justify-between items-center py-2 border-b last:border-b-0">
          <span className="text-lg">{student.name}</span>
          <button
            onClick={() => removeFavourite(student.name)}
            className="ml-4 px-4 py-2 rounded bg-red-500 text-white"
          >
            Remove from Favourites
          </button>
        </li>
      ))}
    </ul>
    <Link to="/" className="mt-4 text-blue-500 hover:underline">Go back to Student List</Link>
  </div>
  );
};

export default FavouriteStudents;
