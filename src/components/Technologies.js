import React from 'react'


const Technologies = (props) => {
  return (
    <div id="tech">
      <h1 className="sectionTitle">Technologies</h1>
      <div className='logos'>
        {
          props.tech.map((single, key) =>
            <div className="single" key={key}>
              <img
                src={single.pic}
                id="logo"
              />
              <div id="dropdown-content">
                <h5>{single.name}</h5>
                <p>{single.description}</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Technologies