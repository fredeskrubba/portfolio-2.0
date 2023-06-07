import React from 'react'

const Skill = ({name, Logo}) => {
  return (
    <div className='skill'>
        {Logo}
        <h3>{name}</h3>
    </div>
  )
}

export default Skill