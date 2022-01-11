import React from 'react'

const KitchenExpert = () => {
  return (
    <>
      <section className='expert' id='expert'>
        <div className='title'>
          <h2 className='titleText'>
            Our <span>E</span>xpert Team
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            .
          </p>
        </div>
        <div className='content'>
          <div className='box'>
            <div className='imgBx'>
              <img src='images/expert1.jpg' alt='expert1' />
            </div>
            <div className='text'>
              <h3>vik Senior</h3>
            </div>
          </div>
          <div className='box'>
            <div className='imgBx'>
              <img src='images/expert2.jpg' alt='expert2' />
            </div>
            <div className='text'>
              <h3>Tasha Kothadi</h3>
            </div>
          </div>
          <div className='box'>
            <div className='imgBx'>
              <img src='images/expert3.jpg' alt='expert3' />
            </div>
            <div className='text'>
              <h3>hanna hujki</h3>
            </div>
          </div>
          <div className='box'>
            <div className='imgBx'>
              <img src='images/expert4.jpg' alt='expert4' />
            </div>
            <div className='text'>
              <h3>Barseem Pathe</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default KitchenExpert
