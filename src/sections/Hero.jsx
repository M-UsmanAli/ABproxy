import videoFeature from "../assets/HEADERANIMATION.mp4";
import StarsBackground from "../canvas/StarBackground";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex flex-col justify-center min-h-screen"
    >
      <StarsBackground />

      <div className="flex flex-col items-center justify-center text-center gap-1 mb-5 max-lg:px-15 py-28">
        <h1 className="text-4xl leading-10 md:leading-17  md:text-5xl lg:text-6xl font-semibold mb-5 font-Headings ">
          Energize Your Data <br />
          Transform Fearlessly
        </h1>
        <Paragraph
          data="Unify A/B testing, observability, analytics, and data flow in one
          intelligent platform — no code changes, no data chaos."
        />
        <Button
          label="Request Early Access"
          className="px-5 py-3 md:px-7 md:py-5  text-lg leading-none rounded-lg font-bold border-2 border-white bg-none bg-transparent text-white cursor-pointer font-Headings"
          onClick={() => {
            const section = document.querySelector("#contact");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        <div className="w-screen flex justify-center -mt-1 md:-mt-35 px-4 -z-1">
          <video src={videoFeature} autoPlay muted playsInline loop />
        </div>
      </div>
    </section>
  );
};

export default Hero;
