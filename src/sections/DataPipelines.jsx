import pipeline from "../assets/pipeline.mp4";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

const DataPipelines = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center text-center max-lg:px-15 py-28"
      id="data-flow"
    >
      <div className="flex flex-col items-center justify-center gap-5">
        <Heading data="Data Pipelines: Plugin & Play" />
        <Paragraph data="Ship your data anywhere — your warehouse, your lake, your dashboard. Our pipelines understand your schema and structure automatically. You control the destination; we handle the rest." />
      </div>
      <div className="w-screen flex justify-center mt-10 md:mt-20 px-4 -z-1">
        <video
          src={pipeline}
          autoPlay
          muted
          playsInline
          className=" w-full sm:max-w-[90%] md:max-w-[70%] lg:max-w-[65%] h-full object-cover rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default DataPipelines;
