import React from "react";

interface ListProps {
  items: { name: string; url: string }[];
  onItemClick?: (id: string) => void;
}

const List = ({ items, onItemClick }: ListProps) => {
  const getIdFromUrl = (url: string) => {
    const regex = /(?<=\/)(100|[1-9]?[0-9])(?=\/$)/;
    const found = url.match(regex);

    if (!found) {
      throw new Error("Regex failed");
    }
    return found[0];
  };
  return (
    <div className="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
      <ul className="flex flex-col w-full divide divide-y">
        {items.map((item, index) => {
          return (
            <li
              className="flex flex-row justify-center items-center select-none cursor-pointer p-4"
              onClick={
                onItemClick
                  ? () => onItemClick(getIdFromUrl(item.url))
                  : () => null
              }
            >
              <div className="font-medium dark:text-white">{item.name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
