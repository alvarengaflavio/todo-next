import { FC } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";

interface TodoSkeletonProp {
  className?: string;
}

export const TodoSkeleton: FC<TodoSkeletonProp> = ({ className }) => {
  return (
    <Card
      className={cn("flex justify-between w-full p-0 min-h-[200px]", className)}
    >
      <CardHeader className="p-0 w-1/12">
        <Skeleton className="h-8 w-8 m-auto rounded-full" />
      </CardHeader>

      <CardContent className="flex flex-col flex-1 p-0 justify-between w-10/12">
        <Skeleton className="h-10 w-3/4 mt-20 mx-auto" />
        <Skeleton className="h-4 w-1/3 mb-8 mx-auto" />
      </CardContent>

      <CardFooter className="w-1/12 p-0">
        <Skeleton className="h-4 w-8 m-auto rounded-full" />
      </CardFooter>
    </Card>
  );
};

TodoSkeleton.defaultProps = {
  className: "",
};
