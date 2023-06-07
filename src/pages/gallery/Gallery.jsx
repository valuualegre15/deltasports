
import Header from '../../componentes/Header'
import HeaderImage from '../../img/avatar6.jpg'
import './gallery.css'

const gallery = () => {
  const galleryLength = 15;
  const images = []

  for(let i = 1; i <= galleryLength; i++){
    images.push(require(`../../img/gallery${i}.jpg`))
  }



  return (
    <>
    <Header title="Our Gallery" image={HeaderImage}>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi laborum fuga ipsa voluptatum consectetur velit. Provident aliquam quaerat quibusdam totam unde, eos quasi deleniti libero magnam maiores, quam voluptatum.
    </Header>
    <section className="gallery">
      <div className="container gallery__container">
       {
        images.map((image, index) => {
          return <article key={index}>
            <img src={image} alt={`Gallery Image ${index + 1}`} />
          </article>
        })
       }
      </div>

    </section>
    </>
  )
}

export default gallery