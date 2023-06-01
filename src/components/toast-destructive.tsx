"use client";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { ToastClose } from "@radix-ui/react-toast";

interface ToastDestructiveProps {}

export function ToastDestructive({}: ToastDestructiveProps) {
  const { toast } = useToast();

  async function handleDelete() {
    console.log("deletar");
  }

  return (
    <Button
      variant="destructive"
      onClick={() => {
        toast({
          variant: "destructive",
          title: "Confirmar Exclusão?",

          action: (
            <>
              <ToastAction
                altText="Tentar novamente"
                className="outline outline-1 outline-slate-100"
                onClick={() => handleDelete()}
              >
                Confirmar
              </ToastAction>
              <ToastClose className="inline-flex h-8 shrink-0 items-center justify-center rounded-md outline outline-1 outline-slate-100 bg-slate-200 text-red-900 px-3 text-sm font-medium transition-colors hover:bg-red-900 hover:text-slate-100 focus:outline-2  focus:outline-black disabled:pointer-events-none">
                Cancelar
              </ToastClose>
            </>
          ),
        });
      }}
    >
      Excluir
    </Button>
  );
}
