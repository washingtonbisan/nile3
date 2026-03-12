// components/NileLogo.tsx
// Uses the real Nile University SVG logo from /public/
// The logo image already contains the full crest + text branding,
// so we just display it alongside the university name text.

interface NileLogoProps {
  dark?: boolean; // dark=true for white text (on navy bg)
  size?: "sm" | "md" | "lg";
}

export default function NileLogo({ dark = false, size = "md" }: NileLogoProps) {
  const textColor = dark ? "text-white" : "text-[#1a237e]";
  const subColor = dark ? "text-white/70" : "text-[#1a237e]/80";
  const greenBar = dark ? "bg-green-400" : "bg-[#2e7d32]";

  // Logo image size
  const imgSize =
    size === "sm"
      ? "h-14 w-auto"
      : size === "lg"
        ? "h-24 w-auto"
        : "h-18 w-auto";

  // Text sizes beside the logo
  const titleSize =
    size === "sm" ? "text-sm" : size === "lg" ? "text-2xl" : "text-lg";
  const subSize =
    size === "sm" ? "text-[9px]" : size === "lg" ? "text-xs" : "text-[10px]";

  return (
    <div className="flex items-center gap-3">
      {/* Real Nile University logo image */}
      <img
        src="/Logo-Nile-University-of-Nigeria.svg"
        alt="Nile University of Nigeria"
        className={`${imgSize} object-contain`}
      />

      {/* University name text to the right of logo
      <div>
        <p className={`font-bold leading-tight ${textColor} ${titleSize}`}>NILE UNIVERSITY</p>
        <p className={`font-bold leading-tight ${textColor} ${titleSize}`}>OF NIGERIA</p>
        <div className={`h-0.5 w-full ${greenBar} my-0.5`} />
        <p className={`tracking-widest uppercase ${subColor} ${subSize}`}>
          HONORIS UNITED UNIVERSITIES
        </p>
      </div> */}
    </div>
  );
}
