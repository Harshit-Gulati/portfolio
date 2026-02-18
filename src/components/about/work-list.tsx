"use client";

import { useState } from "react";
import { SingleWorkItem } from "./work-item";
import { works } from "@/data/about/work";

export const WorkList = () => {
  const [expandedItem, setExpandedItem] = useState(0);
  return (
    <div className="mt-4 flex flex-col">
      {works.map((work, index) => (
        <SingleWorkItem
          key={index}
          isExpanded={expandedItem == index}
          setExpanded={() => setExpandedItem(index)}
          work={work}
        />
      ))}
    </div>
  );
};
