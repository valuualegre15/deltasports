import Header from '../../componentes/Header'
import HeaderImage from '../../img/victor-freitas-WvDYdXDzkhs-unsplash.jpg'
import StoryImage from '../../img/sunday-ii-sunday-skTyO8e1Cro-unsplash.jpg'
import VisionImage from '../../img/avatar2.jpg'
import MissionImage from '../../img/nelka-sGIp9xdj7kA-unsplash.jpg'
import './about.css'

const About = () => {
  return (
      <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque earum, eligendi dignissimos dolor, maxime nihil quasi atque animi aliquam mollitia porro enim voluptas similique consequuntur et eaque, commodi inventore est?
      </Header>

      <section className="about__story">
    <div className="container about__story-container">
       <div className="about__section-content">
        <h1> Our Story </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dignissimos, asperiores ex laboriosam iure dolorem a debitis fugiat? Quo eius aliquam consectetur similique deleniti, alias reprehenderit iure placeat et consequatur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore minima optio alias fuga quos, omnis incidunt ratione ex expedita.</p>
       </div>
       <div className="about__section-image">
          <img src={StoryImage} alt="Our Story Image" />
       </div>
      </div>
      </section>

      <section className="about__Vision">
    <div className="container about__vision-container">
       <div className="about__section-image"> 
         <img src={VisionImage} alt="Our Vision Image" />
       </div>
       <div className="about__section-content">
        <h1> Our Vision </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dignissimos, asperiores ex laboriosam iure dolorem a debitis fugiat? Quo eius aliquam consectetur similique deleniti, alias reprehenderit iure placeat et consequatur.</p>
       
       </div>
      </div>
      </section>

      <section className="about__mission">
    <div className="container about__mission-container">
       <div className="about__section-content">
        <h1> Our Mission </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dignissimos, asperiores ex laboriosam iure dolorem a debitis fugiat? Quo eius aliquam consectetur similique deleniti, alias reprehenderit iure placeat et consequatur.</p>
       </div>
       <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission Image" />
       </div>
      </div>
      </section>

     </>
  )
}

export default About