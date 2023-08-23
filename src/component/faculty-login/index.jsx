import React, { useEffect, useState } from 'react'
 import Wrapper from './style'
import { batch } from '../batch'
import { useNavigate } from 'react-router'

const Faculty = () => {

  const [sections, setSections] = useState([])
  const [filteredSections, setFilteredSections] = useState(sections)

  const navigate = useNavigate()

  navigate("/faculty-login")

  useEffect(() => {
    batch.getSections()
    .then(res => {
      setSections(res.data)
      setFilteredSections(res.data)
    })
  },[])

  const filter = (e) => {
    setFilteredSections([...sections].filter(section => section.name.toLowerCase().startsWith(e.target.value.toLowerCase())))
  }

  const gotoSheet = (section) => {
    navigate(`/attendanceSheet?sectionId=${section.id}`)
  }

  return (
    <Wrapper>
      <div className="inner">

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

export default Faculty
