import React from 'react';
import {
  AbsoluteFill,
  Audio,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {LangToggleMock} from '../../ui/LangToggleMock';
import {colors} from '../../lib/theme';

export const SceneBilingual: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const enter = spring({frame, fps, config: {damping: 16}});
  const flip = spring({
    frame: Math.max(0, frame - 20),
    fps,
    config: {damping: 14, stiffness: 110},
  });
  const showEn = flip > 0.45;

  return (
    <AbsoluteFill style={{backgroundColor: colors.creme100}}>
      <Audio src={staticFile('sfx/whoosh.wav')} volume={0.45} />
      <Sequence from={22} durationInFrames={18}>
        <Audio src={staticFile('sfx/click.wav')} volume={0.6} />
      </Sequence>
      <Audio src={staticFile('voiceover/show/05.wav')} />

      <AbsoluteFill
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 48,
          opacity: enter,
        }}
      >
        <LangToggleMock />
        <div
          style={{
            textAlign: 'center',
            transform: `translateY(${interpolate(enter, [0, 1], [24, 0])}px)`,
          }}
        >
          <div
            style={{
              fontFamily: 'Georgia, serif',
              fontWeight: 300,
              fontSize: 78,
              color: colors.ink,
              letterSpacing: '-0.02em',
            }}
          >
            {showEn ? 'Congolese cuisine' : 'Cuisine congolaise'}
          </div>
          <div
            style={{
              marginTop: 18,
              fontFamily: 'system-ui, sans-serif',
              fontSize: 28,
              color: colors.inkSoft,
            }}
          >
            {showEn
              ? 'Recipes, gestures, regions — told carefully.'
              : 'Recettes, gestes, régions — racontés avec soin.'}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
