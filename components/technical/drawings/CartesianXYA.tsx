export default function CartesianXYA() {
  return (
    <svg
      viewBox="0 0 800 600"
      className="w-full h-auto"
      style={{ maxHeight: '600px' }}
    >
      {/* Grid background */}
      <defs>
        <pattern id="grid-xya" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E5E7EB" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="800" height="600" fill="url(#grid-xya)" />

      {/* Isometric view */}
      <g transform="translate(200, 150)">
        {/* Base frame (1m x 1m) */}
        {/* Bottom rectangle - isometric */}
        <path
          d="M 0,250 L 200,150 L 400,250 L 200,350 Z"
          fill="none"
          stroke="#0A1628"
          strokeWidth="3"
        />

        {/* Vertical corner posts */}
        <line x1="0" y1="250" x2="0" y2="50" stroke="#0A1628" strokeWidth="3" />
        <line x1="200" y1="150" x2="200" y2="-50" stroke="#0A1628" strokeWidth="3" />
        <line x1="400" y1="250" x2="400" y2="50" stroke="#0A1628" strokeWidth="3" />
        <line x1="200" y1="350" x2="200" y2="150" stroke="#0A1628" strokeWidth="3" />

        {/* Top frame */}
        <path
          d="M 0,50 L 200,-50 L 400,50 L 200,150 Z"
          fill="none"
          stroke="#0A1628"
          strokeWidth="3"
        />

        {/* Cross bracing - X axis */}
        <line x1="50" y1="225" x2="150" y2="175" stroke="#0A1628" strokeWidth="1.5" strokeDasharray="4,2" />
        <line x1="250" y1="175" x2="350" y2="225" stroke="#0A1628" strokeWidth="1.5" strokeDasharray="4,2" />

        {/* Y-axis linear rail (horizontal beam) */}
        <rect x="180" y="-60" width="40" height="220" fill="none" stroke="#0A1628" strokeWidth="2.5" />

        {/* Y-axis carriage */}
        <g transform="translate(0, 30)">
          <rect x="170" y="20" width="60" height="30" fill="none" stroke="#0A1628" strokeWidth="2" />

          {/* X-axis beam attached to Y carriage */}
          <rect x="30" y="15" width="340" height="20" fill="none" stroke="#0A1628" strokeWidth="2.5" />

          {/* X-axis carriage */}
          <g transform="translate(120, 0)">
            <rect x="0" y="5" width="30" height="40" fill="none" stroke="#0A1628" strokeWidth="2" />

            {/* Z-axis (vertical axis for rotation) */}
            <rect x="5" y="-40" width="20" height="45" fill="none" stroke="#0A1628" strokeWidth="2" />

            {/* Rotation axis (A-axis) */}
            <circle cx="15" cy="-50" r="15" fill="none" stroke="#C9A227" strokeWidth="2.5" />
            <circle cx="15" cy="-50" r="8" fill="none" stroke="#C9A227" strokeWidth="1.5" />
            <line x1="15" y1="-50" x2="15" y2="-65" stroke="#C9A227" strokeWidth="2" />

            {/* Tool/gripper indicator */}
            <rect x="8" y="-75" width="14" height="10" fill="none" stroke="#6B7C93" strokeWidth="1.5" strokeDasharray="2,2" />
          </g>
        </g>

        {/* AngleLock connection points */}
        <circle cx="0" cy="250" r="4" fill="#C9A227" stroke="#0A1628" strokeWidth="1" />
        <circle cx="200" cy="150" r="4" fill="#C9A227" stroke="#0A1628" strokeWidth="1" />
        <circle cx="400" cy="250" r="4" fill="#C9A227" stroke="#0A1628" strokeWidth="1" />
        <circle cx="200" cy="350" r="4" fill="#C9A227" stroke="#0A1628" strokeWidth="1" />

        <circle cx="0" cy="50" r="4" fill="#C9A227" stroke="#0A1628" strokeWidth="1" />
        <circle cx="200" cy="-50" r="4" fill="#C9A227" stroke="#0A1628" strokeWidth="1" />
        <circle cx="400" cy="50" r="4" fill="#C9A227" stroke="#0A1628" strokeWidth="1" />
        <circle cx="200" cy="150" r="4" fill="#C9A227" stroke="#0A1628" strokeWidth="1" />
      </g>

      {/* Dimension annotations */}
      <g transform="translate(200, 150)">
        {/* 1000mm dimension */}
        <line x1="-30" y1="250" x2="-30" y2="50" stroke="#0A1628" strokeWidth="0.5" markerEnd="url(#arrowhead-xya)" markerStart="url(#arrowhead-xya)" />
        <text x="-45" y="150" fontSize="10" fill="#0A1628" textAnchor="middle" fontFamily="monospace" transform="rotate(-90 -45 150)">
          1000mm
        </text>

        {/* Work envelope circle */}
        <circle cx="200" cy="100" r="120" fill="none" stroke="#C9A227" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />
      </g>

      {/* Axis labels */}
      <g transform="translate(200, 150)">
        {/* X axis */}
        <text x="200" y="210" fontSize="14" fill="#0A1628" textAnchor="middle" fontFamily="Barlow Condensed" fontWeight="600">
          X AXIS
        </text>
        <line x1="50" y1="205" x2="350" y2="205" stroke="#C9A227" strokeWidth="1.5" markerEnd="url(#arrowhead-xya)" />

        {/* Y axis */}
        <text x="160" y="100" fontSize="14" fill="#0A1628" textAnchor="middle" fontFamily="Barlow Condensed" fontWeight="600">
          Y
        </text>
        <line x1="185" y1="160" x2="185" y2="-40" stroke="#C9A227" strokeWidth="1.5" markerEnd="url(#arrowhead-xya)" />

        {/* A axis (rotation) */}
        <text x="320" y="-40" fontSize="14" fill="#C9A227" textAnchor="middle" fontFamily="Barlow Condensed" fontWeight="600">
          A-AXIS (θ)
        </text>
        <path d="M 335,-30 Q 345,-25 335,-20" fill="none" stroke="#C9A227" strokeWidth="1.5" markerEnd="url(#arrowhead-xya)" />
      </g>

      {/* Arrow marker */}
      <defs>
        <marker id="arrowhead-xya" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#0A1628" />
        </marker>
      </defs>

      {/* Specifications */}
      <g transform="translate(50, 450)">
        <text x="0" y="0" fontSize="11" fill="#0A1628" fontFamily="Barlow Condensed" fontWeight="600">
          SPECIFICATIONS:
        </text>
        <text x="0" y="20" fontSize="9" fill="#6B7C93" fontFamily="monospace">
          • WORK ENVELOPE: 1000mm x 1000mm x 500mm (X/Y/Z)
        </text>
        <text x="0" y="35" fontSize="9" fill="#6B7C93" fontFamily="monospace">
          • A-AXIS ROTATION: ±180° continuous
        </text>
        <text x="0" y="50" fontSize="9" fill="#6B7C93" fontFamily="monospace">
          • REPEATABILITY: ±0.05mm
        </text>
        <text x="0" y="65" fontSize="9" fill="#6B7C93" fontFamily="monospace">
          • PAYLOAD CAPACITY: 25kg
        </text>
        <text x="0" y="80" fontSize="9" fill="#6B7C93" fontFamily="monospace">
          • ANGLELOCK MODULAR CONSTRUCTION - FULLY RECONFIGURABLE
        </text>
      </g>

      {/* Title */}
      <text x="400" y="40" fontSize="16" fill="#0A1628" textAnchor="middle" fontFamily="Barlow Condensed" fontWeight="700">
        XYA CARTESIAN ROBOT SYSTEM
      </text>
    </svg>
  );
}
