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
import {BrowserFrame} from '../../ui/BrowserFrame';
import {FilterBarMock} from '../../ui/FilterBarMock';
import {RecipeCardMock} from '../../ui/RecipeCardMock';
import {colors} from '../../lib/theme';

export const SceneFilters: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const stage = spring({frame, fps, config: {damping: 16}});
  const heartPop = spring({
    frame: Math.max(0, frame - 70),
    fps,
    config: {damping: 11, stiffness: 180},
  });

  return (
    <AbsoluteFill style={{backgroundColor: colors.earth900}}>
      <Audio src={staticFile('sfx/whoosh.wav')} volume={0.55} />
      <Sequence from={30} durationInFrames={18}>
        <Audio src={staticFile('sfx/click.wav')} volume={0.55} />
      </Sequence>
      <Sequence from={72} durationInFrames={22}>
        <Audio src={staticFile('sfx/pop.wav')} volume={0.7} />
      </Sequence>
      <Audio src={staticFile('voiceover/show/04.wav')} />

      <AbsoluteFill style={{padding: '60px 90px'}}>
        <div
          style={{
            height: '100%',
            opacity: stage,
            transform: `translateX(${interpolate(stage, [0, 1], [60, 0])}px)`,
          }}
        >
          <BrowserFrame url="mpichi.cd/recettes · filtres">
            <div
              style={{
                height: '100%',
                backgroundColor: colors.creme50,
                padding: '40px 48px',
              }}
            >
              <FilterBarMock activeIndex={2} />
              <div style={{marginTop: 56, display: 'flex', gap: 24}}>
                <RecipeCardMock
                  image="video-assets/moambe.jpg"
                  title="Poulet mayo"
                  meta="Kinshasa · 45 min"
                  delay={36}
                />
                <div style={{transform: `scale(${interpolate(heartPop, [0, 1], [1, 1.04])})`}}>
                  <RecipeCardMock
                    image="video-assets/pondu.jpg"
                    title="Soso ya sauce"
                    meta="Kinshasa · 1 h"
                    delay={42}
                    favorited
                  />
                </div>
                <RecipeCardMock
                  image="video-assets/mikate.jpg"
                  title="Mikate"
                  meta="Goûter · 40 min"
                  delay={48}
                />
              </div>
              <div
                style={{
                  marginTop: 36,
                  opacity: interpolate(frame, [80, 95], [0, 1], {
                    extrapolateLeft: 'clamp',
                    extrapolateRight: 'clamp',
                  }),
                  fontFamily: 'system-ui, sans-serif',
                  fontSize: 18,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: colors.red,
                }}
              >
                Favoris · enregistrés en local
              </div>
            </div>
          </BrowserFrame>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
