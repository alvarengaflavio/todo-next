"use client";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export function ToastDestructive() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          variant: "destructive",
          title: "Oh não! Algo deu errado.",
          description: "Ocorreu um problema com a sua requisição.",
          action: (
            <ToastAction
              altText="Tentar novamente"
              className="outline outline-1 outline-slate-100"
            >
              Reenviar
            </ToastAction>
          ),
        });
      }}
    >
      Mostrar Toast
    </Button>
  );
}
