import Timer from "./components/Timer";
import SocialMedia from "./components/SocialMedia";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-neutral-300 bg-stars flex flex-col justify-between items-center">
      <h1 className="font-semibold text-white text-xl tracking-[0.5rem] w-full left-1/2 flex text-center justify-center translate-y-[11rem] lg:text-2xl">
        <p className="relative text-wrap mx-10">WE&apos;RE LAUNCHING SOON</p>
      </h1>
      <Timer />
      <SocialMedia />
    </div>
  );
}
