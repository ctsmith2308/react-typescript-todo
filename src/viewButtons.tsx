import React from "react";
import { ViewMapDispatch, Views } from "./types";

const views = [Views.ALL, Views.ACTIVE, Views.COMPLETE];

type ViewProps = ViewMapDispatch;

const ViewButtons = ({ toggleView }: ViewProps) => (
  <div>
    {views.map((view: string) => (
      <button onClick={() => toggleView(view)}>{view}</button>
    ))}
  </div>
);

export default ViewButtons;
