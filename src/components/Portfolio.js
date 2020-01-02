import React from 'react'

const Portfolio = (props) => {
  return (
    <div>
      <h1 className="sectionTitle">Portfolio</h1>
      <div className='logos'>
        {
          props.projects.map((single, key) =>
            <div className="single" key={key}>
              <img
                src={single.pic}
                id="portPic"
              />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Portfolio