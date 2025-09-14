import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'

const MyWork = () => {
  return (
    <div id="work" className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div className="mywork-card" key={index}>
            <a href={work.link} target='_blank' rel="noreferrer">
              <img src={work.w_img} alt={work.title} />
              <h2>{work.title}</h2>
            <p>{work.desc}</p>
            </a>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyWork
