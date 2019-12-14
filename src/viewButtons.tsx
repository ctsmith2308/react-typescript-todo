import React from "react";
import { ViewMapDispatch } from "./types";

const views = ["all", "active", "complete"];

type ViewProps = ViewMapDispatch;

const ViewButtons = ({ toggleView }: ViewProps) => (
  <div>
    {views.map((view: string) => (
      <button onClick={() => toggleView(view)}>{view}</button>
    ))}
  </div>
);

export default ViewButtons;
