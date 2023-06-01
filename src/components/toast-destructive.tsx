"use client";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { ToastClose } from "@radix-ui/react-toast";

export function ToastDestructive() {
  const { toast } = useToast();

  return (
    <Button
      variant="destructive"
      onClick={() => {
        toast({
          variant: "destructive",
          title: "Deseja realmente excluir a tarefa?",

          action: (
            <>
              <ToastAction
                altText="Tentar novamente"
                className="outline outline-1 outline-slate-100"
              >
                Confirmar
              </ToastAction>
              <ToastClose className="inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-slate-200 text-red-900 px-3 text-sm font-medium ring-offset-slate-100 transition-colors hover:bg-red-900 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
                Cancelar
              </ToastClose>
              ,
            </>
          ),
        });
      }}
    >
      Excluir
    </Button>
  );
}
