import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import bonafiedimg from './OIP.jpeg'


function StudentDetails() {
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
    <a style={{ position:"relative",top:"100px" ,borderBottom:"4px solid black",fontSize:"2.2em",fontWeight:"bold"}}>STUDY/BONAFIED CERTIFICATE</a>
    <p style={{fontSize: "2.2em", position:"relative",top:"100px"}}>This is to certify that <span style={{fontWeight:"bold"}}>{gender2}{student.name}</span> is studying in BE {student.year} year {student.branch} Course in our college for the acadamic year {student.academic_year}.</p>
   {gender2==="Mr."? <p style={{fontSize: "2.2em", position:"relative",top:"100px",left:"-185px"}}>He bears good character.</p>:<p style={{fontSize: "2.2em", position:"relative",top:"100px",left:"-185px"}}>She bears good character.</p>}
        <h2 style={{position:"relative",top:"300px"}}>Billuru Gurubasava Mahaswamiji Institute Of Technology,Mudhol</h2>
        <table style={{borderCollapse: "collapse", border: "1px solid black",position:"relative",top:"300px",alignContent:"center",margin:"auto",fontSize:"16px"}}>
  <tr style={{border: "1px solid black",padding: "15px"}}>
    <td style={{border: "1px solid black", padding: "0px 35px"}}>Name of the student</td>
    <td style={{border: "1px solid black", padding: "0px 35px"}}>Branch</td>
    <td style={{border: "1px solid black", padding: "0px 35px"}}>Year</td>
    <td style={{border: "1px solid black", padding: "0px 35px"}}>Academic-year</td>
    <td style={{border: "1px solid black", padding: "0px 35px"}}>Sign</td>
   
  </tr>
  <tr style={{border: "1px solid black",padding: "15px"}}>
    <td style={{border: "1px solid black", padding: "0px 35px"}}>{student.name}</td>
    <td style={{border: "1px solid black", padding: "0px 35px"}}>{student.branch}</td>
    <td style={{border: "1px solid black", padding: "0px 35px"}}>{student.year}</td>
    <td style={{border: "1px solid black", padding: "0px 35px"}}>{student.academic_year}</td>
    <td style={{border: "1px solid black", padding: "0px 35px"}}></td>
   
  </tr>
  </table>
      </div>
    </div>
  );
}

export default StudentDetails;
