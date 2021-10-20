
export default function Task ({createdAt, name, task}) {
	return (
    <div className="p-4 text-xs text-blue-300 border-2 shadow-lg flex flex-col ml-4 mt-4 hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out hover:shadow-2xl">
      <p className="text-red-300 mb-2">{createdAt}</p>
      <p className="text-black mb-2">{name}</p>
      <p>{task}</p>
    </div>
  );
}