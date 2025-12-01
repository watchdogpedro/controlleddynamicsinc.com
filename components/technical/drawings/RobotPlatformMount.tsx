export default function RobotPlatformMount() {
  return (
    <svg
      viewBox="0 0 800 500"
      className="w-full h-auto"
      style={{ maxHeight: '500px' }}
    >
      {/* Grid background */}
      <defs>
        <pattern id="grid-platform" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E5E7EB" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="800" height="500" fill="url(#grid-platform)" />

      {/* Side view (left) */}
      <g transform="translate(150, 100)">
        <text x="75" y="-15" fontSize="12" fill="#0A1628" textAnchor="middle" fontFamily="Barlow Condensed" fontWeight="600">
          SIDE VIEW
        </text>

        {/* Floor */}
        <rect x="-50" y="250" width="250" height="10" fill="#E5E7EB" stroke="#0A1628" strokeWidth="1" />
        <path d="M -50,260 L -40,270 M -30,260 L -20,270 M -10,260 L 0,270 M 10,260 L 20,270 M 30,260 L 40,270 M 50,260 L 60,270 M 70,260 L 80,270 M 90,260 L 100,270 M 110,260 L 120,270 M 130,260 L 140,270 M 150,260 L 160,270 M 170,260 L 180,270 M 190,260 L 200,270"
          stroke="#0A1628" strokeWidth="1" />

        {/* Anchor bolts */}
        <rect x="10" y="240" width="8" height="20" fill="none" stroke="#0A1628" strokeWidth="1.5" />
        <rect x="132" y="240" width="8" height="20" fill="none" stroke="#0A1628" strokeWidth="1.5" />
        <circle cx="14" cy="245" r="2" fill="#6B7C93" />
        <circle cx="136" cy="245" r="2" fill="#6B7C93" />

        {/* Base plate */}
        <rect x="0" y="220" width="150" height="20" fill="none" stroke="#0A1628" strokeWidth="2.5" />

        {/* Vertical posts */}
        <rect x="10" y="80" width="25" height="140" fill="none" stroke="#0A1628" strokeWidth="2.5" />
        <rect x="115" y="80" width="25" height="140" fill="none" stroke="#0A1628" strokeWidth="2.5" />

        {/* AngleLock connections on posts */}
        <circle cx="22.5" cy="100" r="3" fill="#C9A227" stroke="#0A1628" strokeWidth="1" />
        <circle cx="22.5" cy="140" r="3" fill="#C9A227" stroke="#0A1628" strokeWidth="1" />
        <circle cx="22.5" cy="180" r="3" fill="#C9A227" stroke="#0A1628" strokeWidth="1" />

        <circle cx="127.5" cy="100" r="3" fill="#C9A227" stroke="#0A1628" strokeWidth="1" />
        <circle cx="127.5" cy="140" r="3" fill="#C9A227" stroke="#0A1628" strokeWidth="1" />
        <circle cx="127.5" cy="180" r="3" fill="#C9A227" stroke="#0A1628" strokeWidth="1" />

        {/* Top mounting platform */}
        <rect x="0" y="60" width="150" height="20" fill="none" stroke="#0A1628" strokeWidth="2.5" />

        {/* Robot base flange (dashed) */}
        <circle cx="75" cy="40" r="35" fill="none" stroke="#6B7C93" strokeWidth="2" strokeDasharray="4,3" />
        <circle cx="75" cy="40" r="15" fill="none" stroke="#6B7C93" strokeWidth="1.5" strokeDasharray="4,3" />

        {/* Mounting holes on top plate */}
        <circle cx="30" cy="70" r="2.5" fill="#0A1628" />
        <circle cx="120" cy="70" r="2.5" fill="#0A1628" />

        {/* Height dimension */}
        <line x1="-20" y1="220" x2="-20" y2="60" stroke="#0A1628" strokeWidth="0.5" markerEnd="url(#arrowhead-platform)" markerStart="url(#arrowhead-platform)" />
        <text x="-35" y="140" fontSize="9" fill="#0A1628" textAnchor="middle" fontFamily="monospace" transform="rotate(-90 -35 140)">
          HEIGHT
        </text>
      </g>

      {/* Top view (right) */}
      <g transform="translate(450, 150)">
        <text x="100" y="-15" fontSize="12" fill="#0A1628" textAnchor="middle" fontFamily="Barlow Condensed" fontWeight="600">
          TOP VIEW
        </text>

        {/* Base plate outline */}
        <rect x="0" y="0" width="200" height="200" fill="none" stroke="#0A1628" strokeWidth="2.5" />

        {/* Vertical posts (shown as squares) */}
        <rect x="15" y="15" width="25" height="25" fill="none" stroke="#0A1628" strokeWidth="2" />
        <rect x="160" y="15" width="25" height="25" fill="none" stroke="#0A1628" strokeWidth="2" />
        <rect x="15" y="160" width="25" height="25" fill="none" stroke="#0A1628" strokeWidth="2" />
        <rect x="160" y="160" width="25" height="25" fill="none" stroke="#0A1628" strokeWidth="2" />

        {/* AngleLock connection indicators */}
        <circle cx="27.5" cy="27.5" r="4" fill="#C9A227" stroke="#0A1628" strokeWidth="1" />
        <circle cx="172.5" cy="27.5" r="4" fill="#C9A227" stroke="#0A1628" strokeWidth="1" />
        <circle cx="27.5" cy="172.5" r="4" fill="#C9A227" stroke="#0A1628" strokeWidth="1" />
        <circle cx="172.5" cy="172.5" r="4" fill="#C9A227" stroke="#0A1628" strokeWidth="1" />

        {/* Anchor bolt positions */}
        <circle cx="40" cy="40" r="3" fill="#6B7C93" stroke="#0A1628" strokeWidth="1" />
        <circle cx="160" cy="40" r="3" fill="#6B7C93" stroke="#0A1628" strokeWidth="1" />
        <circle cx="40" cy="160" r="3" fill="#6B7C93" stroke="#0A1628" strokeWidth="1" />
        <circle cx="160" cy="160" r="3" fill="#6B7C93" stroke="#0A1628" strokeWidth="1" />

        {/* Center mounting hole pattern */}
        <circle cx="100" cy="100" r="50" fill="none" stroke="#6B7C93" strokeWidth="1" strokeDasharray="3,2" />
        <circle cx="75" cy="100" r="2.5" fill="#0A1628" />
        <circle cx="125" cy="100" r="2.5" fill="#0A1628" />
        <circle cx="100" cy="75" r="2.5" fill="#0A1628" />
        <circle cx="100" cy="125" r="2.5" fill="#0A1628" />

        {/* Center reference */}
        <line x1="95" y1="100" x2="105" y2="100" stroke="#C9A227" strokeWidth="1" />
        <line x1="100" y1="95" x2="100" y2="105" stroke="#C9A227" strokeWidth="1" />

        {/* Dimension lines */}
        <line x1="0" y1="220" x2="200" y2="220" stroke="#0A1628" strokeWidth="0.5" markerEnd="url(#arrowhead-platform)" markerStart="url(#arrowhead-platform)" />
        <text x="100" y="235" fontSize="9" fill="#0A1628" textAnchor="middle" fontFamily="monospace">
          BASE WIDTH
        </text>
      </g>

      {/* Arrow marker */}
      <defs>
        <marker id="arrowhead-platform" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#0A1628" />
        </marker>
      </defs>

      {/* Specifications */}
      <g transform="translate(50, 400)">
        <text x="0" y="0" fontSize="11" fill="#0A1628" fontFamily="Barlow Condensed" fontWeight="600">
          FEATURES:
        </text>
        <text x="0" y="18" fontSize="9" fill="#6B7C93" fontFamily="monospace">
          • PRECISION-MACHINED TOP PLATE FOR ACCURATE ROBOT MOUNTING
        </text>
        <text x="0" y="32" fontSize="9" fill="#6B7C93" fontFamily="monospace">
          • ANGLELOCK CORNER POSTS PROVIDE SUPERIOR RIGIDITY
        </text>
        <text x="0" y="46" fontSize="9" fill="#6B7C93" fontFamily="monospace">
          • FLOOR ANCHOR BOLTS FOR PERMANENT INSTALLATION
        </text>
        <text x="0" y="60" fontSize="9" fill="#6B7C93" fontFamily="monospace">
          • OPTIONAL LEVELING FEET FOR UNEVEN FLOORS
        </text>
        <text x="0" y="74" fontSize="9" fill="#6B7C93" fontFamily="monospace">
          • VIBRATION-ISOLATED DESIGN MAINTAINS ROBOT ACCURACY
        </text>
      </g>

      {/* Title */}
      <text x="400" y="40" fontSize="16" fill="#0A1628" textAnchor="middle" fontFamily="Barlow Condensed" fontWeight="700">
        ROBOT PLATFORM MOUNT - FLOOR BOLTED
      </text>
    </svg>
  );
}
