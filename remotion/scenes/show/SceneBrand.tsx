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

export const SceneBrand: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const logo = spring({frame, fps, config: {damping: 14, stiffness: 100}});
  const tag = spring({frame: Math.max(0, frame - 12), fps, config: {damping: 18}});

  return (
    <AbsoluteFill style={{backgroundColor: colors.earthDark}}>
      <Audio src={staticFile('sfx/chime.wav')} volume={0.55} />
      <Audio src={staticFile('sfx/whoosh.wav')} volume={0.45} />
      <Audio src={staticFile('voiceover/show/02.wav')} />

      <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
        <div
          style={{
            opacity: logo,
            transform: `scale(${interpolate(logo, [0, 1], [0.85, 1])})`,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'Georgia, serif',
              fontWeight: 300,
              fontSize: 168,
              color: colors.creme50,
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}
          >
            Mpichi
          </div>
          <div
            style={{
              marginTop: 28,
              opacity: tag,
              transform: `translateY(${interpolate(tag, [0, 1], [16, 0])}px)`,
              fontFamily: 'system-ui, sans-serif',
              fontSize: 28,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: colors.creme200,
            }}
          >
            Répertoire vivant · cuisine RDC
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
