import React, { useEffect, useState } from 'react'
 import Wrapper from './style'

import { useNavigate } from 'react-router'
import { services } from '../../services'

const FacultyLogin = () => {

    const [loading,setLoading]= useState(false)

  

  const [sections, setSections] = useState([])
  const [filteredSections, setFilteredSections] = useState(sections)

  const navigate = useNavigate()

 

  useEffect(() => {
    setLoading(true)
    services.getSections()
    .then(res => {
      setSections(res.data)
      setFilteredSections(res.data)
      navigate("/faculty-login")
      
    }).finally(()=>{
        setLoading(false)
    })
  },[])

 


  

  const filter = (e) => {
    setFilteredSections([...sections].filter(section => section.name.toLowerCase().startsWith(e.target.value.toLowerCase())))
  }

  const gotoSheet = (section) => {
    navigate(`/attendanceSheet?sectionId=${section.id}`)
  }

  
    const handleLogout = ()=> {
        window.location = '/'
    }
  return (
    <Wrapper>
      <div className="inner">
        <a style={{right: 0}} href="#logout" onClick={handleLogout}>Logout</a>
      <input
        type="search"
        placeholder='Filter the sections here ...'
        onChange={filter}
      />

      <div className="sections">
      {
        filteredSections.map(section => <input type="button" key={section.id} className='section' value={section.name} onClick={e => gotoSheet(section)} />)
      }
      </div>
      </div>
    </Wrapper>
  )
}

export default FacultyLogin
