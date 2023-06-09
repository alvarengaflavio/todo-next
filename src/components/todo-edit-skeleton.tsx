import { cn } from "@/lib/utils";
import { FC } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";

interface TodoPageSkeleton {
  className?: string;
}

export const TodoEditSkeleton: FC<TodoPageSkeleton> = ({ className }) => {
  return (
    <div
      className={cn(
        "container text-center flex flex-col items-center",
        className
      )}
    >
      <Card
        className={
          "min-h-[340px] w-3/4 p-4 my-4 dark:shadow-foreground/10 shadow-md space-y-6"
        }
      >
        <Skeleton className="h-6 w-1/4 mx-auto mt-6" />

        <Skeleton className="h-32 w-3/4 mt-20 rounded-lg mx-auto" />

        <Skeleton className="h-6 w-1/4 mx-auto" />
        <Skeleton className="h-4 w-1/3 mx-auto rounded-full" />
      </Card>

      <div className="text-4xl w-3/4 font-bold my-2 flex justify-between gap-2">
        <Button variant={"outline"} disabled>
          Voltar
        </Button>

        <div className="flex gap-x-2">
          <Button variant={"default"} disabled>
            Editar
          </Button>
          <Button variant={"destructive"} disabled>
            Excluir
          </Button>
        </div>
      </div>
    </div>
  );
};
