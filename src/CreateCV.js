import { Box, Button } from "@mui/material";
import { BasicInformation } from "./parts-Of-Create-CV/BasicInformation";
import { ContactInformation } from "./parts-Of-Create-CV/ContactInformation";
import { Education } from "./parts-Of-Create-CV/Education";
import { Expertise } from "./parts-Of-Create-CV/Expertise";
import { NavigationBar } from "./parts-Of-Create-CV/NavigationBar";
import { Portfolio } from "./parts-Of-Create-CV/Portfolio";
import { CVComponent } from "./CVComponent";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function CreateCV() {
  // state for the different data for  each part of the cv.
  const [basicInfo, setBasicInfo] = useState({});
  const [contactInfo, setContactInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState({});
  const [expertiseInfo, setExpertiseInfo] = useState({});
  const [employmentInfo, setEmploymentInfo] = useState([]);
  const [portfolioInfo, setPortfolioInfo] = useState([]);
  // State for the different parts of a cv.
  const [displaybasic, setDisplayBasic] = useState("flex");
  const [displayContact, setDisplayContact] = useState("none");
  const [displayEducation, setDisplayEducation] = useState("none");
  const [displayExpertise, setDisplayExpertise] = useState("none");
  const [displayPortfolio, setDisplayPortfolio] = useState("none");
  const [showNavbar, setShowNavbar] = useState(true);
  const [showCV, setShowCV] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);
  const [showBeforButton, setShowBeforButton] = useState(true);

  return (
    <>
      {showNextButton === true ? (
        displayPortfolio === "flex" ? null : (
          <Button
            onClick={() => {
              if (displaybasic === "flex") {
                setDisplayBasic("none");
                setDisplayContact("flex");
                setDisplayEducation("none");
                setDisplayExpertise("none");
                setDisplayPortfolio("none");
              } else if (displayContact === "flex") {
                setDisplayBasic("none");
                setDisplayContact("none");
                setDisplayEducation("flex");
                setDisplayExpertise("none");
                setDisplayPortfolio("none");
              } else if (displayEducation === "flex") {
                setDisplayBasic("none");
                setDisplayContact("none");
                setDisplayEducation("none");
                setDisplayExpertise("flex");
                setDisplayPortfolio("none");
              } else if (displayExpertise === "flex") {
                setDisplayBasic("none");
                setDisplayContact("none");
                setDisplayEducation("none");
                setDisplayExpertise("none");
                setDisplayPortfolio("flex");
              }
            }}
            className="next-befor"
            sx={{
              borderRadius: "200px",
              width: "110px",
              color: "black",
              fontWeight: "bold",
              position: "fixed",
              left: 50,
              bottom: 130,
              zIndex: 1000,
              height: "40px",
            }}
          >
            مرحله بعد
          </Button>
        )
      ) : null}
      {showBeforButton === true ? (
        displaybasic === "flex" ? null : (
          <Button
            onClick={() => {
              if (displayPortfolio === "flex") {
                setDisplayBasic("none");
                setDisplayContact("none");
                setDisplayEducation("none");
                setDisplayExpertise("flex");
                setDisplayPortfolio("none");
              } else if (displayExpertise === "flex") {
                setDisplayBasic("none");
                setDisplayContact("none");
                setDisplayEducation("flex");
                setDisplayExpertise("none");
                setDisplayPortfolio("none");
              } else if (displayEducation === "flex") {
                setDisplayBasic("none");
                setDisplayContact("flex");
                setDisplayEducation("none");
                setDisplayExpertise("none");
                setDisplayPortfolio("none");
              } else if (displayContact === "flex") {
                setDisplayBasic("flex");
                setDisplayContact("none");
                setDisplayEducation("none");
                setDisplayExpertise("none");
                setDisplayPortfolio("none");
              }
            }}
            className="next-befor"
            sx={{
              borderRadius: "200px",
              width: "110px",
              color: "black",
              fontWeight: "bold",
              position: "fixed",
              right: 50,
              bottom: 130,
              zIndex: 1000,
              height: "40px",
            }}
          >
            مرحله قبل
          </Button>
        )
      ) : null}{" "}
      {displayPortfolio === "flex" ? (
        <Button
          onClick={() => {
            setShowCV(true);
            setShowNavbar(false);
            setShowBeforButton(false);
            setShowNextButton(false);
            setDisplayBasic("none");
            setDisplayContact("none");
            setDisplayEducation("none");
            setDisplayExpertise("none");
            setDisplayPortfolio("none");
          }}
          className="get-cv"
          sx={{
            borderRadius: "200px",
            width: "110px",
            color: "black",
            fontWeight: "bold",
            position: "fixed",
            left: 50,
            bottom: 180,
            zIndex: 1000,
            height: "40px",
          }}
        >
          دریافت رزومه
        </Button>
      ) : null}
      {showNavbar === true ? (
        <NavigationBar
          setDisplayBasic={setDisplayBasic}
          setDisplayContact={setDisplayContact}
          setDisplayEducation={setDisplayEducation}
          setDisplayExpertise={setDisplayExpertise}
          setDisplayPortfolio={setDisplayPortfolio}
          displaybasic={displaybasic}
          displayContact={displayContact}
          displayEducation={displayEducation}
          displayExpertise={displayExpertise}
          displayPortfolio={displayPortfolio}
          setBasicInfo={setBasicInfo}
          setContactInfo={setContactInfo}
          setEducationInfo={setEducationInfo}
          setExpertiseInfo={setExpertiseInfo}
          setEmploymentInfo={setEmploymentInfo}
          setPortfolioInfo={setPortfolioInfo}
        />
      ) : null}
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
            marginTop: "90px",
          }}
        >
          <Box sx={{ display: displaybasic }}>
            <BasicInformation setBasicInfo={setBasicInfo} />
          </Box>
          <Box sx={{ display: displayContact }}>
            <ContactInformation setContactInfo={setContactInfo} />
          </Box>
          <Box sx={{ display: displayEducation }}>
            <Education setEducationInfo={setEducationInfo} />
          </Box>
          <Box sx={{ display: displayExpertise }}>
            <Expertise
              setExpertiseInfo={setExpertiseInfo}
              setEmploymentInfo={setEmploymentInfo}
            />
          </Box>
          <Box sx={{ display: displayPortfolio }}>
            <Portfolio setPortfolioInfo={setPortfolioInfo} />
          </Box>

          {showCV === true ? (
            <CVComponent
              basicInfo={basicInfo}
              contactInfo={contactInfo}
              educationInfo={educationInfo}
              expertiseInfo={expertiseInfo}
              employmentInfo={employmentInfo}
              portfolioInfo={portfolioInfo}
              setShowCV={setShowCV}
              setShowNavbar={setShowNavbar}
              setDisplayBasic={setDisplayBasic}
              setDisplayContact={setDisplayContact}
              setDisplayEducation={setDisplayEducation}
              setDisplayExpertise={setDisplayExpertise}
              setDisplayPortfolio={setDisplayPortfolio}
              displaybasic={displaybasic}
              displayContact={displayContact}
              displayEducation={displayEducation}
              displayExpertise={displayExpertise}
              displayPortfolio={displayPortfolio}
              setShowBeforButton={setShowBeforButton}
              setShowNextButton={setShowNextButton}
              setBasicInfo={setBasicInfo}
            />
          ) : null}
        </Box>
      </Box>
    </>
  );
}
