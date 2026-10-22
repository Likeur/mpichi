import React from 'react';
import {Composition} from 'remotion';
import {MpichiShow, SHOW_DURATION} from './MpichiShow';
import {FPS, HEIGHT, WIDTH} from './lib/theme';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MpichiShow"
        component={MpichiShow}
        durationInFrames={SHOW_DURATION}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
    </>
  );
};
