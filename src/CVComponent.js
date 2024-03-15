import { Box, Grid, Typography, Button, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SvgIcon from "@mui/material/SvgIcon";
import { SignalWifiStatusbarNull } from "@mui/icons-material";
import { BasicInformation } from "./parts-Of-Create-CV/BasicInformation";
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
export const CVComponent = ({
  setBasicInfo,
  setShowCV,
  setShowNavbar,
  setBasic,
  setContact,
  setEducation,
  setExpertise,
  setPortfolio,
  basicInfo,
  contactInfo,
  educationInfo,
  expertiseInfo,
  employmentInfo,
  portfolioInfo,
  setShowBeforButton,
  setShowNextButton,
}) => {
  return (
    <>
      <Button
        className="change-cv"
        onClick={() => {
          setShowCV(false);
          setShowNavbar(true);
          setShowBeforButton(true);
          setShowNextButton(true);
          setBasic(<BasicInformation setBasicInfo={setBasicInfo} />);
          setContact(null);
          setEducation(null);
          setExpertise(null);
          setPortfolio(null);
        }}
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
        ویرایش رزومه
      </Button>

      <Box
        className="container"
        sx={{ width: "100%", backgroundColor: "#F5F5F5", paddingTop: 5 }}
      >
        <Grid container columns={12} spacing={0}>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "start",
                gap: "7px",
                width: "100%",
                paddingRight: "30px",
                paddingLeft: "30px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                  width: "100%",
                  marginBottom: "15px",
                }}
              >
                <Avatar
                  alt=""
                  src={basicInfo.profile}
                  sx={{
                    width: "100px",
                    height: "100px",
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{ fontWeight: "bold", fontSize: "26px" }}
                  >
                    {basicInfo.name}{" "}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "20px",
                    backgroundColor: "#1e40af",
                  }}
                ></Box>
                <Typography
                  variant="p"
                  sx={{
                    color: "#1e40af",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  اطلاعات پایه
                </Typography>
                <Box
                  sx={{
                    height: "2px",
                    flexGrow: 1,
                    backgroundColor: "#1e40af",
                  }}
                ></Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "center",
                  width: "100%",
                  gap: "6px",
                  marginBottom: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                    justifyContent: "start",
                    gap: "10px",
                  }}
                >
                  <HomeIcon color="success" />
                  <Typography variant="p" sx={{ textAlign: "justify" }}>
                    جنسیت: {basicInfo.gender}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "10px",
                  }}
                >
                  <HomeIcon color="success" />
                  <Typography variant="p" sx={{ textAlign: "justify" }}>
                    وضعیت تاهل: {basicInfo.marital}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "10px",
                  }}
                >
                  <HomeIcon color="success" />{" "}
                  <Typography variant="p" sx={{ textAlign: "justify" }}>
                    تاریخ تولد : {basicInfo.day} / {basicInfo.month} /
                    {basicInfo.year}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "10px",
                  }}
                >
                  <HomeIcon color="success" />{" "}
                  <Typography variant="p" sx={{ textAlign: "justify" }}>
                    تابعیت : {basicInfo.citizen}
                  </Typography>
                </Box>
                {basicInfo.country ? (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "start",
                      gap: "10px",
                    }}
                  >
                    <HomeIcon color="success" />
                    <Typography variant="p" sx={{ textAlign: "justify" }}>
                      نام کشور : {basicInfo.country}
                    </Typography>
                  </Box>
                ) : null}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "20px",
                    backgroundColor: "#1e40af",
                  }}
                ></Box>
                <Typography
                  variant="p"
                  sx={{
                    color: "#1e40af",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  اطلاعات تماس{" "}
                </Typography>
                <Box
                  sx={{
                    height: "2px",
                    flexGrow: 1,
                    backgroundColor: "#1e40af",
                  }}
                ></Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "center",
                  width: "100%",
                  gap: "6px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "10px",
                  }}
                >
                  <HomeIcon color="success" />
                  <Typography variant="p" sx={{ textAlign: "justify" }}>
                    آدرس ایمیل : {contactInfo.email}
                  </Typography>
                </Box>{" "}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "10px",
                  }}
                >
                  <HomeIcon color="success" />
                  <Typography variant="p" sx={{ textAlign: "justify" }}>
                    شماره موبایل : {contactInfo.phoneNumber}
                  </Typography>
                </Box>{" "}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "10px",
                  }}
                >
                  <HomeIcon color="success" />
                  <Typography variant="p" sx={{ textAlign: "justify" }}>
                    شماره ثابت : {contactInfo.landlineNumber}
                  </Typography>
                </Box>{" "}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "start",
                    gap: "10px",
                  }}
                >
                  <HomeIcon color="success" />
                  <Typography variant="p" sx={{ textAlign: "justify" }}>
                    شهر سکونت : {contactInfo.city}
                  </Typography>
                </Box>{" "}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                    justifyContent: "start",
                    gap: "10px",
                  }}
                >
                  <HomeIcon color="success" />
                  <Typography variant="p" sx={{ textAlign: "justify" }}>
                    آدرس محل سکونت : {contactInfo.address}
                  </Typography>
                </Box>
              </Box>{" "}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "20px",
                    backgroundColor: "#1e40af",
                  }}
                ></Box>
                <Typography
                  variant="p"
                  sx={{
                    color: "#1e40af",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  وضعیت تحصیل{" "}
                </Typography>
                <Box
                  sx={{
                    height: "2px",
                    flexGrow: 1,
                    backgroundColor: "#1e40af",
                  }}
                ></Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "center",
                  width: "100%",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                <Typography variant="p" sx={{ textAlign: "justify" }}>
                  مدرک تحصیلی : {educationInfo.degree}{" "}
                </Typography>
                <Typography variant="p" sx={{ textAlign: "justify" }}>
                  رشته تحصیلی : {educationInfo.major}
                </Typography>
                <Typography variant="p" sx={{ textAlign: "justify" }}>
                  وضعیت تحصیلی : درحال تحصیل {educationInfo.studying}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "start",
                gap: "7px",
                width: "100%",
                paddingRight: "30px",
                paddingLeft: "30px",
              }}
            >
              <Box
                className="skills"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "20px",
                    backgroundColor: "#1e40af",
                  }}
                ></Box>
                <Typography
                  variant="p"
                  sx={{
                    color: "#1e40af",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  تخصص و مهارت ها{" "}
                </Typography>
                <Box
                  sx={{
                    height: "2px",
                    flexGrow: 1,
                    backgroundColor: "#1e40af",
                  }}
                ></Box>
              </Box>
              <Box
                className="skill-items"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "center",
                  width: "100%",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                <Typography variant="p" sx={{ textAlign: "justify" }}>
                  حوزه ی تخصص : {expertiseInfo.expertise}
                </Typography>
                <Typography variant="p" sx={{ textAlign: "justify" }}>
                  سطح ارشدیت : {expertiseInfo.level}
                </Typography>
                {expertiseInfo.evidence ? (
                  <Typography variant="p" sx={{ textAlign: "justify" }}>
                    مدرک های اخذ شده : {expertiseInfo.evidence}
                  </Typography>
                ) : null}
                {expertiseInfo.skills ? (
                  expertiseInfo.skills.map((item) => {
                    return (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "start",
                          justifyContent: "center",
                          gap: "6px",
                          marginTop: "17px",
                        }}
                      >
                        <Typography variant="p" sx={{ textAlign: "justify" }}>
                          نام مهارت : {item.skill}
                        </Typography>
                        <Typography variant="p" sx={{ textAlign: "justify" }}>
                          میزان تسلط: {item.levelOfSkill}
                        </Typography>
                      </Box>
                    );
                  })
                ) : (
                  <Typography
                    variant="p"
                    sx={{ marginTop: "15px", fontWeight: "bold" }}
                  >
                    هیچ مهارتی وجود ندارد.
                  </Typography>
                )}
              </Box>
              {expertiseInfo.haveHistory === true
                ? employmentInfo.map((item) => {
                    return (
                      <>
                        <Box
                          className="jobs"
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                            width: "100%",
                          }}
                        >
                          <Box
                            sx={{
                              width: "20px",
                              height: "20px",
                              borderRadius: "20px",
                              backgroundColor: "#1e40af",
                            }}
                          ></Box>
                          <Typography
                            variant="p"
                            sx={{
                              color: "#1e40af",
                              fontWeight: "bold",
                              fontSize: "20px",
                            }}
                          >
                            سوابق شغلی{" "}
                          </Typography>
                          <Box
                            sx={{
                              height: "2px",
                              flexGrow: 1,
                              backgroundColor: "#1e40af",
                            }}
                          ></Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            justifyContent: "center",
                            width: "100%",
                            gap: "10px",
                            marginBottom: "40px",
                          }}
                        >
                          {" "}
                          <Typography variant="p" sx={{ textAlign: "justify" }}>
                            سمت شغلی مربوطه : {item.position}
                          </Typography>
                          <Typography variant="p" sx={{ textAlign: "justify" }}>
                            عنوان محل کار : {item.titleOfWorkplace}
                          </Typography>
                          <Typography variant="p" sx={{ textAlign: "justify" }}>
                            تاریخ شروع به کار : {item.firstMonth} /{" "}
                            {item.firstYear}
                          </Typography>
                          <Typography variant="p" sx={{ textAlign: "justify" }}>
                            وضعیت شغلی : مشغول فعالیت در این مجموعه{" "}
                            {item.checked === true ? "هستم" : "نیستم"}
                          </Typography>
                          {item.checked !== true ? (
                            <Typography
                              variant="p"
                              sx={{ textAlign: "justify" }}
                            >
                              تاریخ اتمام کار : {item.lastMonth} /{" "}
                              {item.lastYear}
                            </Typography>
                          ) : (
                            ""
                          )}
                        </Box>{" "}
                      </>
                    );
                  })
                : null}
              <Box
                className="project"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "20px",
                    backgroundColor: "#1e40af",
                  }}
                ></Box>
                <Typography
                  variant="p"
                  sx={{
                    color: "#1e40af",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  پروژه و نمونه کارها{" "}
                </Typography>
                <Box
                  sx={{
                    height: "2px",
                    flexGrow: 1,
                    backgroundColor: "#1e40af",
                  }}
                ></Box>
              </Box>{" "}
              {portfolioInfo.map((item) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      justifyContent: "center",
                      width: "100%",
                      gap: "10px",
                      marginBottom: "40px",
                    }}
                  >
                    {" "}
                    <Typography variant="p" sx={{ textAlign: "justify" }}>
                      عنوان پروژه : {item.title}{" "}
                    </Typography>
                    <Typography variant="p" sx={{ textAlign: "justify" }}>
                      کارفرما/درخواست کننده : {item.applicator}{" "}
                    </Typography>
                    <Typography variant="p" sx={{ textAlign: "justify" }}>
                      تاریخ دریافت پروژه : {item.month} / {item.year}
                    </Typography>
                    <Typography variant="p" sx={{ textAlign: "justify" }}>
                      لینک مرتبط : {item.projectLink}
                    </Typography>
                    {item.description ? (
                      <Typography variant="p" sx={{ textAlign: "justify" }}>
                        توضیحات مربوطه : {item.description}
                      </Typography>
                    ) : null}
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
