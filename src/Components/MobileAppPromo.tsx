import { Award } from "lucide-react";
const MobileAppPromo: React.FC = () => {
  return (
    <div
      className="relative overflow-hidden rounded-2xl p-3 text-white mt-auto bg-[url('/mobileAdBg.png')] bg-cover bg-center"
      role="complementary"
      aria-label="Mobile App Promotion"
    >
      <div className="absolute inset-0 bg-black/40 rounded-2xl" />
      <div className="relative z-10 flex flex-col h-full">
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-white mb-2">
          <Award size={16} className="text-green2" />
        </div>

        <h3 className="text-xl font-light leading-none">
          <strong className="font-medium">Download</strong> our Mobile App
        </h3>

        <p className="text-[10px] text-white/80 mt-2 mb-6">
          Get easy in another way
        </p>

        <button className="mt-auto bg-green2 hover:bg-green2/90 transition-colors duration-200 w-full py-3 rounded-full text-xs font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
          Download
        </button>
      </div>
    </div>
  );
};

export default MobileAppPromo;
