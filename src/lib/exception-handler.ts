import { Prisma } from "@prisma/client";

export function exceptionHandler(error: any) {
  if (error instanceof Prisma.PrismaClientValidationError) {
    const errObj = buildPrismaErrorObject(error);

    return new Response(JSON.stringify(errObj), {
      status: errObj.code ?? 400,
      statusText: errObj.name ?? "Bad Request",
    });
  }

  const message = buildErrorObject(error);

  return new Response(JSON.stringify(message), {
    status: message.code ?? 500,
    statusText: message.name ?? "Internal Server Error",
  });
}

// * HELPERS FUNCTIONS

const buildErrorObject = (error: any): ErrorObject => {
  if (error instanceof SyntaxError) {
    return {
      name: "Bad Request",
      message: "Invalid JSON",
      code: 400,
    };
  }

  return {
    name: error?.name ?? "Internal Server Error",
    message: error?.message ?? "Internal Server Error",
    code: error?.code ?? 500,
  };
};

const getPrismaError = (error: any) => {
  return error.message
    .split("\n")
    .map((line: string) => {
      if (line.includes("Argument title:")) {
        return line.split("Argument title:")[1].trim();
      }
    })
    .join("");
};

const buildPrismaErrorObject = (
  error: Prisma.PrismaClientValidationError
): ErrorObject => {
  return {
    name: "Bad Request",
    code: (error?.cause as number) ?? 400,
    message: getPrismaError(error) ?? "Internal Server Error",
  };
};

interface ErrorObject {
  name: string;
  message: string;
  code: number;
}
