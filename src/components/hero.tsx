import Carousel from "./slider";

const Hero = ({ name }: { name: string }) => {
  return (
    <div className="max-w-screen-xl mx-auto bg-gradient-to-br from-[#35a4ff] to-indigo-500">
      <div className="min-h-96 flex flex-col items-center justify-center h-full">
        <h1 className="lg:text-4xl font-bold text-white text-2xl mb-4">
          Welcome to {name}
        </h1>
        <p className="lg:text-lg  text-[12px] text-white">
          The best place to find the most amazing products
        </p>
      </div>
    </div>
  );
};

export default Hero;
