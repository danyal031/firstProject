<Button
  className="change-cv"
  onClick={() => {
    navigate("/basic");
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
</Button>;
//
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
</Button>;
//
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
</Button>;
//
<Button
  onClick={() => {
    navigate("/cv");
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
</Button>;
