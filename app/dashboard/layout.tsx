"use client";
import React from "react";
import Sidebar from "@/components/SideBar";
import { useAuthContext } from "@/hooks/useAuthContext";
import { sidebarProps } from "@/constants/sidebarprops";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuthContext();

  if (!user) {
    return (
      <div className="min-h-screen text-center">
        <h1>Sorry, You're not logged in. Please login.</h1>
      </div>
    );
  }

  if (user) {
    return (
      <div className="min-h-screen text-center flex">
        <div className="w-1/5">
          <Sidebar items={sidebarProps} />
        </div>
        <div className="w-4/5">{children}</div>
      </div>
    );
  }
}
