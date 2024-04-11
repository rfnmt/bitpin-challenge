import clsx from "clsx";
import { ChangeEventHandler } from "react";

interface Props {
  className?: string;
  isChecked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  appendText?: string;
  prependText?: string;
}

export default function Switch({
  className,
  isChecked,
  onChange,
  appendText,
  prependText,
}: Props) {
  return (
    <label
      className={clsx(className, "inline-flex items-center cursor-pointer")}
    >
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={isChecked}
        onChange={onChange}
      />
      <span className="ml-3 text-lg font-medium text-gray-900 dark:text-white">
        {prependText}
      </span>
      <div className="relative w-11 h-6 bg-gray-200 outline-none ring-4 ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
      <span className="mr-3 text-lg font-medium text-gray-900 dark:text-white">
        {appendText}
      </span>
    </label>
  );
}
