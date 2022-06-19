import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Personal portfolio web site(HTML, CSS, JS, Bootstrap)',
    github: 'https://github.com/litosh-developerua/anastasiya-galizkaya-resume',
    demo: 'https://litosh-developerua.github.io/anastasiya-galizkaya-resume/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Calculator(HTML, CSS, JS)',
    github: 'https://github.com/litosh-developerua/Calculator',
    demo: 'https://litosh-developerua.github.io/Calculator/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Movie app(HTML, CSS, JS, MongoDB)',
    github: 'https://github.com/litosh-developerua/movie_app',
    demo: 'https://litosh-developerua.github.io/movie_app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Responsive layout (HTML, CSS)',
    github: 'https://github.com/litosh-developerua/responsive_layout_car',
    demo: 'https://litosh-developerua.github.io/responsive_layout_car/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Amazon Clone (React, Firebase, git, Figma)',
    github: 'https://github.com/litosh-developerua/amazon-clone',
    demo: 'https://litosh-developerua.github.io/amazon-clone/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Paralax Scroll Effect(Adobe Illustrator, HTML, CSS, JS)',
    github: 'https://github.com/litosh-developerua/Parallax-Scroll-Effect',
    demo: 'https://litosh-developerua.github.io/Parallax-Scroll-Effect/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio