import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors} from '../lib/theme';

export const LangToggleMock: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const flip = spring({
    frame: Math.max(0, frame - 20),
    fps,
    config: {damping: 14, stiffness: 110},
  });
  const en = flip > 0.5;

  return (
    <div
      style={{
        display: 'inline-flex',
        border: `1.5px solid ${colors.inkFaint}`,
        borderRadius: 999,
        padding: 4,
        backgroundColor: colors.white,
        position: 'relative',
        width: 168,
        height: 52,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 4,
          left: 4,
          width: 80,
          height: 44,
          borderRadius: 999,
          backgroundColor: colors.earthDark,
          transform: `translateX(${interpolate(flip, [0, 1], [0, 80])}px)`,
        }}
      />
      {(['FR', 'EN'] as const).map((label, i) => {
        const active = en ? i === 1 : i === 0;
        return (
          <div
            key={label}
            style={{
              width: 80,
              height: 44,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'system-ui, sans-serif',
              fontSize: 16,
              letterSpacing: '0.14em',
              fontWeight: 600,
              color: active ? colors.creme50 : colors.inkSoft,
              zIndex: 1,
            }}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
};
