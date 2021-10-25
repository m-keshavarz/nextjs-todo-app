import { useRouter } from "next/router";
import Link from "next/link";

const TaskPage = () => {
  const router = useRouter();
  const { id, name, createdAt } = router.query;

  console.log({ id, name, createdAt });

  return (
    <div className="pl-60 mt-20">
      <p className="text-5xl mb-10">task name: {name}</p>
      <p className=" text-4xl">task id: {id}</p>
      <Link
        href={{
          pathname: `/todo/createdAt`,
          query: {
            createdAt
          }
        }}
      >
        <a className="text-4xl text-blue-400">see when it was created</a>
      </Link>
      <p
        className="text-blue-400 cursor-pointer mt-20"
        onClick={() => router.push("/todo")}
      >
        tasks page
      </p>
      <Link href="/">
        <a className="text-blue-400">Back to Home</a>
      </Link>
    </div>
  );
};

export default TaskPage;
