import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function CardSkaleton() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <Skeleton className="aspect-video w-full" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-2/3 mb-2" />
        <Skeleton className="h-4 w-1/2" />
      </CardContent>
    </Card>
  );
}
