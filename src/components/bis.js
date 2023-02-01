// mise en place du Footer
import React from 'react';
import { Slide } from 'react-slideshow-image';
import Datas from '../data/data.json';
// import Image from 'adresse/image.jpg';

const proprietes = {
  transitionDuration: 500,
  infinite: true,
  arrows: true,
};

const Slideshow = () => {
  return (
    <div className="containerSlide">
      <Slide {...proprietes}>
        {Datas.filter(
          (data) =>
            data.id ===
            window.location.href
              .split('http://localhost:3000/Logement/')
              .join('')
        ).map((data) => {
          console.log(data.pictures[0]);
          return (
            <div className="eachSlide">
              <div>
                <img src={data.pictures[0]} alt="" />;
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default Slideshow;

/* `/Logement/${data.id}` 

$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
console.log(data.pictures);
          data.id === window.location.href.split('http://localhost:3000/Logement/').join('')
            ? console.log('no')
            : return;
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        {Datas.map((data) => {
          if (
            data.id ===
            window.location.href
              .split('http://localhost:3000/Logement/')
              .join('')
          ) {
            return (
              <div className="eachSlide">
                <div>
                  <img src={Image} alt="" />;
                </div>
              </div>
            );
          }
          return null;
        })}



*/
