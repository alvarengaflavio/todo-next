import { FC } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Skeleton } from "./ui/skeleton";

interface PageProps {}

export const TodoSkeleton: FC<PageProps> = ({}) => {
  return (
    <Card>
      <CardHeader className="gap-2">
        <CardTitle>
          <Skeleton className="h-4 w-3/5 mx-auto" />
        </CardTitle>
        <Skeleton className="h-4 w-4/5 mx-auto" />
        <Skeleton className="h-4 w-2/5 mx-auto" />
      </CardHeader>

      <CardContent>
        <Skeleton className="h-20 w-full" />
      </CardContent>

      <CardContent>
        <Skeleton className="h-4 w-full" />
      </CardContent>

      <CardFooter>
        <Skeleton className="h-4 w-1/4 mx-auto" />
      </CardFooter>
    </Card>
  );
};
