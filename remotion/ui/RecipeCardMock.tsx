import React from 'react';
import {Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors} from '../lib/theme';

type Props = {
  image: string;
  title: string;
  meta: string;
  delay?: number;
  favorited?: boolean;
};

export const RecipeCardMock: React.FC<Props> = ({
  image,
  title,
  meta,
  delay = 0,
  favorited = false,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const local = Math.max(0, frame - delay);

  const enter = spring({
    frame: local,
    fps,
    config: {damping: 16, stiffness: 120},
  });
  const y = interpolate(enter, [0, 1], [60, 0]);
  const scale = interpolate(enter, [0, 1], [0.92, 1]);
  const opacity = interpolate(local, [0, 8], [0, 1], {extrapolateRight: 'clamp'});

  const heart = spring({
    frame: Math.max(0, local - 18),
    fps,
    config: {damping: 12, stiffness: 160},
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${y}px) scale(${scale})`,
        backgroundColor: colors.creme50,
        borderRadius: 4,
        overflow: 'hidden',
        width: 280,
      }}
    >
      <div style={{position: 'relative', aspectRatio: '4/3', overflow: 'hidden'}}>
        <Img
          src={staticFile(image)}
          style={{width: '100%', height: '100%', objectFit: 'cover'}}
        />
        <div
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            width: 36,
            height: 36,
            borderRadius: 99,
            backgroundColor: 'rgba(18,12,9,0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: `scale(${interpolate(heart, [0, 1], [0.6, 1])})`,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21s-7-4.35-9.5-8.5C.5 9 2.5 5 6.5 5c2 0 3.5 1.2 5.5 3.2C14 6.2 15.5 5 17.5 5 21.5 5 23.5 9 21.5 12.5 19 16.65 12 21 12 21z"
              fill={favorited ? colors.red : 'none'}
              stroke={favorited ? colors.red : colors.creme50}
              strokeWidth="1.8"
            />
          </svg>
        </div>
      </div>
      <div style={{padding: '18px 16px 16px'}}>
        <div
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 26,
            fontWeight: 300,
            color: colors.ink,
            lineHeight: 1.1,
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 12,
            paddingTop: 10,
            borderTop: `1px solid ${colors.inkFaint}`,
            fontFamily: 'system-ui, sans-serif',
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: colors.inkSoft,
          }}
        >
          {meta}
        </div>
      </div>
    </div>
  );
};
