import React from 'react'

const Portfolio = (props) => {
  return (
    <div id='portfolio'>
      <h1 className="sectionTitle">Portfolio</h1>
      <div className='projects'>
        {
          props.projects.map((single, key) =>
            <div className="projSingle" key={key}>
              <img
                src={single.pic}
                id="projPic"
              />
              <div id="dropdown-content-proj">
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

export default Portfolio