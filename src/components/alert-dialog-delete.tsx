"use client";

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

interface DeleteAlertProps {
  handleDelete: () => void;
}

const DeleteAlertDialog: FC<DeleteAlertProps> = ({ handleDelete }) => {
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
            onClick={handleDelete}
          >
            Excluir
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { DeleteAlertDialog };
