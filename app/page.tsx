
import CHeader from "./components/common/CHeader";
import HomePage from "./Home";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <video
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[270deg] w-[100vh] h-[100vw] object-cover -z-10"
        src="/Aura.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <CHeader />
      <div className="p-5">
        {/* Outlet: initial page is Home */}
        <HomePage />
      </div>
    </div>
  );
}
