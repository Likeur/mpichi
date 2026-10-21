import {Config} from '@remotion/cli/config';

Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);
// Port 3000 is often taken locally — keep Remotion off it.
Config.setStudioPort(3333);
Config.setRendererPort(3456);
Config.setChromiumOpenGlRenderer('angle');
