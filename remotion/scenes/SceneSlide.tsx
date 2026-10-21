import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {colors} from '../lib/theme';
import type {SceneDef} from '../lib/scenes';

const display = 'Georgia, "Times New Roman", serif';
const sans = 'system-ui, -apple-system, "Segoe UI", sans-serif';

type Props = {
  scene: SceneDef;
  index: number;
};

export const SceneSlide: React.FC<Props> = ({scene, index}) => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();

  const enter = spring({
    frame,
    fps,
    config: {damping: 200},
  });
  const titleY = interpolate(enter, [0, 1], [36, 0]);
  const opacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const lineOpacity = interpolate(frame, [10, 28], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const fadeOut = interpolate(
    frame,
    [Math.max(0, durationInFrames - 14), durationInFrames],
    [1, 0],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );

  const accentWidth = interpolate(enter, [0, 1], [0, 72]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: index % 2 === 0 ? colors.earthDark : colors.earth900,
        opacity: fadeOut,
      }}
    >
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse 80% 60% at 20% 20%, ${colors.red}22 0%, transparent 55%),
            radial-gradient(ellipse 70% 50% at 90% 80%, ${colors.moss}33 0%, transparent 50%)`,
        }}
      />

      <AbsoluteFill
        style={{
          padding: '120px 140px',
          justifyContent: 'center',
          opacity,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 28,
            transform: `translateY(${titleY}px)`,
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: sans,
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: colors.cremeMuted,
            }}
          >
            {scene.eyebrow}
          </p>

          <div
            style={{
              width: accentWidth,
              height: 3,
              backgroundColor: colors.red,
              borderRadius: 2,
            }}
          />

          <h1
            style={{
              margin: 0,
              fontFamily: display,
              fontWeight: 300,
              fontSize: scene.id === 'intro' || scene.id === 'outro' ? 140 : 110,
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
              color: colors.creme50,
            }}
          >
            {scene.title}
          </h1>

          <div
            style={{
              opacity: lineOpacity,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            {scene.lines.map((line) => (
              <p
                key={line}
                style={{
                  margin: 0,
                  fontFamily: sans,
                  fontSize: 36,
                  fontWeight: 400,
                  color: colors.creme200,
                  maxWidth: 1100,
                }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </AbsoluteFill>

      <div
        style={{
          position: 'absolute',
          bottom: 64,
          right: 140,
          fontFamily: sans,
          fontSize: 18,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: colors.cremeMuted,
        }}
      >
        {String(index + 1).padStart(2, '0')} / 05
      </div>
    </AbsoluteFill>
  );
};
