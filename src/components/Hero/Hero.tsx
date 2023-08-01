export const Hero = () => {
  return (
    <div>
      {/*<div className="relative">*/}
      {/*  <img*/}
      {/*    src="/images/hero-background.jpeg"*/}
      {/*    alt="Splash image"*/}
      {/*    className="h-full w-full object-cover"*/}
      {/*  />*/}
      {/*</div>*/}
      <div className="py-16 px-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-center">
          <span className="block">Create your poll</span>
          <span className="block">in seconds</span>
        </h1>
        <p className="mt-6 text-center text-base">
          Want to ask your friends where to go friday night or arrange a meeting
          with co-workers? Create a poll - and get answers in no time.
        </p>
      </div>
    </div>
  );
};
