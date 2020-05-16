import React from 'react';
import './App.scss';
import Header from './components/header';
import Slick from './components/slick'
import List from './components/list';
import Card from './components/card'
import Lists from './data'
import useOnScreen from './hook/useOnScreen'

function App() {
  const [ref, visible] = useOnScreen({threshold: 0.5})
  const [ref2, visible2] = useOnScreen({threshold: 0.2})
  return (
    <div className="App">
      <Header />
      <section className="home">
         <div className="slick-wrapper">
             <div className="slick">
                  <Slick />
             </div>
             <div className="slick-text">
               <span>
               Lorem ipsum dolor sit amet consectetur
               </span>
             </div>
         </div>
         <div className="scroll">
           <div className="line"></div>
         </div>
      </section>

      <section className={`sec-1 ${visible? 'visible1' : ''}`} ref={ref}>
         <div className="title">
           news
         </div>
         <div className='list'>
            <List />
            <div className='more'>
              <span>
                more
              </span>
            </div>
         </div>
      </section>

      <section className="sec-2">
         <div className="about">
             <div className='about-title'>about</div>
             <div className="about-content">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, numquam quos. Aspernatur labore sequi magni repellendus odio. Laboriosam quibusdam quod architecto maxime eveniet corporis. Incidunt deserunt excepturi, non quia reprehenderit autem illum quis voluptatum aliquam eligendi quasi odio sequi, alias tempora dolorem laboriosam consequatur! Maiores nobis qui excepturi consequatur, ipsum a sint similique voluptatum id molestiae, non animi amet ullam sequi! Eius saepe ut quas doloremque numquam, ab atque, odit at odio ad praesentium dignissimos facere, cupiditate soluta itaque. Magni provident eos distinctio necessitatibus quae hic accusantium nihil nemo expedita?
             </div>
             <div className={`about-img ${visible2? 'visible2' : ''}`} ref={ref2}>
               <img src='/image/8.jpg' alt='' />
             </div>
             <div className='more'>
              <span>
                more
              </span>
            </div>
         </div>

         <div className="repair">
           <div className="left">
             <div className="repair-title">
               repair
             </div>
             <div className="repair-content">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus adipisci dolor dicta error eaque doloremque eum. Voluptatem officia quae repudiandae in maxime aliquid, minus quasi laudantium sunt quis ipsum dicta?
             </div>
             <div className='more'>
              <span>
                more
              </span>
            </div>
           </div>
           <div className="right">
             <img src='/image/9.jpg' alt='' />
           </div>
         </div>
      </section>

      <section className='sec-3'>
         <div className="collection">
            <div className="title">collection</div>
            <div className="content">
               <p>
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis sapiente nostrum eaque nemo eum dolorem excepturi itaque animi ea explicabo?
               </p>
            </div>
         </div>

         <div className="card-list">
            {Lists.map((item, index) => (
              <Card url={item.url} name={item.name} key={index} />
            ))}
         </div>

         <div className="more">
           <span>
             more
           </span>
         </div>
      </section>

      <section className="sec-4">
         <div className='row-1'>
           <div className='col-1'>
           </div>
           <div className="col-2"></div>
         </div>
         <div className="row-2"></div>
      </section>

      <section className="footer">
        <div style={{marginRight: '20px'}}>
          Logo
        </div>
        <div>
          <svg t="1589616014203" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2383" width="32" height="32"><path d="M512 0C372.907 0 355.541 0.64 300.928 3.072 246.4 5.632 209.28 14.208 176.64 26.88c-33.664 13.056-62.25 30.592-90.71 59.05s-46.037 57.003-59.05 90.71C14.208 209.28 5.59 246.4 3.072 300.928 0.512 355.541 0 372.907 0 512s0.64 156.459 3.072 211.072c2.56 54.485 11.136 91.648 23.808 124.288a251.093 251.093 0 0 0 59.05 90.71 250.368 250.368 0 0 0 90.71 59.05c32.683 12.63 69.803 21.29 124.288 23.808 54.613 2.56 71.979 3.072 211.072 3.072s156.459-0.64 211.072-3.072c54.485-2.56 91.648-11.179 124.288-23.808a251.648 251.648 0 0 0 90.71-59.05 250.027 250.027 0 0 0 59.05-90.71c12.63-32.64 21.29-69.803 23.808-124.288 2.56-54.613 3.072-71.979 3.072-211.072s-0.64-156.459-3.072-211.072c-2.56-54.485-11.179-91.69-23.808-124.288a251.307 251.307 0 0 0-59.05-90.71 249.472 249.472 0 0 0-90.71-59.05C814.72 14.208 777.557 5.59 723.072 3.072 668.459 0.512 651.093 0 512 0z m0 92.16c136.661 0 152.96 0.683 206.933 3.03 49.92 2.346 77.014 10.623 95.019 17.706 23.979 9.259 40.96 20.352 58.965 38.23 17.878 17.92 28.971 34.943 38.23 58.922 6.997 18.005 15.36 45.099 17.621 95.019 2.432 54.016 2.987 70.229 2.987 206.933s-0.64 152.96-3.158 206.933c-2.602 49.92-10.922 77.014-17.962 95.019a162.56 162.56 0 0 1-38.358 58.965 159.744 159.744 0 0 1-58.88 38.23c-17.92 6.997-45.44 15.36-95.36 17.621-54.357 2.432-70.357 2.987-207.317 2.987-137.003 0-153.003-0.64-207.317-3.158-49.963-2.602-77.483-10.922-95.403-17.962a158.55 158.55 0 0 1-58.837-38.358 155.477 155.477 0 0 1-38.4-58.88c-7.04-17.92-15.318-45.44-17.92-95.36-1.92-53.76-2.603-70.357-2.603-206.677 0-136.363 0.683-153.003 2.603-207.403 2.602-49.92 10.88-77.397 17.92-95.317 8.96-24.32 20.437-40.96 38.4-58.923 17.877-17.877 34.56-29.397 58.837-38.314C225.92 104.32 252.843 96 302.763 93.44c54.4-1.92 70.4-2.56 207.317-2.56l1.92 1.28z m0 156.928a262.912 262.912 0 1 0 0 525.824 262.912 262.912 0 1 0 0-525.824z m0 433.579c-94.293 0-170.667-76.374-170.667-170.667S417.707 341.333 512 341.333 682.667 417.707 682.667 512 606.293 682.667 512 682.667zM846.763 238.72a61.483 61.483 0 0 1-122.88 0 61.44 61.44 0 0 1 122.88 0z" p-id="2384"></path></svg>
        </div>
      </section>
    </div>
  );
}

export default App;
