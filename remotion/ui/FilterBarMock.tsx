import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors} from '../lib/theme';

const FILTERS = [
  {label: 'Catégorie', value: 'Plat'},
  {label: 'Difficulté', value: 'Facile'},
  {label: 'Région', value: 'Kinshasa'},
];

export const FilterBarMock: React.FC<{activeIndex?: number}> = ({
  activeIndex = 2,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <div style={{display: 'flex', gap: 28, width: '100%'}}>
      {FILTERS.map((filter, i) => {
        const enter = spring({
          frame: Math.max(0, frame - i * 6),
          fps,
          config: {damping: 18},
        });
        const open = i === activeIndex ? spring({
          frame: Math.max(0, frame - 28),
          fps,
          config: {damping: 14, stiffness: 140},
        }) : 0;

        return (
          <div
            key={filter.label}
            style={{
              flex: 1,
              opacity: enter,
              transform: `translateY(${interpolate(enter, [0, 1], [20, 0])}px)`,
              position: 'relative',
            }}
          >
            <div
              style={{
                fontFamily: 'system-ui, sans-serif',
                fontSize: 11,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: colors.inkSoft,
                marginBottom: 10,
              }}
            >
              {filter.label}
            </div>
            <div
              style={{
                borderBottom: `1.5px solid ${i === activeIndex ? colors.ink : colors.inkFaint}`,
                paddingBottom: 10,
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'system-ui, sans-serif',
                fontSize: 22,
                color: colors.ink,
              }}
            >
              <span>{filter.value}</span>
              <span style={{opacity: 0.4}}>▾</span>
            </div>
            {i === activeIndex ? (
              <div
                style={{
                  position: 'absolute',
                  top: 70,
                  left: 0,
                  right: 0,
                  backgroundColor: colors.white,
                  borderRadius: 8,
                  boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
                  opacity: open,
                  transform: `translateY(${interpolate(open, [0, 1], [-8, 0])}px)`,
                  overflow: 'hidden',
                  zIndex: 2,
                }}
              >
                {['Toute la RDC', 'Kinshasa', 'Grand Kasaï', 'Haut-Katanga'].map(
                  (opt, oi) => (
                    <div
                      key={opt}
                      style={{
                        padding: '14px 16px',
                        fontFamily: 'system-ui, sans-serif',
                        fontSize: 18,
                        color: oi === 1 ? colors.red : colors.ink,
                        backgroundColor: oi === 1 ? 'rgba(201,31,50,0.06)' : 'transparent',
                        borderBottom: `1px solid ${colors.inkFaint}`,
                      }}
                    >
                      {opt}
                    </div>
                  ),
                )}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
