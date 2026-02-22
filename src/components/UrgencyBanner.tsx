import { Flame } from "lucide-react";

const UrgencyBanner = () => {
  return (
    <div className="flex items-center justify-center gap-2 bg-primary/10 border border-primary/30 rounded-lg px-4 py-3 text-sm md:text-base">
      <Flame className="w-5 h-5 text-primary animate-pulse flex-shrink-0" />
      <span className="text-foreground font-medium">
        ⚡ Solo quedan <strong className="text-primary">5 plazas</strong> a este precio ⚡ — después sube a 37€
      </span>
      <Flame className="w-5 h-5 text-primary animate-pulse flex-shrink-0" />
    </div>
  );
};

export default UrgencyBanner;
