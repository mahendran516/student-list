import React, { useContext } from 'react';
import { StudentContext } from './StudentContext';
import { Link } from 'react-router-dom';

const StudentList = () => {
  const { students, addFavourite } = useContext(StudentContext);

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Student List</h1>
      <ul className="w-full max-w-md bg-white shadow-lg rounded-lg p-4">
        {students.map(student => (
          <li key={student.name} className="flex justify-between items-center py-2 border-b last:border-b-0">
            <span className="text-lg">{student.name}</span>
            <button
              onClick={() => addFavourite(student.name)}
              disabled={student.favourite}
              className={`ml-4 px-4 py-2 rounded ${student.favourite ? 'bg-gray-400' : 'bg-blue-500 text-white'}`}
            >
              {student.favourite ? 'Added' : 'Add to Favourites'}
            </button>
          </li>
        ))}
      </ul>
      <Link to="/favourites" className="mt-4 text-blue-500 hover:underline">Go to Favourite Students</Link>
    </div>
  );
};

export default StudentList;
