type ChatRobotIconProps = {
  className?: string;
};

/** Minimal branded robot mark — gradient fill via SVG defs for crisp scaling. */
export default function ChatRobotIcon({ className = "h-7 w-7" }: ChatRobotIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="nexora-robot-gradient" x1="4" y1="4" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c4a3e8" />
          <stop offset="0.45" stopColor="#7b9fe8" />
          <stop offset="1" stopColor="#2dd4bf" />
        </linearGradient>
      </defs>
      {/* Antenna */}
      <line
        x1="14"
        y1="4"
        x2="14"
        y2="7.5"
        stroke="url(#nexora-robot-gradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="14" cy="3" r="1.25" fill="url(#nexora-robot-gradient)" />
      {/* Head */}
      <rect
        x="6.5"
        y="7.5"
        width="15"
        height="12"
        rx="4"
        stroke="url(#nexora-robot-gradient)"
        strokeWidth="1.75"
      />
      {/* Eyes */}
      <circle cx="11" cy="13" r="1.35" fill="url(#nexora-robot-gradient)" />
      <circle cx="17" cy="13" r="1.35" fill="url(#nexora-robot-gradient)" />
      {/* Mouth / speaker grille */}
      <path
        d="M11 17.5h6"
        stroke="url(#nexora-robot-gradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Body hint */}
      <path
        d="M10 22.5h8"
        stroke="url(#nexora-robot-gradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}
