import { Icons } from "@/components/icons";
import axios from "axios";

// export const dynamic = "force-dynamic";
// force dynamic rendering for this page
export const revalidate = 3600; // revalidate every hour

const page = async ({}) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  const date = new Date();

  return (
    <section className="my-5 rounded-sm bg-slate-200 dark:bg-slate-800">
      <article>
        <h1 className="font-bold text-4xl text-center my-2 mx-auto p-2 max-w-2xl">
          {String(data.title).toUpperCase()}
        </h1>
        <p className="text-xl text-center my-5 mx-auto px-20">{data.body}</p>

        <div className="flex flex-col items-center mb-5">
          <p className="text-center text-xl text-slate-500">
            {date.toLocaleDateString("pt-BR", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <Icons.logoBig />
        </div>
      </article>
    </section>
  );
};

export default page;
