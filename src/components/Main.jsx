import '../assets/css/Main.css'

import macetas from '../assets/img/macetas/copia-de-caratula-plantas-121-0fa58bf45153a3150115955994499593-1024-1024.png'
import planta from '../assets/img/plantas/alegria-del-hogar1-580692fbe16b139ecd15743419618779-1024-1024.png'
import cesped from '../assets/img/cesped/estrella-federal-41-e816e5128d796caff616509756123299-1024-1024.png'

import Slider from './Slider'

const Main = () => {
  return (
    <main className='main'>
      <Slider />
      <section className='main__info'>
        <div className='main__infocont'>
          <h3 className='main__title'>Somos <span className='main__name'>Ecobella</span></h3>
          <p className='main__text'>
            <img src={macetas} alt="macetas" className='main__infoimg' />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vel debitis eum nemo, molestias numquam nihil obcaecati provident quaerat. Nulla!
          </p>
        </div>
      </section>
      <section className='main__img'>
        <span className='main__filter'>
          <article className="main__card">
            <div className="main__imgcont">
              <img src={planta} alt="" />
            </div>
            <div className="main__cardtext">
              <h3>Plantas</h3>
            </div>
          </article>
          <article className="main__card">
            <div className="main__cardtext">
              <h3>Macetas</h3>
            </div>
            <div className="main__imgcont">
              <img src={macetas} alt="" />
            </div>
          </article>
          <article className="main__card">
            <div className="main__imgcont">
              <img src={cesped} alt="" />
            </div>
            <div className="main__cardtext">
              <h3>Cesped</h3>
            </div>
          </article>
        </span>
      </section>
    </main>
  )
}

export default Main
