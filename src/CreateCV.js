import { BasicInformation } from "./parts-Of-Create-CV/BasicInformation";
import { ContactInformation } from "./parts-Of-Create-CV/ContactInformation";
import { Education } from "./parts-Of-Create-CV/Education";
import { EmploymentHistory } from "./parts-Of-Create-CV/EmploymentHistory";
import { Expertise } from "./parts-Of-Create-CV/Expertise";

export function CreateCV() {
  return (
    <>
      <BasicInformation />
      <ContactInformation />
      <EmploymentHistory />
      <Education />
      <Expertise />
    </>
  );
}
