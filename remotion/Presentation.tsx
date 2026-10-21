import React from 'react';
import {AbsoluteFill, Audio, Sequence, staticFile} from 'remotion';
import {SceneSlide} from './scenes/SceneSlide';
import {SCENES} from './lib/scenes';
import {FPS, SCENE_PAD_FRAMES, colors} from './lib/theme';

/**
 * Durations measured from public/voiceover/*.wav (macOS say / Thomas).
 * Keep in sync if you regenerate the clips.
 */
const AUDIO_SECONDS = [4.61, 6.52, 7.89, 5.59, 5.02] as const;

export const sceneFrames = AUDIO_SECONDS.map((sec) =>
  Math.max(FPS * 3, Math.ceil(sec * FPS) + SCENE_PAD_FRAMES),
);

export const PRESENTATION_DURATION = sceneFrames.reduce((sum, n) => sum + n, 0);

export const Presentation: React.FC = () => {
  let from = 0;

  return (
    <AbsoluteFill style={{backgroundColor: colors.earth900}}>
      {SCENES.map((scene, index) => {
        const durationInFrames = sceneFrames[index]!;
        const start = from;
        from += durationInFrames;

        return (
          <Sequence
            key={scene.id}
            from={start}
            durationInFrames={durationInFrames}
            name={scene.id}
          >
            <SceneSlide scene={scene} index={index} />
            <Audio src={staticFile(scene.audio)} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
