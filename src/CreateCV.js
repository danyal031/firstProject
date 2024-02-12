import { BasicInformation } from "./parts-Of-Create-CV/BasicInformation";
import { ContactInformation } from "./parts-Of-Create-CV/ContactInformation";
import { EmploymentHistory } from "./parts-Of-Create-CV/EmploymentHistory";

export function CreateCV() {
  return (
    <>
      <BasicInformation />
      <ContactInformation />
      <EmploymentHistory />
    </>
  );
}
