import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Use</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Figma</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Adobe Photoshop</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Adobe Illustrator</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Adobe XD</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Sketch</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Balsamiq</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>InVision Studio</p>
            </li>

          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Visual Studio Code</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Sublime Text</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>CLion</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>IntelliJ IDEA</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>MAMP</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Postman</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Firebase</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}

      </div>
    </section>
  )
}

export default Services