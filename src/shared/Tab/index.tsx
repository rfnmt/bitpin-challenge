import clsx from "clsx";

interface Props<T> {
  tabs: Array<{ title: string; key: T }>;
  activeTab: T;
  setActiveTab: (tab: T) => void;
}

export default function Tab<T extends string>({
  tabs,
  activeTab,
  setActiveTab,
}: Props<T>) {
  return (
    <div>
      <ul className="flex justify-center">
        {tabs.map((tab) => (
          <li
            className={clsx(
              "w-full grow p-4 text-2xl text-white bg-gray-700 border-2 text-center cursor-pointer",
              {
                "border-blue-400": activeTab === tab.key,
                "border-gray-200": activeTab !== tab.key,
              }
            )}
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
