import React, { useState } from 'react';
import lemon from '../Assets/Images/sym_lemon.png'
import orange from '../Assets/Images/sym_orange.png'
import plum from '../Assets/Images/sym_plum.png'
import background from '../Assets/Images/Background.png'
import framebackground from '../Assets/Images/frame.png'
import gsap from 'gsap'

const symbols = [
  {id: 0, img: lemon},
  {id: 1, img: orange},
  {id: 2, img: plum}
];

const SlotMachine = () => { 
  const [reels, setReels] = useState([
    [0, 1, 2],
    [0, 1, 2],
    [0, 1, 2]
  ]);
  const [backgroundImage, setBackgroundImage] = useState(background);

  const handleSpin = () => {
    const newReels = Array.from({ length: 3 }, () => {
      return Array.from({ length: 3 }, () => Math.floor(Math.random() * symbols.length));
    });
  
    const isWin = newReels.some((column, columnIndex) => {
      const row = newReels.map(row => row[columnIndex]);
      return row.every(symbol => symbol === column[0]);
    });
    setReels([]);

    if (isWin) {
      document.getElementById("winningText").innerHTML =
        "Congratulations, you win!";
    } else {
      document.getElementById("winningText").innerHTML = "Try again!";
    }
      setTimeout(() => {
        setReels(newReels);
      }, 0);

    };
    return(
      <main className='relative h-screen bg-center bg-no-repeat mx-40 py-20' style={{ backgroundImage: `url(${backgroundImage})`,  backgroundSize:'cover'}}>
        <div className='flex justify-center content-center' id='winningText'></div>
        <div className='flex justify-center content-center mt-2'>
          <div className='bg-no-repeat bg-center  h-max' style={{backgroundImage:`url(${framebackground})`, backgroundSize:'cover'}}>
        <div className='grid grid-cols-3 overflow-hidden'>
        {reels.map((reel, index) => (
          <div key={index} className={`flex-col w-44 h-max`} >
            {reel.map((symbolIndex) => (
              <img key={symbolIndex} 
                   src={symbols[symbolIndex].img}   
                   alt={`Symbol ${symbolIndex}`} 
                   className='w-36 m-auto'/>
            ))}
          </div>
            ))}
            </div>
            </div>
            </div>
            <div className='flex justify-center content-center' >
            <button onClick={handleSpin}>Spin</button>
            </div>
            </main>
    )
};
export default SlotMachine;
