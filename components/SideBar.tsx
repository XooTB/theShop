import React from "react";
import Link from "next/link";

interface SidebarProps {
  items: {
    label: string;
    icon: any;
    to: string;
  }[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <div className="w-64 bg-gray-800 min-h-screen h-full flex flex-col justify-between">
      <div className="p-4">
        <ul className="mt-6">
          {items?.map((item, index) => (
            <li key={index} className="mb-2">
              <Link
                href={item.to}
                className="flex items-center text-white hover:text-gray-300 transition duration-300"
              >
                <div className="mr-3">{item.icon}</div>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* You can add a footer or other content here */}
    </div>
  );
};

export default Sidebar;
