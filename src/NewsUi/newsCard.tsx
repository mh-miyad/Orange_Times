import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const NewCardSlider = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 h-auto ">
      <div className="col-span-1 lg:col-span-9 lg:border-r-2 h-full xl:pr-5 border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10 border-b-2 pb-4 mb-5 border-gray-200">
          {/* Left Content */}
          <div className="w-full">
            <h2 className="text-xl  md:text-2xl lg:text-[24px] lg:leading-[1.1]  xl:text-[32px] 2xl:text-5xl font-normal capitalize text-white mb-4 ">
              A fresh approach to intuitive design— where minimalism meets
              functionality
            </h2>

            <p className="text-white mb-2 xl:mb-4 text-sm md:text-base lg:text-sm 2xl:text-lg ">
              {`Design isn't just about how it looks; it's about how it works. In
              this project, I focused on creating a user interface that blends
              minimalist aesthetics with maximum functionality.`}
            </p>

            <div className="flex items-center text-white text-sm font-extrabold">
              <span>2 MIN READ</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Person reading newspaper"
                width={10000}
                height={10000}
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
        </div>
        {/* bottom part  */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-10 ">
          {/* left part start here  */}
          <div className="col-span-5">
            <div className="w-full h-[550px]  relative">
              <div className="absolute top-2 left-2 bg-white text-black px-2 text-xs capitalize py-1 rounded-full z-10">
                Fashion
              </div>
              <Image
                src={
                  "https://images.unsplash.com/photo-1614274300320-f8d5002cf6e9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="Person working on laptop"
                width={1000}
                height={1000}
                quality={100}
                className="w-full 2xl:h-[550px] object-cover absolute "
              />
              <button>
                <div className="absolute bottom-10 h-[70px] left-0 right-0 bg-gray-900/50 border w-full max-w-sm text-black px-2 text-xs capitalize py-1 rounded mx-auto flex items-center  justify-between z-10">
                  <h2 className="text-white text-2xl">Explore More</h2>
                  <div className="w-10 h-10 rounded bg-white flex items-center justify-center">
                    <ArrowRight />
                  </div>
                </div>
              </button>
            </div>
          </div>
          {/* left part end here  */}
          <div className="col-span-7">
            <div className="flex flex-col gap-7">
              {/* card 1 */}
              <div className="flex items-start gap-5">
                <Image
                  src="https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover max-h-32 max-w-44"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl lg:text-3xl font-semibold">
                    The future of virtual reality—a
                  </h3>
                  <p className="text-sm">
                    {`Virtual reality (VR) is a transformative medium that promises
                    to revolutionize the way we interact with the world around us. In
                    this project,`}
                  </p>
                </div>
              </div>
              {/* card 1 */}
              {/* card 1 */}
              <div className="flex items-start gap-5">
                <Image
                  src="https://images.unsplash.com/photo-1511424323602-d3c1a4138056?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover max-h-32 max-w-44"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl lg:text-3xl font-semibold">
                    Next to the Model
                  </h3>
                  <p className="text-sm">
                    {`Virtual reality (VR) is a transformative medium that promises
                    to revolutionize the way we interact with the world around us. In
                    this project,`}
                  </p>
                </div>
              </div>
              {/* card 1 */}
              {/* card 1 */}
              <div className="flex items-start gap-5">
                <Image
                  src="https://images.unsplash.com/photo-1635715056175-328d91e9bb2e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover max-h-32 max-w-44"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl lg:text-3xl font-semibold">
                    The future of virtual reality—a
                  </h3>
                  <p className="text-sm">
                    {`Virtual reality (VR) is a transformative medium that promises
                    to revolutionize the way we interact with the world around us. In
                    this project,`}
                  </p>
                </div>
              </div>
              {/* card 1 */}
              {/* card 1 */}
              <div className="flex items-start gap-5">
                <Image
                  src="https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover max-h-32 max-w-44"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl lg:text-3xl font-semibold">
                    The future of virtual reality—a
                  </h3>
                  <p className="text-sm">
                    {`Virtual reality (VR) is a transformative medium that promises
                    to revolutionize the way we interact with the world around us. In
                    this project,`}
                  </p>
                </div>
              </div>
              {/* card 1 */}
            </div>
          </div>
        </div>
        {/* bottom part end here  */}
      </div>
      {/* Right Content */}
      <div className="col-span-3  h-full">
        <div>
          {/* image-part  */}
          <div className="w-full 2xl:max-h-[500px] h-full relative">
            <div className="absolute top-2 left-2 bg-white text-black px-2 text-xs capitalize py-1 rounded-full z-10">
              technology
            </div>
            <Image
              src={
                "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Person working on laptop"
              width={1000}
              height={1000}
              className="w-full 2xl:h-[500px] object-cover "
            />
          </div>
          {/* image-part  */}
          <div className="mx-auto px-5">
            <h2 className="text-2xl lg:text-4xl uppercase   font-semibold my-5 ">
              VR is the future of the USA
            </h2>
            <p className="text-sm md:text-base ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
              officia corporis inventore vero odit, deleniti earum iure porro
              adipisci dicta voluptatibus id veniam eaque, distinctio libero
              saepe exercitationem voluptate assumenda! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. assumenda!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCardSlider;
