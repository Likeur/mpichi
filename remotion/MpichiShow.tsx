import React from 'react';
import {AbsoluteFill} from 'remotion';
import {TransitionSeries, linearTiming} from '@remotion/transitions';
import {slide} from '@remotion/transitions/slide';
import {fade} from '@remotion/transitions/fade';
import {SceneHook} from './scenes/show/SceneHook';
import {SceneBrand} from './scenes/show/SceneBrand';
import {SceneCatalog} from './scenes/show/SceneCatalog';
import {SceneFilters} from './scenes/show/SceneFilters';
import {SceneBilingual} from './scenes/show/SceneBilingual';
import {SceneOutro} from './scenes/show/SceneOutro';
import {FPS, SCENE_PAD, TRANSITION_FRAMES, colors} from './lib/theme';

/** Measured Amélie VO lengths (seconds) */
const VO = [3.31, 3.0, 4.59, 5.9, 4.42, 4.15] as const;

const sceneLen = (sec: number, extra = 0) =>
  Math.ceil(sec * FPS) + SCENE_PAD + extra;

const DURATIONS = [
  sceneLen(VO[0], 18),
  sceneLen(VO[1], 10),
  sceneLen(VO[2], 22),
  sceneLen(VO[3], 28),
  sceneLen(VO[4], 16),
  sceneLen(VO[5], 20),
] as const;

export const SHOW_DURATION =
  DURATIONS.reduce((a, b) => a + b, 0) - TRANSITION_FRAMES * (DURATIONS.length - 1);

export const MpichiShow: React.FC = () => {
  return (
    <AbsoluteFill style={{backgroundColor: colors.earth900}}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={DURATIONS[0]}>
          <SceneHook />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({direction: 'from-right'})}
          timing={linearTiming({durationInFrames: TRANSITION_FRAMES})}
        />

        <TransitionSeries.Sequence durationInFrames={DURATIONS[1]}>
          <SceneBrand />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({durationInFrames: TRANSITION_FRAMES})}
        />

        <TransitionSeries.Sequence durationInFrames={DURATIONS[2]}>
          <SceneCatalog />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({direction: 'from-bottom'})}
          timing={linearTiming({durationInFrames: TRANSITION_FRAMES})}
        />

        <TransitionSeries.Sequence durationInFrames={DURATIONS[3]}>
          <SceneFilters />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({durationInFrames: TRANSITION_FRAMES})}
        />

        <TransitionSeries.Sequence durationInFrames={DURATIONS[4]}>
          <SceneBilingual />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({direction: 'from-left'})}
          timing={linearTiming({durationInFrames: TRANSITION_FRAMES})}
        />

        <TransitionSeries.Sequence durationInFrames={DURATIONS[5]}>
          <SceneOutro />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
