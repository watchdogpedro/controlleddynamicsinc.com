export default function RobotGantry7thAxis() {
  return (
    <svg
      viewBox="0 0 800 400"
      className="w-full h-auto"
      style={{ maxHeight: '400px' }}
    >
      {/* Grid background */}
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E5E7EB" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="800" height="400" fill="url(#grid)" />

      {/* Ground-mounted version (left) */}
      <g transform="translate(100, 100)">
        {/* Base track */}
        <rect x="0" y="120" width="250" height="30" fill="none" stroke="#0A1628" strokeWidth="2" />
        <line x1="10" y1="120" x2="10" y2="150" stroke="#0A1628" strokeWidth="1.5" />
        <line x1="240" y1="120" x2="240" y2="150" stroke="#0A1628" strokeWidth="1.5" />

        {/* Rail profile detail */}
        <rect x="20" y="125" width="15" height="20" fill="none" stroke="#0A1628" strokeWidth="1" />
        <rect x="215" y="125" width="15" height="20" fill="none" stroke="#0A1628" strokeWidth="1" />

        {/* Moving carriage */}
        <g transform="translate(80, 0)">
          {/* Carriage base */}
          <rect x="0" y="100" width="80" height="20" fill="none" stroke="#0A1628" strokeWidth="2" />

          {/* Vertical support */}
          <rect x="25" y="40" width="30" height="60" fill="none" stroke="#0A1628" strokeWidth="2" />

          {/* AngleLock connection detail */}
          <circle cx="30" cy="50" r="3" fill="none" stroke="#C9A227" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="3" fill="none" stroke="#C9A227" strokeWidth="1.5" />
          <circle cx="30" cy="90" r="3" fill="none" stroke="#C9A227" strokeWidth="1.5" />
          <circle cx="50" cy="90" r="3" fill="none" stroke="#C9A227" strokeWidth="1.5" />

          {/* Robot mounting plate */}
          <rect x="10" y="10" width="60" height="30" fill="none" stroke="#0A1628" strokeWidth="2" />
          <circle cx="20" cy="20" r="2" fill="#0A1628" />
          <circle cx="50" cy="20" r="2" fill="#0A1628" />
          <circle cx="20" cy="30" r="2" fill="#0A1628" />
          <circle cx="50" cy="30" r="2" fill="#0A1628" />

          {/* Simplified robot arm */}
          <circle cx="40" cy="0" r="8" fill="none" stroke="#6B7C93" strokeWidth="1.5" strokeDasharray="3,2" />
          <line x1="40" y1="-8" x2="40" y2="-25" stroke="#6B7C93" strokeWidth="2" strokeDasharray="3,2" />
        </g>

        {/* Dimension lines */}
        <line x1="0" y1="170" x2="250" y2="170" stroke="#0A1628" strokeWidth="0.5" markerEnd="url(#arrowhead)" markerStart="url(#arrowhead)" />
        <text x="125" y="185" fontSize="10" fill="#0A1628" textAnchor="middle" fontFamily="monospace">TRAVEL LENGTH</text>
      </g>

      {/* Overhead version (right) */}
      <g transform="translate(450, 50)">
        {/* Overhead beam */}
        <rect x="0" y="0" width="250" height="30" fill="none" stroke="#0A1628" strokeWidth="2" />
        <line x1="10" y1="0" x2="10" y2="30" stroke="#0A1628" strokeWidth="1.5" />
        <line x1="240" y1="0" x2="240" y2="30" stroke="#0A1628" strokeWidth="1.5" />

        {/* Moving carriage (inverted) */}
        <g transform="translate(80, 0)">
          {/* Carriage base */}
          <rect x="0" y="30" width="80" height="20" fill="none" stroke="#0A1628" strokeWidth="2" />

          {/* Vertical support (hanging) */}
          <rect x="25" y="50" width="30" height="60" fill="none" stroke="#0A1628" strokeWidth="2" />

          {/* AngleLock connections */}
          <circle cx="30" cy="60" r="3" fill="none" stroke="#C9A227" strokeWidth="1.5" />
          <circle cx="50" cy="60" r="3" fill="none" stroke="#C9A227" strokeWidth="1.5" />
          <circle cx="30" cy="100" r="3" fill="none" stroke="#C9A227" strokeWidth="1.5" />
          <circle cx="50" cy="100" r="3" fill="none" stroke="#C9A227" strokeWidth="1.5" />

          {/* Robot mounting plate */}
          <rect x="10" y="110" width="60" height="30" fill="none" stroke="#0A1628" strokeWidth="2" />
          <circle cx="20" cy="120" r="2" fill="#0A1628" />
          <circle cx="50" cy="120" r="2" fill="#0A1628" />
          <circle cx="20" cy="130" r="2" fill="#0A1628" />
          <circle cx="50" cy="130" r="2" fill="#0A1628" />

          {/* Simplified robot arm */}
          <circle cx="40" cy="148" r="8" fill="none" stroke="#6B7C93" strokeWidth="1.5" strokeDasharray="3,2" />
          <line x1="40" y1="156" x2="40" y2="175" stroke="#6B7C93" strokeWidth="2" strokeDasharray="3,2" />
        </g>

        {/* Label */}
        <text x="125" y="-10" fontSize="10" fill="#0A1628" textAnchor="middle" fontFamily="monospace">OVERHEAD MOUNT</text>
      </g>

      {/* Arrow marker definition */}
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#0A1628" />
        </marker>
      </defs>

      {/* Labels */}
      <text x="225" y="250" fontSize="12" fill="#0A1628" textAnchor="middle" fontFamily="Barlow Condensed" fontWeight="600">
        GROUND MOUNTED
      </text>
      <text x="575" y="250" fontSize="12" fill="#0A1628" textAnchor="middle" fontFamily="Barlow Condensed" fontWeight="600">
        OVERHEAD MOUNTED
      </text>

      {/* Notes */}
      <text x="50" y="350" fontSize="9" fill="#6B7C93" fontFamily="monospace">
        • ANGLELOCK MODULAR CONSTRUCTION
      </text>
      <text x="50" y="365" fontSize="9" fill="#6B7C93" fontFamily="monospace">
        • PRECISION LINEAR MOTION
      </text>
      <text x="50" y="380" fontSize="9" fill="#6B7C93" fontFamily="monospace">
        • VIBRATION-ISOLATED ROBOT MOUNTING
      </text>
    </svg>
  );
}
