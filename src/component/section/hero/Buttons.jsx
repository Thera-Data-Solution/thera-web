import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function Buttons({ buttons, type="default" }) {
  const classNames = (idx) => {
    if(type === 'overlay' && idx !== 0){
      return "bg-earth-600/60 text-white hover:bg-earth-500";
    } else {
      if(idx === 0){
        return "bg-earth-600 text-white hover:bg-earth-500";
      } else {
        return "border border-earth-400 text-earth-900 hover:bg-earth-100";
      }
    }
  }
  if (!buttons?.length) return null;
  return (
    <div className="flex flex-wrap items-center gap-4">
      {buttons.slice(0, 2).map((b, idx) => (
        <Link
          key={`${b.to}-${idx}`}
          to={b.to}
          className={`inline-flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
            classNames(idx)
          }`}
        >
          <span className="mr-2 font-medium tracking-wide">{b.text}</span>
          <ArrowRight size={18} />
        </Link>
      ))}
    </div>
  );
}