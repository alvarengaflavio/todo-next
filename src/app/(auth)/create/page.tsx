import { FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = () => {
  return (
    <div className="text-xl w-1/4 h-1/2 mx-auto mt-60">
      <form className="flex flex-col flex-wrap basis-1">
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      create a new user
    </div>
  );
};

export default Page;
