import { Composition } from "remotion";
import { DURATION, FPS } from "./utils/timing";
import { MainSequence } from "./MainSequence";

// A duração e o fps vêm da linha do tempo; scenes.ts valida a soma dos frames.
export const RemotionRoot: React.FC = () => {
  return <Composition id="ProblemResolveVideo" component={MainSequence} durationInFrames={DURATION} fps={FPS} width={1080} height={1920} />;
};
