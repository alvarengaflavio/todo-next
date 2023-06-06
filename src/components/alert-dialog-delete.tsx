import { FC } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { buttonVariants } from "./ui/button";

interface DeleteAlertProps {}

const DeleteAlertDialog: FC<DeleteAlertProps> = ({}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        className={buttonVariants({ variant: "destructive" })}
      >
        Excluir
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Está certo disso?</AlertDialogTitle>
          <AlertDialogDescription>
            Você está prestes a excluir uma tarefa. Essa ação não pode ser
            desfeita. Tem certeza que deseja continuar?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className={"w-[5.55rem]"}>
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            className={
              buttonVariants({ variant: "destructive" }) + " w-[5.55rem]"
            }
          >
            Excluir
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { DeleteAlertDialog };
