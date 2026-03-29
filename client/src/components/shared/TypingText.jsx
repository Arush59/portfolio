import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingText = ({
  lines = [],
  speed = 50,
  pauseBetweenLines = 400,
  prefix = '> ',
  showCursor = true,
  onComplete,
  style = {},
  className = '',
}) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      setIsComplete(true);
      onComplete?.();
      return;
    }

    const currentLine = lines[currentLineIndex];

    if (currentCharIndex <= currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          newLines[currentLineIndex] = currentLine.substring(0, currentCharIndex);
          return newLines;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, pauseBetweenLines);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex, lines, speed, pauseBetweenLines, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
      style={{
        fontFamily: 'var(--font-mono)',
        ...style,
      }}
    >
      {displayedLines.map((line, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0',
            marginBottom: '6px',
            fontSize: 'inherit',
            color: 'inherit',
          }}
        >
          <span style={{ color: 'var(--accent)', fontWeight: 700, marginRight: '8px', flexShrink: 0 }}>
            {prefix}
          </span>
          <span>{line}</span>
          {showCursor && index === currentLineIndex && !isComplete && (
            <span
              className="blink-cursor"
              style={{
                display: 'inline-block',
                width: '8px',
                height: '1.1em',
                background: 'var(--accent)',
                marginLeft: '2px',
                verticalAlign: 'text-bottom',
              }}
            />
          )}
        </div>
      ))}
      {showCursor && isComplete && (
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '2px' }}>
          <span style={{ color: 'var(--accent)', fontWeight: 700, marginRight: '8px' }}>{prefix}</span>
          <span
            className="blink-cursor"
            style={{
              display: 'inline-block',
              width: '8px',
              height: '1.1em',
              background: 'var(--accent)',
            }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default TypingText;
