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
  const [basic, setBasic] = useState(
    <BasicInformation setBasicInfo={setBasicInfo} />
  );
  const [contact, setContact] = useState(null);
  const [education, setEducation] = useState(null);
  const [expertise, setExpertise] = useState(null);
  const [portfolio, setPortfolio] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showCV, setShowCV] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);
  const [showBeforButton, setShowBeforButton] = useState(true);

  return (
    <>
      {showNextButton === true ? (
        portfolio ? null : (
          <Button
            onClick={() => {
              if (basic) {
                setBasic(null);
                setContact(
                  <ContactInformation setContactInfo={setContactInfo} />
                );
                setEducation(null);
                setExpertise(null);
                setPortfolio(null);
              } else if (contact) {
                setBasic(null);
                setContact(null);
                setEducation(<Education setEducationInfo={setEducationInfo} />);
                setExpertise(null);
                setPortfolio(null);
              } else if (education) {
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
              } else if (expertise) {
                setBasic(null);
                setContact(null);
                setEducation(null);
                setExpertise(null);
                setPortfolio(<Portfolio setPortfolioInfo={setPortfolioInfo} />);
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
        basic ? null : (
          <Button
            onClick={() => {
              if (portfolio) {
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
              } else if (expertise) {
                setBasic(null);
                setContact(null);
                setEducation(<Education setEducationInfo={setEducationInfo} />);
                setExpertise(null);
                setPortfolio(null);
              } else if (education) {
                setBasic(null);
                setContact(
                  <ContactInformation setContactInfo={setContactInfo} />
                );
                setEducation(null);
                setExpertise(null);
                setPortfolio(null);
              } else if (contact) {
                setBasic(<BasicInformation setBasicInfo={setBasicInfo} />);
                setContact(null);
                setEducation(null);
                setExpertise(null);
                setPortfolio(null);
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
      {portfolio ? (
        <Button
          onClick={() => {
            setShowCV(true);
            setShowNavbar(false);
            setShowBeforButton(false);
            setShowNextButton(false);
            setBasic(null);
            setContact(null);
            setEducation(null);
            setExpertise(null);
            setPortfolio(null);
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
          setBasic={setBasic}
          setContact={setContact}
          setEducation={setEducation}
          setExpertise={setExpertise}
          setPortfolio={setPortfolio}
          basic={basic}
          contact={contact}
          education={education}
          expertise={expertise}
          portfolio={portfolio}
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
          {basic}
          {contact}
          {education}
          {expertise}
          {portfolio}
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
              setBasic={setBasic}
              setContact={setContact}
              setEducation={setEducation}
              setExpertise={setExpertise}
              setPortfolio={setPortfolio}
              basic={basic}
              contact={contact}
              education={education}
              expertise={expertise}
              portfolio={portfolio}
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
