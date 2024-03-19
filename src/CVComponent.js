import { Box, Grid, Typography, Button, Avatar } from "@mui/material";

export const CVComponent = ({
  setShowCV,
  setShowNavbar,
  setDisplayBasic,
  setDisplayContact,
  setDisplayEducation,
  setDisplayExpertise,
  setDisplayPortfolio,
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
          setDisplayBasic("flex");
          setDisplayContact("none");
          setDisplayEducation("none");
          setDisplayExpertise("none");
          setDisplayPortfolio("none");
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
          fontFamily: "koodak",
        }}
      >
        ویرایش رزومه
      </Button>
      <Button
        onClick={() => {}}
        className="download-cv"
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
        دانلود رزومه{" "}
      </Button>
      ;
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          className="container"
          sx={{
            backgroundColor: "#F5F5F5",
            paddingTop: 5,
            width: "890px",
          }}
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
                      sx={{
                        fontSize: "31px",
                        fontWeight: "bold",
                        fontFamily: "Mirza",
                      }}
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
                    paddingRight: "12px",
                    marginTop: "6px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "start",
                      gap: "10px",
                    }}
                  >
                    <img
                      alt=""
                      style={{ width: "18px" }}
                      src="./icons/gender.svg"
                    />{" "}
                    <Typography
                      variant="p"
                      sx={{
                        textAlign: "justify",
                        fontWeight: "bold",
                        fontFamily: "Mirza",
                        color: "#6c6c6c",
                        paddingBottom: "5px",
                      }}
                    >
                      جنسیت : {basicInfo.gender}
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
                    <img
                      alt=""
                      style={{ width: "18px" }}
                      src="./icons/marital.svg"
                    />{" "}
                    <Typography
                      variant="p"
                      sx={{
                        textAlign: "justify",
                        fontWeight: "bold",
                        fontFamily: "Mirza",
                        color: "#6c6c6c",
                        paddingBottom: "5px",
                      }}
                    >
                      وضعیت تاهل : {basicInfo.marital}
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
                    <img
                      alt=""
                      style={{ width: "18px" }}
                      src="../icons/calendar.svg"
                    />{" "}
                    <Typography
                      variant="p"
                      sx={{
                        textAlign: "justify",
                        fontWeight: "bold",
                        fontFamily: "Mirza",
                        color: "#6c6c6c",
                        paddingBottom: "5px",
                      }}
                    >
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
                    <img
                      alt=""
                      style={{ width: "18px" }}
                      src="../icons/citizen.svg"
                    />{" "}
                    <Typography
                      variant="p"
                      sx={{
                        textAlign: "justify",
                        fontWeight: "bold",
                        fontFamily: "Mirza",
                        color: "#6c6c6c",
                        paddingBottom: "5px",
                      }}
                    >
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
                      {" "}
                      <img
                        alt=""
                        style={{ width: "18px" }}
                        src="../icons/country.svg"
                      />{" "}
                      <Typography
                        variant="p"
                        sx={{
                          textAlign: "justify",
                          fontWeight: "bold",
                          fontFamily: "Mirza",
                          color: "#6c6c6c",
                          paddingBottom: "5px",
                        }}
                      >
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
                    paddingRight: "12px",
                    marginTop: "6px",
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
                    {" "}
                    <img
                      alt=""
                      style={{ width: "18px" }}
                      src="../icons/email.svg"
                    />{" "}
                    <Typography
                      variant="p"
                      sx={{
                        textAlign: "justify",
                        fontWeight: "bold",
                        fontFamily: "Mirza",
                        color: "#6c6c6c",
                        paddingBottom: "5px",
                      }}
                    >
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
                    <img
                      alt=""
                      style={{ width: "18px" }}
                      src="../icons/phone-number.svg"
                    />{" "}
                    <Typography
                      variant="p"
                      sx={{
                        textAlign: "justify",
                        fontWeight: "bold",
                        fontFamily: "Mirza",
                        color: "#6c6c6c",
                        paddingBottom: "5px",
                      }}
                    >
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
                    <img
                      alt=""
                      style={{ width: "18px" }}
                      src="../icons/number-fixe.svg"
                    />{" "}
                    <Typography
                      variant="p"
                      sx={{
                        textAlign: "justify",
                        fontWeight: "bold",
                        fontFamily: "Mirza",
                        color: "#6c6c6c",
                        paddingBottom: "5px",
                      }}
                    >
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
                    <img
                      alt=""
                      style={{ width: "18px" }}
                      src="../icons/city.svg"
                    />{" "}
                    <Typography
                      variant="p"
                      sx={{
                        textAlign: "justify",
                        fontWeight: "bold",
                        fontFamily: "Mirza",
                        color: "#6c6c6c",
                        paddingBottom: "5px",
                      }}
                    >
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
                    <img
                      alt=""
                      style={{ width: "18px" }}
                      src="../icons/address.svg"
                    />{" "}
                    <Typography
                      variant="p"
                      sx={{
                        textAlign: "justify",
                        fontWeight: "bold",
                        fontFamily: "Mirza",
                        color: "#6c6c6c",
                        paddingBottom: "5px",
                      }}
                    >
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
                    paddingRight: "12px",
                  }}
                >
                  {" "}
                  <Typography
                    variant="p"
                    sx={{
                      textAlign: "justify",
                      fontWeight: "bold",
                      fontFamily: "Mirza",
                      color: "#6c6c6c",
                    }}
                  >
                    مدرک تحصیلی : {educationInfo.degree}{" "}
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      textAlign: "justify",
                      fontWeight: "bold",
                      fontFamily: "Mirza",
                      color: "#6c6c6c",
                    }}
                  >
                    رشته تحصیلی : {educationInfo.major}
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      textAlign: "justify",
                      fontWeight: "bold",
                      fontFamily: "Mirza",
                      color: "#6c6c6c",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "5px",
                    }}
                  >
                    وضعیت تحصیلی : درحال تحصیل{" "}
                    <Typography
                      variant="p"
                      sx={{
                        textAlign: "justify",
                        fontWeight: "bold",
                        fontFamily: "Mirza",
                        color: "black",
                        fontSize: "20px",
                      }}
                    >
                      {educationInfo.studying}
                    </Typography>
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
                    paddingRight: "12px",
                  }}
                >
                  {" "}
                  <Typography
                    variant="p"
                    sx={{
                      textAlign: "justify",
                      fontWeight: "bold",
                      fontFamily: "Mirza",
                      color: "#6c6c6c",
                    }}
                  >
                    حوزه ی تخصص : {expertiseInfo.expertise}
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      textAlign: "justify",
                      fontWeight: "bold",
                      fontFamily: "Mirza",
                      color: "#6c6c6c",
                    }}
                  >
                    سطح ارشدیت : {expertiseInfo.level}
                  </Typography>
                  {expertiseInfo.evidence ? (
                    <Typography
                      variant="p"
                      sx={{
                        textAlign: "justify",
                        fontWeight: "bold",
                        fontFamily: "Mirza",
                        color: "#6c6c6c",
                      }}
                    >
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
                          <Typography
                            variant="p"
                            sx={{
                              textAlign: "justify",
                              fontWeight: "bold",
                              fontFamily: "Mirza",
                              color: "#6c6c6c",
                            }}
                          >
                            نام مهارت : {item.skill}
                          </Typography>
                          <Typography
                            variant="p"
                            sx={{
                              textAlign: "justify",
                              fontWeight: "bold",
                              fontFamily: "Mirza",
                              color: "#6c6c6c",
                            }}
                          >
                            میزان تسلط: {item.levelOfSkill}
                          </Typography>
                        </Box>
                      );
                    })
                  ) : (
                    <Typography
                      variant="p"
                      sx={{
                        marginTop: "15px",
                        fontWeight: "bold",
                        fontFamily: "Mirza",
                        color: "black",
                      }}
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
                              paddingRight: "12px",
                            }}
                          >
                            {" "}
                            <Typography
                              variant="p"
                              sx={{
                                textAlign: "justify",
                                fontWeight: "bold",
                                fontFamily: "Mirza",
                                color: "#6c6c6c",
                              }}
                            >
                              سمت شغلی مربوطه : {item.position}
                            </Typography>
                            <Typography
                              variant="p"
                              sx={{
                                textAlign: "justify",
                                fontWeight: "bold",
                                fontFamily: "Mirza",
                                color: "#6c6c6c",
                              }}
                            >
                              عنوان محل کار : {item.titleOfWorkplace}
                            </Typography>
                            <Typography
                              variant="p"
                              sx={{
                                textAlign: "justify",
                                fontWeight: "bold",
                                fontFamily: "Mirza",
                                color: "#6c6c6c",
                              }}
                            >
                              تاریخ شروع به کار : {item.firstMonth} /{" "}
                              {item.firstYear}
                            </Typography>
                            <Typography
                              variant="p"
                              sx={{
                                textAlign: "justify",
                                fontWeight: "bold",
                                fontFamily: "Mirza",
                                color: "#6c6c6c",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "5px",
                              }}
                            >
                              وضعیت شغلی : مشغول فعالیت در این مجموعه{" "}
                              <Typography
                                sx={{
                                  textAlign: "justify",
                                  fontWeight: "bold",
                                  fontFamily: "Mirza",
                                  color: "black",
                                  fontSize: "20px",
                                }}
                              >
                                {item.checked === true ? "هستم" : "نیستم"}
                              </Typography>
                            </Typography>
                            {item.checked !== true ? (
                              <Typography
                                variant="p"
                                sx={{
                                  textAlign: "justify",
                                  fontWeight: "bold",
                                  fontFamily: "Mirza",
                                  color: "#6c6c6c",
                                }}
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
                        paddingRight: "12px",
                      }}
                    >
                      {" "}
                      <Typography
                        variant="p"
                        sx={{
                          textAlign: "justify",
                          fontWeight: "bold",
                          fontFamily: "Mirza",
                          color: "#6c6c6c",
                        }}
                      >
                        عنوان پروژه : {item.title}{" "}
                      </Typography>
                      <Typography
                        variant="p"
                        sx={{
                          textAlign: "justify",
                          fontWeight: "bold",
                          fontFamily: "Mirza",
                          color: "#6c6c6c",
                        }}
                      >
                        کارفرما/درخواست کننده : {item.applicator}{" "}
                      </Typography>
                      <Typography
                        variant="p"
                        sx={{
                          textAlign: "justify",
                          fontWeight: "bold",
                          fontFamily: "Mirza",
                          color: "#6c6c6c",
                        }}
                      >
                        تاریخ دریافت پروژه : {item.month} / {item.year}
                      </Typography>
                      <Typography
                        variant="p"
                        sx={{
                          textAlign: "justify",
                          fontWeight: "bold",
                          fontFamily: "Mirza",
                          color: "#6c6c6c",
                        }}
                      >
                        لینک مرتبط : {item.projectLink}
                      </Typography>
                      {item.description ? (
                        <Typography
                          variant="p"
                          sx={{
                            textAlign: "justify",
                            fontWeight: "bold",
                            fontFamily: "Mirza",
                            color: "#6c6c6c",
                          }}
                        >
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
      </Box>
    </>
  );
};
