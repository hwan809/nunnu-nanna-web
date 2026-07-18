type MascotProps = {
  size?: number;
  className?: string;
  legs?: boolean;
};

/** 눈누 — 눈알 마스코트. blush + 다리 + 주기적 깜빡임. */
export default function Mascot({ size = 160, className = "", legs = true }: MascotProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 210"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="nnIris" cx="0.42" cy="0.36" r="0.85">
          <stop offset="0%" stopColor="#7ee0f2" />
          <stop offset="100%" stopColor="#1d9dbd" />
        </radialGradient>
      </defs>
      {legs && (
        <g stroke="#17324a" strokeWidth="6" strokeLinecap="round">
          <line x1="82" y1="170" x2="77" y2="192" />
          <line x1="118" y1="170" x2="123" y2="192" />
        </g>
      )}
      {legs && (
        <g fill="#17324a">
          <ellipse cx="73" cy="196" rx="11" ry="5" />
          <ellipse cx="127" cy="196" rx="11" ry="5" />
        </g>
      )}
      <circle cx="100" cy="96" r="78" fill="#ffffff" stroke="#dcf3fa" strokeWidth="6" />
      <g className="nn-mascot-blink">
        <circle cx="100" cy="96" r="42" fill="url(#nnIris)" />
        <circle cx="100" cy="96" r="19" fill="#17324a" />
        <circle cx="111" cy="84" r="8" fill="#ffffff" />
      </g>
      <ellipse cx="42" cy="124" rx="11" ry="7" fill="#ffd3dd" />
      <ellipse cx="158" cy="124" rx="11" ry="7" fill="#ffd3dd" />
    </svg>
  );
}
