interface ProgressCircleProps {
  progress: number
  size?: number
}

export function ProgressCircle({ progress, size = 80 }: ProgressCircleProps) {
  const radius = (size - 8) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-muted"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        className="text-accent transition-all"
      />
      <text x={size / 2} y={size / 2} textAnchor="middle" dy="0.3em" className="text-xs font-bold">
        {progress}%
      </text>
    </svg>
  )
}
