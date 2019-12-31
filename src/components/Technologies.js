import React from 'react'


const Technologies = (props) => {
  return (
    <div>
      <h1 className="sectionTitle">Technologies</h1>
      <div className='logos'>
        {
          props.tech.map((single, key) =>
            <div className="single" key={key}>
              <img
                src={single.pic}
                id="logo"
              />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Technologies