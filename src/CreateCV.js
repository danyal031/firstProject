import { BasicInformation } from "./parts-Of-Create-CV/BasicInformation";
import { ContactInformation } from "./parts-Of-Create-CV/ContactInformation";
import { Education } from "./parts-Of-Create-CV/Education";
import { Expertise } from "./parts-Of-Create-CV/Expertise";

export function CreateCV() {
  return (
    <>
      <BasicInformation />
      <ContactInformation />
      <Education />
      <Expertise />
    </>
  );
}
