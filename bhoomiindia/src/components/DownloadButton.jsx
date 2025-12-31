import { Download } from "lucide-react";


const DownloadButton = ({ label = "Download", onClick }) => {
   return (
      <button
         onClick={onClick}
         className="group relative inline-flex items-center gap-3 px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium text-lg tracking-wide overflow-hidden transition-all duration-300 ease-out hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]"
      >
         {/* Background shimmer effect */}
         <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

         {/* Icon container with animation */}
         <span className="relative flex items-center justify-center w-6 h-6 overflow-hidden">
            <Download
               className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-y-6"
               strokeWidth={2.5}
            />
            <Download
               className="absolute w-5 h-5 -translate-y-6 transition-transform duration-300 ease-out group-hover:translate-y-0"
               strokeWidth={2.5}
            />
         </span>

         {/* Label */}
         <span className="relative">{label}</span>
      </button>
   );
};

export default DownloadButton;
