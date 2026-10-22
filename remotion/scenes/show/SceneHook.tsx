import React from 'react';
import {
  AbsoluteFill,
  Audio,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {colors} from '../../lib/theme';

export const SceneHook: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const word1 = spring({frame, fps, config: {damping: 18}});
  const word2 = spring({frame: Math.max(0, frame - 8), fps, config: {damping: 18}});
  const line = spring({frame: Math.max(0, frame - 16), fps, config: {damping: 20}});
  const sub = spring({frame: Math.max(0, frame - 22), fps, config: {damping: 18}});

  return (
    <AbsoluteFill style={{backgroundColor: colors.earth900}}>
      <Audio src={staticFile('sfx/bass.wav')} volume={0.55} />
      <Audio src={staticFile('sfx/whoosh.wav')} volume={0.7} />
      <Audio src={staticFile('voiceover/show/01.wav')} />

      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 30% 40%, ${colors.red}33, transparent 50%)`,
        }}
      />

      <AbsoluteFill
        style={{
          justifyContent: 'center',
          padding: '0 140px',
        }}
      >
        <div
          style={{
            opacity: word1,
            transform: `translateY(${interpolate(word1, [0, 1], [40, 0])}px)`,
            fontFamily: 'Georgia, serif',
            fontWeight: 300,
            fontSize: 72,
            color: colors.cremeMuted,
            letterSpacing: '-0.02em',
          }}
        >
          Et si la cuisine congolaise
        </div>
        <div
          style={{
            marginTop: 8,
            opacity: word2,
            transform: `translateY(${interpolate(word2, [0, 1], [40, 0])}px)`,
            fontFamily: 'Georgia, serif',
            fontWeight: 300,
            fontSize: 84,
            color: colors.creme50,
            letterSpacing: '-0.03em',
          }}
        >
          avait enfin son vrai écrin digital ?
        </div>
        <div
          style={{
            marginTop: 36,
            width: interpolate(line, [0, 1], [0, 120]),
            height: 4,
            backgroundColor: colors.red,
            borderRadius: 4,
          }}
        />
        <div
          style={{
            marginTop: 28,
            opacity: sub,
            fontFamily: 'system-ui, sans-serif',
            fontSize: 22,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: colors.cremeMuted,
          }}
        >
          Motion · produit · patrimoine
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
