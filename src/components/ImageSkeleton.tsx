interface ImageSkeletonProps {
  className?: string;
}

export default function ImageSkeleton({ className = "" }: ImageSkeletonProps) {
  return (
    <div
      className={`relative overflow-hidden bg-gray-200 animate-pulse ${className}`}
    >
      {/* Skeleton content that mimics an image */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
        {/* Subtle shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
      </div>

      {/* Optional: Add a subtle icon or pattern */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full opacity-50"></div>
      </div>
    </div>
  );
}
