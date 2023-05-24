import { FC } from "react";

interface PageProps {}

const Create: FC<PageProps> = () => {
  return (
    <>
      <div className="text-xl w-1/4 h-[57vh] mx-auto mt-60">
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
    </>
  );
};

export default Create;
