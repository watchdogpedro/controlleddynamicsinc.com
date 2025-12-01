'use client';

interface TechnicalDrawingProps {
  title: string;
  children: React.ReactNode;
  dimensions?: string;
  className?: string;
}

export default function TechnicalDrawing({ title, children, dimensions, className = '' }: TechnicalDrawingProps) {
  return (
    <div className={`bg-white border-2 border-[#0A1628] ${className}`}>
      {/* Title Block */}
      <div className="border-b-2 border-[#0A1628] p-4 bg-[#F4F6F8]">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-['Barlow_Condensed'] text-lg font-bold text-[#0A1628]">
              {title}
            </h3>
            {dimensions && (
              <p className="text-sm text-[#6B7C93] font-mono">{dimensions}</p>
            )}
          </div>
          <div className="text-right">
            <div className="text-xs text-[#6B7C93] font-mono">CONTROLLED DYNAMICS INC.</div>
            <div className="text-xs text-[#6B7C93] font-mono">ANGLELOCK TECHNOLOGY</div>
          </div>
        </div>
      </div>

      {/* Drawing Area */}
      <div className="p-8 bg-white">
        {children}
      </div>
    </div>
  );
}
