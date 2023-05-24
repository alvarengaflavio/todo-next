import { FC } from "react";

interface LoadingProps {}

const Loading: FC<LoadingProps> = () => {
  return <div className="text-5xl animate-pulse">Carregando</div>;
};

export default Loading;
