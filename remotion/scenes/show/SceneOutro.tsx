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

export const SceneOutro: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const logo = spring({frame, fps, config: {damping: 14}});
  const cta = spring({frame: Math.max(0, frame - 18), fps, config: {damping: 16}});

  return (
    <AbsoluteFill style={{backgroundColor: colors.earth900}}>
      <Audio src={staticFile('sfx/bass.wav')} volume={0.5} />
      <Audio src={staticFile('sfx/chime.wav')} volume={0.5} />
      <Audio src={staticFile('voiceover/show/06.wav')} />

      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% 45%, ${colors.red}28, transparent 55%)`,
        }}
      />

      <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
        <div style={{textAlign: 'center'}}>
          <div
            style={{
              opacity: logo,
              transform: `scale(${interpolate(logo, [0, 1], [0.9, 1])})`,
              fontFamily: 'Georgia, serif',
              fontWeight: 300,
              fontSize: 140,
              color: colors.creme50,
              letterSpacing: '-0.03em',
            }}
          >
            Mpichi
          </div>
          <div
            style={{
              marginTop: 24,
              opacity: cta,
              fontFamily: 'system-ui, sans-serif',
              fontSize: 26,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: colors.creme200,
            }}
          >
            Conçu en RDC · pour la table & la diaspora
          </div>
          <div
            style={{
              marginTop: 40,
              opacity: cta,
              display: 'inline-flex',
              padding: '16px 28px',
              borderRadius: 999,
              backgroundColor: colors.red,
              color: colors.creme50,
              fontFamily: 'system-ui, sans-serif',
              fontSize: 18,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            mpichi.cd
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
