const Skeleton = ({ className }) => (
    <div className={`bg-gray-300 animate-pulse ${className}`}></div>
);
  
const CoverSkeleton = () => (
    <div className="fixed inset-0 bg-gray-100 z-50">
        <div className="h-full w-full bg-gradient-to-r from-gray-300 to-gray-400 animate-pulse relative">
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <Skeleton className="w-10 h-10 md:w-20 md:h-20 rounded" />
                </div>
                <div className="hidden md:flex items-center justify-center flex-1 space-x-4">
                    {Array(7).fill().map((_, i) => 
                        (
                            <Skeleton key={i} className="w-20 h-8 rounded" />
                        ))
                    }
                </div>
                <div className="flex items-center">
                    <Skeleton className="w-8 h-8 rounded-full mr-2" />
                    <div className="md:hidden">
                        <Skeleton className="w-8 h-8 rounded" />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-[4%] md:top-2/3 md:left-0 md:transform md:-translate-y-2/3 w-full p-4 md:pl-8">
                <div className="text-left">
                    <Skeleton className="w-3/4 h-16 md:h-24 rounded mb-4" />
                    <Skeleton className="w-1/2 h-8 md:h-12 rounded mb-4" />
                    <Skeleton className="w-40 h-12 rounded-full" />
                </div>
            </div>
        </div>
    </div>
);
  
  export { Skeleton, CoverSkeleton };
  