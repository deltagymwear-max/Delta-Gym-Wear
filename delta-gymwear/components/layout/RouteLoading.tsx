import { Skeleton } from "@/components/ui/skeleton";

export function RouteLoading() {
  return (
    <div className="min-h-screen bg-zinc-50 px-5 pb-20 pt-36 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1600px]">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="mt-5 h-20 max-w-2xl" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} className="aspect-[4/5]" />)}
        </div>
      </div>
    </div>
  );
}
