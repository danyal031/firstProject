import { Box, Typography, Button } from "@mui/material";
import { BasicInformation } from "./BasicInformation";
import { ContactInformation } from "./ContactInformation";
import { Education } from "./Education";
import { Expertise } from "./Expertise";
import { Portfolio } from "./Portfolio";

export function NavigationBar({
  setBasic,
  basic,
  setContact,
  contact,
  setEducation,
  education,
  setExpertise,
  expertise,
  setPortfolio,
  portfolio,
  setBasicInfo,
  setContactInfo,
  setEducationInfo,
  setExpertiseInfo,
  setEmploymentInfo,
  setPortfolioInfo,
}) {
  return (
    <>
      {" "}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "70%",
            height: "70px",
            backgroundColor: "#e7e5e4",
            position: "fixed",
            top: 1,
            zIndex: 1000,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            borderRadius: "6px",
            "@media (max-width:660px)": {
              width: "100%",
              height: "60px",
              left: "0px",
              margin: "0px",
              transform: "none",
              top: "0px",
              right: "0px",
            },
          }}
          className="navigation-shadow"
        >
          <Typography
            onClick={() => {
              setBasic(<BasicInformation setBasicInfo={setBasicInfo} />);
              setContact(null);
              setEducation(null);
              setExpertise(null);
              setPortfolio(null);
            }}
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: basic ? "#047857" : "black",
              "@media (max-width:860px)": { fontSize: "16px" },
              "@media (max-width:470px)": { fontSize: "12px" },
            }}
          >
            اطلاعات پایه
          </Typography>
          <Typography
            onClick={() => {
              setBasic(null);
              setContact(
                <ContactInformation setContactInfo={setContactInfo} />
              );
              setEducation(null);
              setExpertise(null);
              setPortfolio(null);
            }}
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: contact ? "#047857" : "black",
              "@media (max-width:860px)": { fontSize: "16px" },
              "@media (max-width:470px)": { fontSize: "12px" },
            }}
          >
            اطلاعت تماس{" "}
          </Typography>
          <Typography
            onClick={() => {
              setBasic(null);
              setContact(null);
              setEducation(<Education setEducationInfo={setEducationInfo} />);
              setExpertise(null);
              setPortfolio(null);
            }}
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: education ? "#047857" : "black",
              "@media (max-width:860px)": { fontSize: "16px" },
              "@media (max-width:470px)": { fontSize: "12px" },
            }}
          >
            {" "}
            سوابق تحصیلی
          </Typography>
          <Typography
            onClick={() => {
              setBasic(null);
              setContact(null);
              setEducation(null);
              setExpertise(
                <Expertise
                  setExpertiseInfo={setExpertiseInfo}
                  setEmploymentInfo={setEmploymentInfo}
                />
              );
              setPortfolio(null);
            }}
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: expertise ? "#047857" : "black",
              "@media (max-width:860px)": { fontSize: "16px" },
              "@media (max-width:470px)": { fontSize: "12px" },
            }}
          >
            تخصص ها
          </Typography>
          <Typography
            onClick={() => {
              setBasic(null);
              setContact(null);
              setEducation(null);
              setExpertise(null);
              setPortfolio(<Portfolio setPortfolioInfo={setPortfolioInfo} />);
            }}
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: portfolio ? "#047857" : "black",
              "@media (max-width:860px)": { fontSize: "16px" },
              "@media (max-width:470px)": { fontSize: "12px" },
            }}
          >
            پروژه و نمونه کارها
          </Typography>
        </Box>
      </Box>
    </>
  );
}
