import React, { useState, useEffect } from 'react'
import Student from './Student';

function Students() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [InputTag, setInputTag] = useState("");
  const [company, setCompany] = useState("")
  

  const getStudents = async () => {
      const res = await fetch("https://api.hatchways.io/assessment/students")
      const data = await res.json();
      let allData = [];
      data.students.map((student) => {
        student.listTags = [];
        allData.push(student);
      });
      setStudents(allData);
  }

  useEffect(() => {
      getStudents()
  },[])

  return (
    <div className='py-5'>
    
      {/* input for both names and tags */}
      <div className='px-2 md:px-5 flex flex-col items-center gap-3 w-full'>
        <input
          type='name'
          placeholder='Search by name' 
          className='border-b border-gray-300 w-full pb-3 outline-none hover:border-black hover:border-b'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="name"
          placeholder="Search by tag"
          className='border-b border-gray-300 w-full pb-3 outline-none hover:border-black hover:border-b'
          value={InputTag}
          onChange={(e) => setInputTag(e.target.value)}
        />

        <input
          type="name"
          placeholder="Search by company"
          className='border-b border-gray-300 w-full pb-3 outline-none hover:border-black hover:border-b'
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
        
      {/* all list of students */}
      {students
        .filter((student) => {
          if (student.firstName.concat(student.lastName).toLowerCase().includes(name.toLowerCase().trim())) {
            if (student.company.concat().toLowerCase().includes(company.toLowerCase().trim())) {
              if (InputTag === "") {
                return student;
              } else if (student.listTags.filter((tag) => tag.toLowerCase().includes(InputTag.toLowerCase().trim())).length >= 1) {
                return student;
              }
            }
          }
        }).map((student) => (
            <Student
              key={student.id}
              pic={student.pic}
              firstName={student.firstName}
              lastName={student.lastName}
              email={student.email}
              company={student.company}
              skill={student.skill}
              grades={student.grades}
              listTags={student.listTags}
            />
          )
        )
      }
    </div>
  )
}

export default Students;