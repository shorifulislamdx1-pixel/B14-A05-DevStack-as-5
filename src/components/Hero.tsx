import Banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="container mx-auto py-24">
      <div className="flex items-center justify-between">

        <div className="w-1/2">
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 w-[520px] text-gray-500 leading-6">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          <div className="mt-8 flex gap-3">
            <button className="btn border-none bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white">
              Explore Technologies
            </button>

            <button className="btn bg-white border border-gray-200">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-1/2 flex justify-center">
          <img
            src={Banner}
            alt="Development Stack"
            className="w-[430px]"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;