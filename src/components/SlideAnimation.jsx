import React, { useEffect } from "react";

const SlideAnimation = ({ direction }) => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      `.slide-animation${direction === "left" ? "" : "2"}`
    );

    elements.forEach((element) => {
      const containerWidth = element.offsetWidth;
      const contentWidth = element.scrollWidth;

      let distance = 0;

      const scroll = () => {
        if (direction === "left") {
          distance += 1;
          if (distance >= contentWidth) {
            distance = 0;
          }
        } else {
          distance -= 1;
          if (distance <= -contentWidth) {
            distance = 0;
          }
        }

        element.style.transform = `translateX(${distance}px)`;

        requestAnimationFrame(scroll);
      };

      scroll();
    });

    return () => {
      // Clean up function if needed
    };
  }, [direction]);

  return null; // Since this component is purely for side effects, it doesn't render anything
};

export default SlideAnimation;
