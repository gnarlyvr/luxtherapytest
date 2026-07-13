type SoftBackdropProps = {
  className?: string;
};

/** Soft linen wash for section atmospheres */
export function SoftBackdrop({ className = "" }: SoftBackdropProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#f3f0e6]/80 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[#f7f4ec]/90 blur-3xl" />
      <div className="absolute inset-0 soft-grain opacity-25" />
    </div>
  );
}
