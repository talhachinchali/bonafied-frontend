import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import bonafiedimg from './OIP.jpeg'

function UpdateDetails() {
  const { year } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.put(`http://localhost:5000/students/year/${year}`);
        setStudent(response.data);
       
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [year]);
}
export default UpdateDetails;