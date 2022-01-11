import React from 'react'

const Testimonials = () => {
  return (
    <>
      <section className='testimonials' id='testimonials'>
        <div className='title white-title'>
          <h2 className='titleText'>
            They<span>S</span>aid About Us
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='content'>
          <div className='box'>
            <div className='imgBx'>
              <img src='images/testi1.jpg' alt='testi1' />
            </div>
            <div className='text'>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci ut, totam omnis quas animi, corporis distinctio
                accusamus exercitationem, assumenda enim molestiae atque? Magnam
                doloribus, praesentium enim, non debitis
              </p>
              <h3>Alicia Jkarvi</h3>
            </div>
          </div>
          <div className='box'>
            <div className='imgBx'>
              <img src='images/testi2.jpg' alt='testi2' />
            </div>
            <div className='text'>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci ut, totam omnis quas animi, corporis distinctio
                accusamus exercitationem, assumenda enim molestiae atque? Magnam
                doloribus, praesentium enim, non debitis
              </p>
              <h3>doan joe</h3>
            </div>
          </div>
          <div className='box'>
            <div className='imgBx'>
              <img src='images/testi3.jpg' alt='testi3' />
            </div>
            <div className='text'>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci ut, totam omnis quas animi, corporis distinctio
                accusamus exercitationem, assumenda enim molestiae atque? Magnam
                doloribus, praesentium enim, non debitis
              </p>
              <h3>Fava duglori</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
