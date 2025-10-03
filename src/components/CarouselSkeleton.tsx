import { Skeleton } from "@/components/ui/skeleton";

const CarouselSkeleton = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-6">
      {/* Carousel Skeleton */}
      <div className="relative">
        <Skeleton className="w-full aspect-[1200/630] rounded-md" />
        
        {/* Navigation buttons skeleton */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
        
        {/* Dots indicator skeleton */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="w-3 h-3 rounded-full" />
          ))}
        </div>
      </div>

      {/* Quick Actions Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 mt-6">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-16 rounded-lg" />
        ))}
      </div>

      {/* Merchandise Section Skeleton */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-6 w-20" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-4">
              <Skeleton className="w-full h-32 rounded-md mb-3" />
              <Skeleton className="h-5 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2 mb-2" />
              <Skeleton className="h-6 w-20" />
            </div>
          ))}
        </div>
      </div>

      {/* Info Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6">
            <Skeleton className="h-6 w-48 mb-3" />
            <div className="space-y-2">
              {[...Array(4)].map((_, j) => (
                <Skeleton key={j} className="h-4 w-full" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselSkeleton;
