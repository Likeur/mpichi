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
import {RecipeCardMock} from '../../ui/RecipeCardMock';
import {colors} from '../../lib/theme';

const CARDS = [
  {image: 'video-assets/moambe.jpg', title: 'Poulet à la moambe', meta: '45 min · moyen'},
  {image: 'video-assets/pondu.jpg', title: 'Pondu', meta: '2 h · moyen'},
  {image: 'video-assets/liboke.jpg', title: 'Liboke de poisson', meta: '1 h · facile'},
  {image: 'video-assets/mikate.jpg', title: 'Mikate', meta: '40 min · facile'},
];

export const SceneCatalog: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const stage = spring({frame, fps, config: {damping: 18}});

  return (
    <AbsoluteFill style={{backgroundColor: colors.agedOak}}>
      <Audio src={staticFile('sfx/whoosh.wav')} volume={0.6} />
      <Sequence from={18} durationInFrames={18}>
        <Audio src={staticFile('sfx/click.wav')} volume={0.5} />
      </Sequence>
      <Sequence from={28} durationInFrames={18}>
        <Audio src={staticFile('sfx/click.wav')} volume={0.4} />
      </Sequence>
      <Sequence from={38} durationInFrames={20}>
        <Audio src={staticFile('sfx/pop.wav')} volume={0.55} />
      </Sequence>
      <Audio src={staticFile('voiceover/show/03.wav')} />

      <AbsoluteFill style={{padding: 70}}>
        <div
          style={{
            height: '100%',
            transform: `translateY(${interpolate(stage, [0, 1], [80, 0])}px) scale(${interpolate(stage, [0, 1], [0.94, 1])})`,
            opacity: stage,
          }}
        >
          <BrowserFrame url="mpichi.cd/recettes">
            <div
              style={{
                height: '100%',
                backgroundColor: colors.creme50,
                padding: '36px 40px',
              }}
            >
              <div
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: 42,
                  fontWeight: 300,
                  color: colors.ink,
                  marginBottom: 28,
                }}
              >
                51 recettes
              </div>
              <div style={{display: 'flex', gap: 22}}>
                {CARDS.map((card, i) => (
                  <RecipeCardMock
                    key={card.title}
                    {...card}
                    delay={10 + i * 7}
                    favorited={i === 2}
                  />
                ))}
              </div>
            </div>
          </BrowserFrame>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
