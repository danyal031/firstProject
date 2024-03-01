import { Box, Button } from "@mui/material";
import { BasicInformation } from "./parts-Of-Create-CV/BasicInformation";
import { ContactInformation } from "./parts-Of-Create-CV/ContactInformation";
import { Education } from "./parts-Of-Create-CV/Education";
import { Expertise } from "./parts-Of-Create-CV/Expertise";
import { NavigationBar } from "./parts-Of-Create-CV/NavigationBar";
import { Portfolio } from "./parts-Of-Create-CV/Portfolio";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

export function CreateCV(props) {
  const pathName = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <>
      {pathName === "/portfolio" ? (
        <Button
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
          <Link style={{ color: "black", textDecoration: "none" }}>
            دریافت رزومه
          </Link>
        </Button>
      ) : null}
      {pathName !== "/basic" ? (
        <Button
          onClick={() => {
            if (pathName === "/portfolio") {
              navigate("/expertise");
            } else if (pathName === "/expertise") {
              navigate("/education");
            } else if (pathName === "/education") {
              navigate("/contact");
            } else if (pathName === "/contact") {
              navigate("/basic");
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
      ) : null}
      {pathName !== "/portfolio" ? (
        <Button
          onClick={() => {
            if (pathName === "/basic") {
              navigate("/contact");
            } else if (pathName === "/contact") {
              navigate("/education");
            } else if (pathName === "/education") {
              navigate("/expertise");
            } else if (pathName === "/expertise") {
              navigate("/portfolio");
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
      ) : null}
      <NavigationBar pathName={pathName} />
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
          <Routes>
            <Route path="/basic" element={<BasicInformation />} />
            <Route path="/contact" element={<ContactInformation />} />
            <Route path="/education" element={<Education />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
}
