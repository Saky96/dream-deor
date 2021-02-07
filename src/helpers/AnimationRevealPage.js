import React from 'react';
import tw from 'twin.macro';

/* framer-motion and useInView here are used to animate the sections in when we reach them in the viewport
 */
import { motion } from 'framer-motion';
// import useInView from 'use-in-view';
import { useInView } from 'react-intersection-observer';

const StyledDiv = tw.div`font-display min-h-screen text-secondary-500 p-8 overflow-hidden`;
function AnimationReveal({ disabled, children }) {
  if (disabled) {
    return <>{children}</>;
  }

  if (!Array.isArray(children)) children = [children];

  const directions = ['left', 'right'];
  const childrenWithAnimation = children.map((child, i) => {
    return (
      <AnimatedSlideInComponent
        key={i}
        direction={directions[i % directions.length]}
      >
        {child}
      </AnimatedSlideInComponent>
    );
  });
  return <>{childrenWithAnimation}</>;
}

function AnimatedSlideInComponent({
  direction = 'left',
  offset = 30,
  children,
}) {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  console.log('inView: ', inView);
  // console.log('children: ', children);
  // console.log('entry: ', entry);

  const x = { target: '0%' };

  if (direction === 'left') x.initial = '-150%';
  else x.initial = '150%';

  return (
    <div ref={ref}>
      <motion.section
        initial={{ x: x.initial }}
        animate={{
          x: inView && x.target,
          transitionEnd: {
            x: inView && 0,
          },
        }}
        transition={{ type: 'spring', damping: 20 }}
        // ref={ref}
      >
        {children}
      </motion.section>
    </div>
  );
  // return <div ref={ref}>{children}</div>;
}

export default (props) => (
  <StyledDiv className='App'>
    <AnimationReveal {...props} />
  </StyledDiv>
);
