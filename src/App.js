import React, { useLayoutEffect, useRef } from 'react';
import './App.css';
function App() {

  const redQueen_alice_sprite = useRef(null);
  const foreground = useRef(null);
  const background = useRef(null);
  const foregroundd = useRef(null);
  const backgroundd = useRef(null);

  useLayoutEffect(() => {
    // Scenery
    var sceneryFrames = [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' }
    ];

    var sceneryTimingBackground = {
      duration: 36000,
      iterations: Infinity
    };

    var sceneryTimingForeground = {
      duration: 12000,
      iterations: Infinity
    };
    var backgroundMovement = background.current.animate(
      sceneryFrames, sceneryTimingBackground);
    backgroundMovement = backgroundMovement;

    // var backgroundMovementt = backgroundd.current.animate(sceneryFrames, sceneryTimingBackground);

    var foregroundMovement = foreground.current.animate(
      sceneryFrames, sceneryTimingForeground);
    foregroundMovement = foregroundMovement;

    var foregroundMovementt = foregroundd.current.animate(
      sceneryFrames, sceneryTimingForeground);

    // Alice
    var spriteFrames = [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-100%)' }
    ];

    var redQueen_alice = redQueen_alice_sprite.current.animate(
      spriteFrames, {
      easing: 'steps(7, end)',
      direction: "reverse",
      duration: 500,
      playbackRate: 1,
      iterations: Infinity
    });

    setInterval(function () {
      if (redQueen_alice.playbackRate > .4) {
        redQueen_alice.playbackRate -= .1;
        adjustSceneryPlayback();
      }
    }, 3000);
    var sceneries = [foregroundMovement, backgroundMovement];
    // var sceneries = [foregroundMovement, backgroundMovement,foregroundMovementt,backgroundMovementt];

    var adjustSceneryPlayback = function () {
      console.log(redQueen_alice.playbackRate)
      if (redQueen_alice.playbackRate < .8) {
        sceneries.forEach(function (anim) {
          anim.playbackRate = redQueen_alice.playbackRate / 2 * -1;
        });
      } else if (redQueen_alice.playbackRate > 1.2) {
        sceneries.forEach(function (anim) {
          anim.playbackRate = redQueen_alice.playbackRate / 2;
        });
      } else {
        sceneries.forEach(function (anim) {
          anim.playbackRate = 0;
        });
      }
    }
    adjustSceneryPlayback();

    const goFaster = () => {
      redQueen_alice.playbackRate += 0.1;
      adjustSceneryPlayback();
    }


    // var sceneriess = [foregroundMovementt, backgroundMovementt];
    // // var sceneries = [foregroundMovement, backgroundMovement,foregroundMovementt,backgroundMovementt];

    // var adjustSceneryPlaybackk = function () {
    //   console.log(alice.playbackRate)
    //   if (alice.playbackRate < .8) {
    //     sceneriess.forEach(function (anim) {
    //       anim.playbackRate = alice.playbackRate / 2 * -1;
    //     });
    //   } else if (alice.playbackRate > 1.2) {
    //     sceneriess.forEach(function (anim) {
    //       anim.playbackRate = alice.playbackRate / 2;
    //     });
    //   } else {
    //     sceneriess.forEach(function (anim) {
    //       anim.playbackRate = 0;
    //     });
    //   }
    // }
    // adjustSceneryPlaybackk();

    // const goFasterr = () => {
    //   alice.playbackRate += 0.1;
    //   adjustSceneryPlaybackk();
    // }

    window.addEventListener("click", goFaster);
    window.addEventListener("touchstart", goFaster);
  })



  return (
    <div className="wrapper">
      <div className="sky"></div>

      <div className="earth">
        <div className="red-queen_and_alice">
          <img className="redQueen_alice_Sprite" ref={redQueen_alice_sprite} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" alt=" " />

        </div>
      </div>>

      <div className="scenery" id="foreground1" ref={foreground}>
        <img className="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" alt=" " />
       
      </div>

      <div className="scenery" id="foreground1" ref={foregroundd}>
      <img className="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" alt=" " />
       
        
        <img className="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" alt=" " />
      </div>
      
      
      
      <div className="scenery" id="background1" ref={background}>
       
        <img className="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" alt=" " />
        <img className="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" alt=" " />
        <img className="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" alt=" " />
     </div>
      
      
      
      <div className="scenery" id="background2" ref={backgroundd}>
      <img className="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" alt=" " />
      
        <img className="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" alt=" " />
        <img className="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" alt=" " />
       




      </div>


      {/* <div className="scenery background1" ref={background}>
        <img className="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" alt=" " />
        <img className="pawn2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" alt=" " />
        <img className="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" alt=" " />
        <img className="knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" alt=" " />
        <img className="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" alt=" " />
      </div> */}
    </div>
  );
}

export default App;