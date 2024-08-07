import Link from "next/link";
import {
  PencilSquareIcon,
  EyeIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="flex justify-between text-gray-950 dark:text-gray-200 items-center gap-4 p-4 border-2 bg-gray-100 dark:bg-gray-800 rounded w-full sm:w-2/3 lg:w-1/2 mx-auto">
      <div>
        <h3 className={`${todo.completed ? "line-through" : ""}`}>
          {todo.title}
        </h3>
        <p>ID: {todo.id}</p>
      </div>
      <div className="flex gap-2">
        <Link href={`/todos/${todo.id}`} passHref>
          <button className="p-2 bg-yellow-500 text-white rounded flex items-center">
            <EyeIcon className="h-5 w-5" />
          </button>
        </Link>
        <Link href={`/todos/${todo.id}/edit`}>
          <button className="p-2 bg-blue-500 text-white rounded flex items-center">
            <PencilSquareIcon className="h-5 w-5" />
          </button>
        </Link>
        <button
          onClick={() => onDelete(todo.id)}
          className="p-2 bg-red-500 text-white rounded flex items-center"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
