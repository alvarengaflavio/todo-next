"use client";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { ToastClose } from "@radix-ui/react-toast";

interface ToastDestructiveProps {
  handleDelete: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

export function DeleteTodoBtn({
  handleDelete,
  children,
  ...props
}: ToastDestructiveProps) {
  const { toast } = useToast();

  return (
    <Button
      variant="destructive"
      disabled={props.disabled ?? false}
      {...props}
      onClick={() => {
        toast({
          variant: "destructive",
          title: "Confirmar Exclusão?",

          action: (
            <>
              <ToastAction
                altText="Tentar novamente"
                className="outline outline-1 outline-slate-100"
                onClick={handleDelete}
              >
                Confirmar
              </ToastAction>
              <ToastClose className="inline-flex h-8 shrink-0 items-center justify-center rounded-md outline outline-1 outline-slate-100 bg-slate-200 text-destructive px-3 text-sm font-medium transition-colors hover:bg-slate-300 focus:outline-2 disabled:pointer-events-none">
                Cancelar
              </ToastClose>
            </>
          ),
        });
      }}
    >
      {children}
    </Button>
  );
}
