import Search from "../components/Search";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100dvh-100px)]">
      <div className="lg:basis-3/5 pr-10 flex flex-col gap-14 justify-start lg:justify-center items-center ">
        <h1 className="text-5xl xl:text-[64px] font-semibold leading-14">Find Real Estate & Get Your Dream Place</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cum
          voluptatem eaque velit blanditiis voluptate doloremque. Sapiente
          temporibus modi saepe quia earum error consectetur expedita illum
          quidem, eos fuga voluptatum.
        </p>
        <Search />
        <div className="lg:flex justify-between w-full hidden ">
          <div>
            <h1 className="text-3xl xl:text-4xl font-bold">16+</h1>
            <h2 >Years of Experience</h2>
          </div>
          <div>
            <h1 className="text-3xl xl:text-4xl font-bold">200</h1>
            <h2>Award Gained</h2>
          </div>
          <div>
            <h1 className="text-3xl xl:text-4xl font-bold">1200+</h1>
            <h2>Property Ready</h2>
          </div>
        </div>
      </div>
      <div className="hidden basis-2/5 bg-[#fcf5f3] lg:flex items-center ">
        <img src="/bg.png" alt="hero image" className=" w-[400px]" />
      </div>
    </div>
  );
}
