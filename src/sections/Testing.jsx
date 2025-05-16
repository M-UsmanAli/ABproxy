import { spark } from "../assets/icons";
import testing from "../assets/testing.mp4";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import SectionButton from "../components/SectionButton";

const Testing = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center text-center max-lg:px-15 py-28"
      id="ab-testing"
    >
      <div className="flex flex-col items-center justify-center gap-5">
        <SectionButton icon={spark} label="Our Products" />
        <Heading data=" A/B Testing: Built for Scale" />
        <Paragraph data="Unify A/B testing, observability, analytics, and data flow in one intelligent platform — no code changes, no data chaos." />
      </div>

      <div className="w-screen flex justify-center mt-10 md:mt-20 px-4 relative overflow-hidden">
        <video
          src={testing}
          autoPlay
          muted
          playsInline
          className="w-full sm:max-w-[90%] md:max-w-[70%] lg:max-w-[65%] h-full object-cover z-10 rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Testing;
