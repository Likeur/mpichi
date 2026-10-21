import React from 'react';
import {Composition} from 'remotion';
import {Presentation, PRESENTATION_DURATION} from './Presentation';
import {FPS, HEIGHT, WIDTH} from './lib/theme';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MpichiPresentation"
        component={Presentation}
        durationInFrames={PRESENTATION_DURATION}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
    </>
  );
};
