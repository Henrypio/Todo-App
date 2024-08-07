import Link from "next/link";
import {
  PencilSquareIcon,
  EyeIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="flex justify-between text-gray-950 dark:text-gray-200 items-center gap-4 p-4 border-2 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 rounded w-full sm:w-2/3 lg:w-1/2 mx-auto">
      <div>
        <h3 className={`${todo.completed ? "line-through" : ""}`}>
          {todo.title}
        </h3>
        <p>ID: {todo.id}</p>
      </div>
      <div className="flex gap-2">
        <Link href={`/todos/${todo.id}`} passHref>
          <button className="p-2 bg-yellow-500 dark:bg-yellow-600 text-white rounded flex items-center hover:bg-yellow-400 dark:hover:bg-yellow-500 transition-colors">
            <EyeIcon className="h-5 w-5" />
          </button>
        </Link>
        <Link href={`/todos/${todo.id}/edit`}>
          <button className="p-2 bg-blue-500 dark:bg-blue-600 text-white rounded flex items-center hover:bg-blue-400 dark:hover:bg-blue-500 transition-colors">
            <PencilSquareIcon className="h-5 w-5" />
          </button>
        </Link>
        <button
          onClick={() => onDelete(todo.id)}
          className="p-2 bg-red-500 dark:bg-red-600 text-white rounded flex items-center hover:bg-red-400 dark:hover:bg-red-500 transition-colors"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
