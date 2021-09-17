import React from "react";

interface ListProps {
  items: { name: string }[];
}

const List = ({ items }: ListProps) => {
  return (
    <div className="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
      <ul className="flex flex-col w-full divide divide-y">
        {items.map((item) => {
          return (
            <li className="flex flex-row justify-center items-center select-none cursor-pointer p-4">
              <div className="font-medium dark:text-white">{item.name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
