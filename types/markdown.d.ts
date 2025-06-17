declare module "*.md" {
  import * as React from "react";

  export const attributes: Record<string, any>;
  export const react: React.ComponentType;

  const Component: React.ComponentType;
  export default Component;
} 
