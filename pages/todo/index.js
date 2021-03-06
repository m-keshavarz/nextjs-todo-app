import Link from "next/link";
import { useState } from "react";

import Task from "../../components/task";
import { getAPI, postAPI } from "../api/api";

export default function ToDo({ data }) {
  const [inputChange, setInputChange] = useState("");

  const handleAddTask = () => {
    postAPI("/tasks2", {
      name: "mohamad keshavarz",
      createdAt: 'just now',
      task: inputChange,
      id: '4884'
    });
  };

  return (
    <>
      <div className=" text-6xl text-black pl-60 pt-10">Tasks</div>
      <div className="text-3xl text-green-400 pl-60 pt-10 pb-4">
        <label htmlFor="task">AddTask:</label>
        <input
          id="task"
          type="text"
          placeholder="New Task"
          className="border-2 rounded-xl ml-4 pl-4 text-black text-lg mr-4 focus:border-2 focus:rounded-xl outline-none"
          onChange={e => setInputChange(e.target.value)}
        />
        <button
          className="bg-green-600 text-white text-lg w-20 rounded-xl"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
      <div className="p-60 pb-4 pt-4 flex flex-wrap">
        {data &&
          data?.map(item => {
            return (
              <Task
                key={item.id}
                name={item.name}
                createdAt={item.createdAt}
                task={item.task}
                pathname={`/todo/tid`}
                id={item.id}
              />
            );
          })}
      </div>
      <div className="pl-60 pb-60">
        <Link href="/">
          <a className="text-blue-500 mt-10 block hover:underline">
            Back To Home
          </a>
        </Link>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await getAPI("/tasks2");

  return {
    props: {
      data: data.data
    },
    revalidate: 10
  };
}
