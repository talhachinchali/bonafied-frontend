import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AddStudent.css'
import OIP from './OIP.jpeg'


function AddStudent() {
  const [rollNumber, setRollNumber] = useState('2LB');
  const [name, setName] = useState('');
  const [fathername, setFathername] = useState('');
  const [mothername, setMothername] = useState('');
  const [tos, setTos] = useState('');
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');
  const [academic_year, setAcademic_year] = useState('');
  const [gender, setGender] = useState('');
  const [rollNumber2, setRollNumber2] = useState('');
  const [year2, setyear2] = useState('');
  const [year3, setyear3] = useState('');
  const[searchis,setSearchis]=useState('');
  const[addis,setAddis]=useState(true);
  const[updateis,setUpdateis]=useState('');
  const[course,setCourse]=useState('');
  const[failedrollno,setFailedrollno]=useState('');
  const[failedyear3,setFailedyear3]=useState('');
  const[academicyear2,setAcademicyear2]=useState('');
  const[academicyear3,setAcademicyear3]=useState('');



  const update = async (event) => {
    event.preventDefault();
    alert(`Updated Successfully`)
    const student = { year2, year3 };

    try {
      const response = await axios.put(`https://bonafied3.onrender.com/students/year/${year2}`, student);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const failedupdate = async (event) => {
    event.preventDefault();
    alert(`Updated Successfully`)
    const student = { failedrollno, failedyear3 };

    try {
      const response = await axios.put(`https://bonafied3.onrender.com/students/failyear/${failedrollno}`, student);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  


  const updateacademicyear = async (event) => {
    event.preventDefault();
    alert(`Updated Successfully`)
    const student = { academicyear2, academicyear3 };

    try {
      const response = await axios.put(`https://bonafied3.onrender.com/students/academic_year/${academicyear2}`, student);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const student = { rollNumber, name, branch, year, academic_year, gender, fathername, mothername, tos ,course};

    try {
      const response = await axios.post('https://bonafied3.onrender.com/students', student);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(rollNumber, name, branch, year, academic_year, gender, fathername, mothername, tos);
  const handleSearchClick = () => {
    setSearchis(true);
    setAddis(false);
    setUpdateis(false);
  };
  const handleAddClick = () => {
    setAddis(true);
    setSearchis(false);
    setUpdateis(false);
  };
  const handleUpdateClick = () => {
    setAddis(false);
    setSearchis(false);
    setUpdateis(true)
  };
  return (


    <div  >
       <nav>
      <ul>
        <li><a onClick={handleAddClick}>Add student</a></li>
        <li><a  onClick={handleSearchClick}>Search</a></li>
        <li><a onClick={handleUpdateClick}>Update</a></li>
      </ul>
    </nav><div>
    <img style={{    width: "200px",
    position: "absolute",
    left: "400px"}} src="https://www.bimsbagalkot.ac.in/images/beeluru_shri.jpg" />
     <img style={{    width: "200px",
    position: "absolute",
    right: "400px"}} src={OIP} />
    <h1 className='heading_login_box' style={{fontSize:"3.2em",color:"rgb(255, 153, 0)",textShadow:"10px 6px 6px black", lineHeight: "0.6"}}><p>B. V. V. Sangha's</p>Biluru Gurubasava Mahaswamiji <p>Institute of Technology, Mudhol-587313</p></h1>
     </div> {addis?(
      <div className="login_box" style={{  top: "770px",left:"1100px", position: "absolute" }}>
      <h2 className="heading_login_box" style={{ borderBottom: "2px dotted black" }}>Add a new student</h2>
      <form onSubmit={handleSubmit}>
      <div className="user_box">
  <input 
    className="user_box_input" 
    placeholder='USN' 
    type="text" 
    value={rollNumber}
    onChange={(event) => setRollNumber(event.target.value.toUpperCase())}
  />
</div>
<div className="user_box">
  <input 
    className="user_box_input" 
    placeholder='Name' 
    type="text" 
    value={name} 
    onChange={(event) => setName(event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1))}
  />
</div>

        <div className='user_box'>

          <input className="user_box_input" placeholder='Father name' type="text" value={fathername} onChange={(event) => setFathername(event.target.value)} />
        </div>
        <div className='user_box'>

          <input className="user_box_input" placeholder='Mother name' type="text" value={mothername} onChange={(event) => setMothername(event.target.value)} />
        </div>
        <div className='user_box' style={{ padding: "10px" }}>
          <label className="user_box_label" >Course:</label>
          <select style={{ position: "relative", left: "90px" }} value={course} onChange={(event) => setCourse(event.target.value)} >
            <option value="">select</option>
            <option value="Bachelor of Engineering">Bachelor of Engineering</option>
           
            
            <option value="Post Graduation">Post Graduation</option>
          </select>

        </div>
        {course==="Bachelor of Engineering"?(
        <div className='user_box' style={{ padding: "10px" }}>
          <label className="user_box_label" >Department:</label>
          <select style={{ position: "relative", left: "90px" }} value={branch} onChange={(event) => setBranch(event.target.value)} >
            <option value="">select</option>
            <option value="Computer Science and engineering">Computer Science and Engineering</option>
            <option value="Civil engineering">Civil Engineering</option>
            <option value="Mechanical engineering">Mechanical Engineering</option>
            <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
            <option value="Artificial Intelligence and Machine Learning">Artificial Intelligence and Machine Learning</option>
            
          </select>

        </div>):(
        <div  className='user_box' style={{ padding: "10px" }}>
          <label className="user_box_label" >Department:</label>
          <select style={{ position: "relative", left: "90px" }} value={branch} onChange={(event) => setBranch(event.target.value)}>
          <option value="">select</option>
          <option value="Master of Business Administration">Master of Business Administration</option>
          </select>
        </div>)

}
       

        <div className='user_box' style={{ padding: "10px" }}>
          <label className="user_box_label" >Year:</label>
          <select style={{ position: "relative", left: "90px" }} value={year} onChange={(event) => setYear(event.target.value)} >
            <option value="">select</option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
          </select>

        </div>
        <div className='user_box' style={{ padding: "10px" }}>
          <label className="user_box_label" >Academic-year</label>
          <select style={{ position: "relative", left: "90px" }} value={academic_year} onChange={(event) => setAcademic_year(event.target.value)} >
            <option value="">select</option>
            <option value="2022-23">2022-23</option>
            <option value="2023-24">2023-24</option>
            <option value="2024-25">2024-25</option>
          </select>

        </div>
        <div className='user_box' style={{ padding: "10px" }}>
          <label className="user_box_label" >Type of seat</label>
          <select style={{ position: "relative", left: "90px" }} value={tos} onChange={(event) => setTos(event.target.value)} >
            <option value="">select</option>
            <option value="Management">Management</option>
            <option value="CET">CET</option>
            <option value="SNQ">SNQ</option>
            <option value="Non-Karnataka">Non-Karnataka</option>
            <option value="Comed-K">Comed-K</option>
          </select>

        </div>
        <div className='user_box' style={{ padding: "10px" }}>
          <label className="user_box_label" >gender</label>
          <select style={{ position: "relative", left: "90px" }} value={gender} onChange={(event) => setGender(event.target.value)} >
            <option value="">select</option>
            <option value="m">Male</option>
            <option value="f">Female</option>
          </select>

        </div>
        <button className="login_box_button" type="submit">Submit</button>
      </form>
      </div>
      ):null}
      {searchis?(
      <div className='login_box' style={{ position: "relative", left: "1000px", top: "300px" }}>
        <h2 style={{ borderBottom: "2px dotted black" }}>Search for a student</h2>
        <div className='user_box'>

          <input className="user_box_input" placeholder='Roll number' type="text" value={rollNumber2} onChange={(event) => setRollNumber2(event.target.value.toUpperCase())} />
        </div>
        <Link to={`/students/${rollNumber2}`}>
          <button className="login_box_button" type="submit">Bonafied</button>
        </Link>
        <Link to={`/ssp/${rollNumber2}`}>
          <button className="login_box_button" type="submit">SSP</button>
        </Link>
      </div>
      ):null
}

      {updateis?(
        <div className='login_box' style={{ position: "relative", top: "300px", left: "550px" }}>
        <h2 style={{ borderBottom: "2px dotted black" }}>Update Information</h2>
        <form onSubmit={update}>
        
  <div>
    <select
      className="user_box_input"
      placeholder="update year"
      type="text"
      value={year2}
      onChange={(event) => setyear2(event.target.value)}
    >
      <option value="">previous year</option>
      <option value="I">I</option>
      <option value="II">II</option>
      <option value="III">III</option>
    </select>
    <select
      className="user_box_input"
      placeholder="update year"
      type="text"
      value={year3}
      onChange={(event) => setyear3(event.target.value)}
    >
      <option value="">present year</option>
      <option value="I">I</option>
      <option value="II">II</option>
      <option value="III">III</option>
      <option value="IV">IV</option>
    </select>
  </div>




         {year2<=year3 &&( <button className="login_box_button" type="submit">Update</button>)}
         {year2 > year3 && (
  <div>
    <p>present year cannot be less than previous year</p>
  </div>
)}

        </form>
      </div>
      ):null}


{updateis?(
        <div className='login_box' style={{ position: "relative", top: "-100px", left: "1550px" }}>
        <h2 style={{ borderBottom: "2px dotted black" }}>fail Update Information</h2>
        <form onSubmit={failedupdate}>
        
  <div>
    <input
      className="user_box_input"
      placeholder="Enter roll number"
      type="text"
      value={failedrollno}
      onChange={(event) => setFailedrollno(event.target.value)}
    />
     
    <select
      className="user_box_input"
      placeholder="update year"
      type="text"
      value={failedyear3}
      onChange={(event) => setFailedyear3(event.target.value)}
    >
      <option value="">present year</option>
      <option value="I">I</option>
      <option value="II">II</option>
      <option value="III">III</option>
      <option value="IV">IV</option>
    </select>
  </div>




          <button className="login_box_button" type="submit">Update</button>
        

        </form>
      </div>
      ):null}


{updateis?(
        <div className='login_box' style={{ position: "relative", top: "300px", left: "550px" }}>
        <h2 style={{ borderBottom: "2px dotted black" }}>Update academic year Information</h2>
        <form onSubmit={updateacademicyear}>
        
  <div>
    <select
      className="user_box_input"
      placeholder="update year"
      type="text"
      value={academicyear2}
      onChange={(event) => setAcademicyear2(event.target.value)}
    >
      <option value="">previous year</option>
      <option value="2022-23">2022-23</option>
      <option value="2023-24">2023-24</option>
      <option value="2024-25">2024-25</option>
    </select>
    <select
      className="user_box_input"
      placeholder="update year"
      type="text"
      value={academicyear3}
      onChange={(event) => setAcademicyear3(event.target.value)}
    >
      <option value="">present year</option>
      <option value="2023-24">2023-24</option>
      <option value="2024-25">2024-25</option>
      <option value="2025-26">2025-26</option>
      <option value="2026-27">2026-27</option>
    </select>
  </div>




         {year2<=year3 &&( <button className="login_box_button" type="submit">Update</button>)}
         {year2 > year3 && (
  <div>
    <p>present year cannot be less than previous year</p>
  </div>
)}

        </form>
      </div>
      ):null}



    </div>

  );
}

export default AddStudent;
