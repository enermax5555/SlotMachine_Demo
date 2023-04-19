import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import lemon from '../Assets/Images/sym_lemon.png'
import orange from '../Assets/Images/sym_orange.png'
import plum from '../Assets/Images/sym_plum.png'
import spritesheet from "../Assets/Images/sym_anim.png";
import spritesheetData from "../Assets/Images/sym_anim.json";
function getRandomElement() {
  const items = [   
  <img src={lemon} alt="lemon"/>,
  <img src={orange} alt="orange"/>,
  <img src={plum} alt="plum" />,
  ];
  const randomElement = items[Math.floor(Math.random() * items.length)];
  return randomElement;
  }
  function generateNewReels() {
      const newReels = [];
      for (let i = 0; i < 3; i++) {
      const reel1 = getRandomElement();
      const reel2 = getRandomElement();
      const reel3 = getRandomElement();
      newReels.push({ reel1, reel2, reel3});
      }
      return newReels;
  }
function NewSlotMachine() {
  const sprites = useRef([]);
  const timelines = useRef({});
  const [reels, setReels] = useState([]);
  useEffect(() => {
    setReels(generateNewReels())
    }, []);
  // useEffect(() => {
    const image = new Image();
    image.src = spritesheet;

    image.onload = () => {
      const frames = spritesheetData.frames;

      const imageNames = {
        lemon: [
            "sym_lemon_002",
            "sym_lemon_003",
            "sym_lemon_004",
            "sym_lemon_005",
            "sym_lemon_006",
            "sym_lemon_007",
            "sym_lemon_008",
            "sym_lemon_009",
            "sym_lemon_010",
            "sym_lemon_011",
            "sym_lemon_012",
            "sym_lemon_013",

            ],
        
        orange: [
            "sym_orange_002",
            "sym_orange_003",
            "sym_orange_004",
            "sym_orange_005",
            "sym_orange_006",
            "sym_orange_007",
            "sym_orange_008",
            "sym_orange_009",
            "sym_orange_010",
            "sym_orange_011",
            "sym_orange_012",
            "sym_orange_013",
            ],
        plum: [
            "sym_plum_002",
            "sym_plum_003",
            "sym_plum_004",
            "sym_plum_005",
            "sym_plum_006",
            "sym_plum_007",
            "sym_plum_008",
            "sym_plum_009",
            "sym_plum_010",
            "sym_plum_011",
            "sym_plum_012",
            "sym_plum_013",
            ],

      };
      Object.keys(imageNames).forEach((key) => {
        const timeline = gsap.timeline({ repeat: -1 });
        imageNames[key].forEach((imageName, i) => {

          for(let k = 0; k < 3; k++){
          const frame = frames[imageName];
          const x = frame.frame.x;
          const y = frame.frame.y;
          const width = frame.frame.w;
          const height = frame.frame.h;
          const sprite = document.createElement("div");
          sprite.style.position = "absolute";
          sprite.style.width = width + "px";
          sprite.style.height = height + "px";
          sprite.style.backgroundImage = `url(${spritesheet})`;
          sprite.style.backgroundPosition = `-${x}px -${y}px`;
          sprite.style.opacity = 0;
          // sprites.current.push(sprite);
          document.body.appendChild(sprite);
          timeline.to(sprite, {
            duration: 0.2,
            opacity: 1,
            ease: "none",
          }, i * 0.1);
          timeline.to(sprite, {
            duration: 0.02,
            opacity: 0,
            ease: "none",
          });
        }
        });
        timelines.current[key] = timeline;
      });
    };
  // }, []);
  return (
    <main>
      
    </main>
  );
}
export default NewSlotMachine;
    //      function winOrLose() {
    //     const reel1 = document.querySelectorAll(".reel1");
    //     const reel2 = document.querySelectorAll(".reel2");
    //     const reel3 = document.querySelectorAll(".reel3");
      
    //     const winningCombinations = [
    //       [reel1[0], reel2[0], reel3[0]],
    //       [reel1[1], reel2[1], reel3[1]],
    //       [reel1[2], reel2[2], reel3[2]],
    //     ];
      
    //     for (let i = 0; i < winningCombinations.length; i++) {
    //       const [r1, r2, r3] = winningCombinations[i];
    //       if (
    //         r1.innerHTML === r2.innerHTML &&
    //         r2.innerHTML === r3.innerHTML
    //       ) {
    //         return true;
    //       }
    //     }
      
    //     return false;
    //   }
    // function winningAnimation(winningCombinations) {
    //   const image = new Image();
    //   image.src = spritesheet;
    //   image.onload = () => {
    //     const frames = spritesheetData.frames;
    
    //     const imageNames = {
    //       lemon: ["sym_lemon_002"],
    //       orange: ["sym_orange_002"],
    //       plum: ["sym_plum_002"],
    //     };
    
    //     const animations = [];
    
    //     winningCombinations.forEach((combo) => {
    //       const timeline = gsap.timeline({ repeat: -1 });
    //       const spritesInCombo = [];
    //       combo.winningElement.split(",").forEach((element, index) => {
    //         if (!imageNames[element]) {
    //           return;
    //         }
    //         imageNames[element].forEach((imageName) => {
    //           const frame = frames[imageName];
    //           const x = frame.frame.x;
    //           const y = frame.frame.y;
    //           const width = frame.frame.w;
    //           const height = frame.frame.h;
    //           const sprite = document.createElement("div");
    //           sprite.style.position = "fixed";
    //           sprite.style.width = width + "px";
    //           sprite.style.height = height + "px";
    //           sprite.style.backgroundImage = `url(${spritesheet})`;
    //           sprite.style.backgroundPosition = `-${x + 10}px -${y + 10}px`;
    //           sprite.style.opacity = 0;
    //           sprite.style.left = '0';
    //           const reelElement = document.getElementById(`reel-${combo.reelRow}`);
    //           if (reelElement) {
    //             for (let i = 0; i < combo.coppies; i++) {
    //               const spriteClone = sprite.cloneNode(true);
    //               reelElement.appendChild(spriteClone);
    //               spritesInCombo.push(spriteClone);
    //               timeline.to(spriteClone, {
    //                 duration: 0.2,
    //                 opacity: 1,
    //                 ease: "power2.inOut",
    //                 delay: index * 0.1,
    //               });
    //             }
    //           } else {
    //             console.error(`Element with ID 'reel-${combo.reelRow}' not found`);
    //           }
    //         });
    //       });
    //       animations.push(timeline);
    
    //       timelines.current[combo.reelRow] = timeline;
    //       sprites.current.push(...spritesInCombo);
    //     });
    
    //     gsap
    //       .timeline()
    //       .to(animations, { duration: 2, progress: 3 })
    //       .eventCallback("onComplete", () => {
    //         animations.forEach((timeline) => timeline.kill());
    //         //   sprites.current.forEach((sprite) => sprite.parentNode.removeChild(sprite));
    //         sprites.current = [];
    //         Object.values(timelines.current).forEach((timeline) => timeline.restart());
    //         setIsWin(false);
    //       });
    //   };
    // }