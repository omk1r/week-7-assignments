export function Assignment1() {
  return (
    <>
      <div className="w-full h-screen">
        <div className="bg-avatar-banner bg-cover bg-center bg-no-repeat w-full min-h-28 max-h-32"></div>
        <div className="flex flex-col justify-center items-center relative -top-16 border-b border-b-slate-300">
          <img
            src="/images/avatar-1.jpeg"
            alt="avatar"
            className="w-28 h-28 rounded-full"
          />
          <div className="mt-5">
            <span className="text-lg font-bold ">Rita Correia</span>
            <span className="pl-1 opacity-70">32</span>
          </div>
          <div className="opacity-70 pb-6">London</div>
        </div>
        <div className="flex justify-around -mt-10">
          <div className="flex flex-col justify-center items-center">
            <span className="text-lg font-bold ">80K</span>
            <span className="opacity-70 text-sm">Followers</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-lg font-bold ">803K</span>
            <span className="opacity-70 text-sm">Likes</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="text-lg font-bold ">1.4K</span>
            <span className="opacity-70 text-sm">Photos</span>
          </div>
        </div>
      </div>
    </>
  );
}
