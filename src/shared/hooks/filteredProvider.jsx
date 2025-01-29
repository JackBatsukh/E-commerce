import React, { useEffect, useState } from "react";
import filteredContext from "./filteredContext";

export default function filteredProvider({ children }) {
  return <filteredContext.Provider>{children}</filteredContext.Provider>;
}
