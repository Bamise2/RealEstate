import Slider from "../components/Slider";
import { singlePostData, userData } from "../lib/dummyData";

export default function Singlepage() {
  return (
    <div className="flex h-[calc(100dvh-100px)]">
      <div className="basis-3/5">
        <div className="pr-12">
          <Slider images={singlePostData.images} />
          <div className="">
            <div className="flex justify-between">
              <div className="flex flex-col gap-5">
                <h1 className="font-normal text-3xl">{singlePostData.title}</h1>
                <div className="flex items-center gap-2 text-[#888]">
                  <img src="/pin.png" alt="location icon"  className="w-4 h-4"/>
                  <span>{singlePostData.address}</span>
                </div>
                <div className="max-w-fit bg-amber-300 p-2 rounded-lg font-medium text-xl">$ {singlePostData.price}</div>
              </div>
              <div className="bg-amber-100 flex flex-col items-center justify-center px-12 gap-5 rounded-xl">
                <img
                  src={userData.img}
                  alt="user profile"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <p className="font-semibold">{userData.name}</p>
              </div>
            </div>
            <div className="mt-12 text-[#555] leading-5">
              <p>{singlePostData.description }</p>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-2/5 bg-[#fcf5f3]">
        <div className="px-5">wrapper</div>
      </div>
    </div>
  );
}
