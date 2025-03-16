"use client";
import { DarkModeProvider } from "@/components/context/themeContext";
import { _IChildren } from "../../types";

const Providers = ({ children }: _IChildren) => (
  <DarkModeProvider>{children}</DarkModeProvider>
);

export default Providers;
