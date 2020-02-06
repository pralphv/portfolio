import React from "react";
import { SpaPage } from "../pages";
import Navigation from "./navigation";

export default function MainLayout() {
  return (
    <Navigation>
      <SpaPage />
    </Navigation>
  );
}
