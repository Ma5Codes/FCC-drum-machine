import { AudioClip } from "./types";

interface DrumProps {
    audioClip: AudioClip;
}
const Drum = ({audioClip}: DrumProps) => {
    const playSound = (clip: AudioClip) => {
        (document.getElementById(clip.keyTrigger) as HTMLAudioElement).play().catch(console.error);
        
        document.getElementById("display")!.innerText = clip.description;
    };
  return (
   <button className="drum-pad" id={`drum-${audioClip.keyTrigger}`} onClick={() => playSound(audioClip)}>
      <audio src={audioClip.url} className="clip" id={audioClip.keyTrigger} />
      {audioClip.keyTrigger}
    </button>
  );
};


export default Drum;