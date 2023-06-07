import FAQs from '../../componentes/FAQs'
import Footer from '../../componentes/Footer'
import MainHeader from '../../componentes/MainHeader'
import Programs from '../../componentes/Programs'
import Testimonials from '../../componentes/Testimonials'
import Values from '../../componentes/Values'
import './home.css'

const home = () => {
  return (
    <>
    <MainHeader/>
    <Programs/>
    <Values/>
    <FAQs/>
    <Testimonials/>
    </>
  )
}

export default home