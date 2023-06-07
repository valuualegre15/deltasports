import Header from '../../componentes/Header'
import HeaderImage from '../../img/avatar4.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

import './contact.css'

const contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem culpa esse veniam libero rerum, neque harum quo. In vero cupiditate modi tempore, quia tempora aperiam, odio facilis odit doloribus libero.
    </Header>
    <section className="contact">
     <div className="container contact__container">
      <div className="contact__wrapper">
          <a href="mailto:valuualegre15@icloud.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="http://m.me/ernest_achiever" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
          <a href="htpps://wa.me/+59892993566" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
      </div>
     </div>
    </section>
    </>
  )
}

export default contact