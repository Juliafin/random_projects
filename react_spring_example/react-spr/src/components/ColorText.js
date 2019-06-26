import React from 'react';
import { Spring, config, animated, interpolate } from 'react-spring/renderprops';


const ColorText = () => {
  const divStyles = {
    position: "absolute",
    height: "400px",
    width: "400px",
    border: "1px solid black"
  };
  return (
    
    <Spring
      from={{left: -50, r: 145, g: 5, b: 228}}
      to={{left: 50, r: 25, g: 200, b: 5 }}
      config={(key) => {
        console.log(key);
        if (key === 'r' || key === 'g' || key === 'b' ) {
          console.log('key is equal to ', key)
          return {
            duration: 6000, 
            easing: (t) => 1 - Math.cos(Math.PI * t) / 2};
        } else {
          return config.stiff;
        }
      }
      }
    >
      {({left, r, g, b}) => {
        return (
          <animated.div style={{...divStyles, 
            left, 
            color: `rgb(${r}, ${g}, ${b})`  
          }}>Hi r: {r.toFixed()} g: {g.toFixed()} b: {b.toFixed()}  
          </animated.div>
        );
      }

      }

    </Spring>
  );
};

export default ColorText;