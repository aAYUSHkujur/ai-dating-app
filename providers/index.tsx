import React from "react";
import { ClerkProviders } from "./ClerkProvider";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProviders>{children}</ClerkProviders>;
};
export default AppProviders;
