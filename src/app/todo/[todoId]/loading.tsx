import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface PageProps {}

const TodoPageLoading = ({}: PageProps) => {
  return (
    <div className="text-center container flex flex-col items-center">
      <Card className="w-3/4 p-4 my-4 dark:shadow-foreground/10 shadow-md ">
        <CardContent className="text-4xl">
          <Skeleton className="w-1/2 h-12" />
        </CardContent>

        <CardDescription className="text-xl">
          <Skeleton className="w-1/2 h-12" />
        </CardDescription>

        <CardFooter className="text-center text-lg text-slate-500">
          <Skeleton className="w-1/2 h-12" />
        </CardFooter>
      </Card>

      <div className="text-4xl w-3/4 font-bold my-2 flex justify-between gap-2">
        <Button variant={"outline"} disabled={true}>
          Voltar
        </Button>

        <div className="flex gap-x-2">
          <Button variant={"default"} disabled={true}>
            Editar
          </Button>

          <Button variant={"destructive"} disabled={true}>
            Excluir
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoPageLoading;
