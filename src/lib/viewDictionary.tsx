import React from "react";
import Dashboard from "../components/views/Dashboard";
import ModalForm from "../components/views/ModalForm";

const Page = (props: { title: string, children: any }) => {
  return (
    <React.Fragment>
      <h3>{props.title}</h3>
      {props.children}
    </React.Fragment>
  );
}

const viewDictionary: { [id: string]: any } = {
  "dashboard": Dashboard,
  "dialog": ModalForm,
  "page": Page,
  "pageOnNewTab": Page
}

export { viewDictionary };