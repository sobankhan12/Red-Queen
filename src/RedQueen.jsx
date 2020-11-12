import React,{useRef,useEffect} from 'react'
// import useWebAnimations from "@wellyshen/use-web-animations";
import "./myStyle.css";

const RedQueen= () => {
    const alice_queen=useRef(null);
    const foreground1=useRef(null);
    const foreground2=useRef(null);
    const background1=useRef(null);
    const background2=useRef(null);
    
    useEffect(() => {
        var spriteFrames = [
            { transform: 'translateY(0)' },
            { transform: 'translateY(-100%)' }   
          ];
        var alice=alice_queen.current.animate(
            spriteFrames, {
                easing: 'steps(7, end)',
                direction: "reverse",
                duration: 600,
                playbackRate: 1,
                iterations: Infinity
              })

              var sceneryFrames =   [
                { transform: 'translateX(100%)' },
                { transform: 'translateX(-100%)' }   
              ];
              
              var sceneryTimingBackground = {
                duration: 36000,
                iterations: Infinity,
                playbackRate: 1,
              };
              
              var sceneryTimingForeground = {
                duration: 12000,
                iterations: Infinity,
                playbackRate: 1,
              };
              
              var background1Movement = background1.current.animate(
              sceneryFrames, sceneryTimingBackground);
              
              var background2Movement = background2.current.animate(
                sceneryFrames, sceneryTimingBackground);

              var foreground1Movement = foreground1.current.animate(
              sceneryFrames, sceneryTimingForeground);
              
              var foreground2Movement = foreground2.current.animate(
                sceneryFrames, sceneryTimingForeground);
                setInterval( function() {
                
                    if (alice.playbackRate > .4) {
                      alice.playbackRate *= .9;    
                    // } 
                    // if (alice.playbackRate > 1) {
                    //   alice.playbackRate += 1;
                      foreground1Movement.playbackRate+=1;    
                      foreground2Movement.playbackRate+=1;    
                      background1Movement.playbackRate+=1;    
                      background2Movement.playbackRate+=1;   
                      console.log(background1Movement.playbackRate); 
                    
                    }
                    adjustBackgroundPlayback();
                  }, 1000);


            var sceneries = [foreground1Movement,foreground2Movement, background1Movement,background2Movement];
            var adjustBackgroundPlayback = function() {
                if (alice.playbackRate < .8) {
                  sceneries.forEach(function(anim) {
                    anim.playbackRate = alice.playbackRate/2 * -1;
                  });
                } else if (alice.playbackRate > 1.2) {
                  sceneries.forEach(function(anim) {
                    anim.playbackRate = alice.playbackRate/2;
                  });
                } else {
                  sceneries.forEach(function(anim) {
                    anim.playbackRate = 0;    
                  });
                }   
              }
              adjustBackgroundPlayback();
              var goFaster = function() {
        
                alice.playbackRate *= 1.1;
                adjustBackgroundPlayback();
              }
              window.addEventListener("click", goFaster);
            

          
    })
  return (
<div className="wrapper">
  <div className="sky"></div>
  <div className="earth">
    <div id="red-queen_and_alice">
      <img ref={alice_queen} id="red-queen_and_alice_sprite" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"  alt="Alice and the Red Queen running to stay in place."/>
    </div>
  </div>

  <div className="scenery" id="foreground1" ref={foreground1}>
    <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" "/>
  </div>
  <div className="scenery" id="foreground2" ref={foreground2}>    
    <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" "/>
    <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" "/>
  </div>
  <div className="scenery" id="background1" ref={background1}>
    <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" "/>
    <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" "/>
    <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" "/>
  </div>
  <div className="scenery" id="background2" ref={background2}>
    <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" "/>

    <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" "/>
    <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" "/>
  </div>
</div>
  )
}

export default RedQueen

