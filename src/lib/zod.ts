import { z } from "zod";

export const createTodoSchema = z.object({
  title: z
    .string()
    .min(6, {
      message: "A tarefa deve ter no mínimo 6 caracteres.",
    })
    .max(45, {
      message: "A tarefa deve ter no máximo 45 caracteres.",
    })
    .nonempty({
      message: "A tarefa não pode ser vazia.",
    }),
});
