import React from "react";
import ClinicAttachmentWidget from "../components/views/ClinicAttachmentWidget";
import Dashboard from "../components/views/Dashboard";
import DisabilityWidget from "../components/views/DisabilityWidget";
import DispensaryObservationWidget from "../components/views/DispensaryObservationWidget";
import ModalForm from "../components/views/ModalForm";
import VaccinationWidget from "../components/views/VaccinationWidget";

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
  "pageOnNewTab": Page,
  "vaccinationWidget": VaccinationWidget,
  "disabilityWidget": DisabilityWidget,
  "dispensaryObservationWidget": DispensaryObservationWidget,
  "clinicAttachmentWidget": ClinicAttachmentWidget,
}

export { viewDictionary };