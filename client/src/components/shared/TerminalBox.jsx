import React from 'react';

const TerminalBox = ({ title = 'terminal', children, className = '', style = {} }) => {
  return (
    <div
      className={`terminal-glow ${className}`}
      style={{
        background: 'var(--bg-terminal)',
        borderRadius: '12px',
        border: '1px solid rgba(0, 255, 156, 0.15)',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* Terminal Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 16px',
          borderBottom: '1px solid rgba(0, 255, 156, 0.1)',
          background: 'rgba(0, 255, 156, 0.03)',
        }}
      >
        {/* Traffic lights */}
        <div style={{ display: 'flex', gap: '6px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F57' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28C840' }} />
        </div>
        {/* Title */}
        <span
          style={{
            marginLeft: '8px',
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--text-muted)',
            letterSpacing: '0.5px',
            userSelect: 'none',
          }}
        >
          {title}
        </span>
      </div>

      {/* Terminal Body */}
      <div style={{ padding: '20px 24px' }}>
        {children}
      </div>
    </div>
  );
};

export default TerminalBox;
