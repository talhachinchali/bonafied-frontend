import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import bonafiedimg from './OIP.jpeg'

function Sspdetails() {
  const { rollNumber } = useParams();
  const [student, setStudent] = useState(null);
const[gender2,setGender2]=useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://bonafied3.onrender.com/students/${rollNumber}`);
        setStudent(response.data);
        setGender2(response.data.gender === "m" ? "Mr." : "Ms.");
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [rollNumber]);

  if (!student) {
    return <div>Student is not present,first add the student...</div>;
  }

  return (
    <div style={{ textAlign: "center"}}>
      
      
      <div >
        <div style={{ border: "2px solid black",borderTop:"none",borderLeft:"none",borderRight:"none", padding: "5px", marginTop: "10px",position:"relative",left:"80px" }}>
        <h2 style={{fontSize:"1.3em"}}>Billuru Gurubasava Mahaswamiji Institute Of Technology</h2>
        <div>(Estd:2013)</div>
        <div style={{fontSize:".8em"}}>(Recognized by government of karnatataka & AICTE new delhi and affiliated to visveswaraya<div>technological university,Belgaum)</div></div>
        <div style={{fontSize:"1.0em"}}>Mantur Road, <span style={{ fontWeight:"bold" }}>Mudhol-587313</span>, karnataka state</div>
        
        <img  src={bonafiedimg} alt="Student" style={{ maxWidth: "180px",position:"relative",right:"400px",bottom:"157px", border: "2px solid black",borderBottom: "2px solid black",borderTop:"none",borderLeft:"none", padding: "1em" }} />
       
        <div style={{ marginBottom:"-189px" }}>
     
      <span  style={{ position:"relative",bottom:"200px",fontSize:".85em" }}>  08350-280404,281404{'      '}<a   style={{marginLeft: "20px",borderBottom:"2px solid black" }} >email:bvvsbgmitm@gmail.com</a><a   style={{marginLeft: "20px",fontWeight:"bold" }} >website:www.bgmitm.ac.in</a></span>
      
      </div>
      </div>
      <div>
      <span  style={{ position:"relative",bottom:"2px" }}>  Ref. No. BGMIT/MDL/22-23/<a   style={{marginLeft: "500px" }} >Date:</a></span>
     </div>
    <a style={{ position:"relative",top:"60px",fontWeight:"bold",borderBottom:"4px solid black",fontSize:"1.3em" }}>STUDY/BONAFIED CERTIFICATE</a>
    <p style={{position:"relative",top:"100px",fontWeight:"bold"}}>This is to certify that the following details pertaining to the student studying in this institute is true.</p>
    <table style={{borderCollapse: "collapse",position:"absolute",top:"450px"}}>
  <tbody>
    <tr>
      <td style={{fontSize: "1.5em", padding: "10px", textAlign: "left"}}>Name of the Student</td>
      <td style={{fontSize: "1.5em", padding: "10px"}}>:</td>
      <td style={{fontSize: "2.0em", padding: "10px",textAlign: "left"}}>{student.name}</td>
    </tr>
    <tr>
      <td style={{fontSize: "1.5em", padding: "10px", textAlign: "left"}}>Father name</td>
      <td style={{fontSize: "1.5em", padding: "10px"}}>:</td>
      <td style={{fontSize: "2.0em", padding: "10px",textAlign: "left"}}>{student.fathername}</td>
    </tr>
    <tr>
      <td style={{fontSize: "1.5em", padding: "10px", textAlign: "left"}}>Mother name</td>
      <td style={{fontSize: "1.5em", padding: "10px"}}>:</td>
      <td style={{fontSize: "2.0em", padding: "10px",textAlign: "left"}}>{student.mothername}</td>
    </tr>
    <tr>
      <td style={{fontSize: "1.5em", padding: "10px", textAlign: "left"}}>Studying in Course</td>
      <td style={{fontSize: "1.5em", padding: "10px"}}>:</td>
      <td style={{fontSize: "2.0em", padding: "10px",textAlign: "left"}}>{student.course}</td>
    </tr>
    <tr>
      <td style={{fontSize: "1.5em", padding: "10px", textAlign: "left"}}>Year of Study</td>
      <td style={{fontSize: "1.5em", padding: "10px"}}>:</td>
      <td style={{fontSize: "2.0em", padding: "10px",textAlign: "left"}}>{student.year}</td>
    </tr>
    <tr>
      <td style={{fontSize: "1.5em", padding: "10px", textAlign: "left"}}>Subject Combination / Discipline</td>
      <td style={{fontSize: "1.5em", padding: "10px"}}>:</td>
      <td style={{fontSize: "2.0em", padding: "10px",textAlign: "left"}}>{student.branch}</td>
    </tr>
    <tr>
      <td style={{fontSize: "1.5em", padding: "10px", textAlign: "left"}}>Type of Seat Alloted</td>
      <td style={{fontSize: "1.5em", padding: "10px"}}>:</td>
      <td style={{fontSize: "2.0em", padding: "10px",textAlign: "left"}}>{student.tos}</td>
    </tr>
  </tbody>
</table>


      </div>
    </div>
  );
}

export default Sspdetails;
