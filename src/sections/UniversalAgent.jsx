import universalAgent from "../assets/universalAgent.mp4";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

const UniversalAgent = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center text-center mb-5 max-lg:px-15 py-28"
      id="universal-agent"
    >
      <div className="flex flex-col items-center justify-center gap-5">
        <Heading data="Universal Agent: No Code, All-In-One" />
        <Paragraph data="Unify A/B testing, observability, analytics, and data flow in one intelligent platform — no code changes, no data chaos." />
      </div>
      <div className="w-screen flex justify-center mt-10 md:mt-20 px-4 -z-1">
        <video
          src={universalAgent}
          autoPlay
          muted
          playsInline
          className=" w-full sm:max-w-[90%] md:max-w-[70%] lg:max-w-[65%] h-full object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* <video src={testing} autoPlay muted playsInline></video> */}
    </section>
  );
};

export default UniversalAgent;
