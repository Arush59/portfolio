import React, { useState, useEffect, useCallback } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useSpring(0, { stiffness: 1000, damping: 50 });
  const cursorY = useSpring(0, { stiffness: 1000, damping: 50 });
  const followerX = useSpring(0, { stiffness: 200, damping: 30 });
  const followerY = useSpring(0, { stiffness: 200, damping: 30 });

  const handleMouseMove = useCallback((e) => {
    setIsVisible(true);
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    followerX.set(e.clientX);
    followerY.set(e.clientY);
  }, [cursorX, cursorY, followerX, followerY]);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    // Check for touch device
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();

    if (isTouchDevice) return;

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Detect hoverable elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, .skill-card, .terminal-btn, .terminal-btn-primary');
      setIsHovering(!!isInteractive);
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [handleMouseMove, handleMouseLeave, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Dot cursor */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: cursorX,
          y: cursorY,
          width: isHovering ? '6px' : '5px',
          height: isHovering ? '6px' : '5px',
          borderRadius: '50%',
          backgroundColor: '#00FF9C',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.2s, height 0.2s, opacity 0.15s',
        }}
      />
      {/* Follower ring */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: followerX,
          y: followerY,
          width: isHovering ? '48px' : '32px',
          height: isHovering ? '48px' : '32px',
          borderRadius: '50%',
          border: `1.5px solid ${isHovering ? 'rgba(0, 255, 156, 0.6)' : 'rgba(0, 255, 156, 0.3)'}`,
          backgroundColor: isHovering ? 'rgba(0, 255, 156, 0.06)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 99998,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.3s, height 0.3s, border-color 0.3s, background-color 0.3s, opacity 0.15s',
        }}
      />
    </>
  );
};

export default CustomCursor;
