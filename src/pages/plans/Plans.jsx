import Header from '../../componentes/Header'
import HeaderImage from '../../img/avatar6.jpg'
import Card from '../../UI/Card'
import {plans} from '../../data'
import './plans.css'



const Plans = () => {
  return (
    <>
    <Header title="Membership Plans" image={HeaderImage}>
    
    </Header>
    <section className="plans">
     <div className="container plans__container">
    {
      plans.map(({id, name, desc, price, features}) => {
        return <Card key={id} className='plan'>
          <h3>{name}</h3>
          <small>{desc}</small>
          <h1>{`$${price}`}</h1><h2>/mo</h2>
          <h4>Features</h4>
          {
            features.map(({feature, available}, index) => {
              return <p key={index} className={!available ? 'disabled' : ''}>
                {feature}</p>
            })
          }
        </Card>
      })
    }
     </div>
    </section>
    </>
  )
}

export default plans