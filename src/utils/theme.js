export default {
  palette: {
    primary: {
      light: "#33c9dc",
      main: "#00bcd4",
      dark: "#008394",
      constrastText: "#fff",
    },
    secondary: {
      light: "#ff6333",
      main: "#ff3d00",
      dark: "#b22a00",
      constrastText: "#fff",
    },
  },
  typography: {
    useNextVariants: true,
  },
  spearedIt: {
    form: {
      textAlign: "center",
    },
    image: {
      margin: "20px auto 20px auto",
      height: 60,
    },
    pageTitle: {
      margin: "10px auto 10px auto",
    },
    textField: {
      margin: "10px auto 10px auto",
    },
    button: {
      marginTop: 20,
      position: "relative",
    },
    customError: {
      color: "red",
      fontSize: "0.8rem",
      marginTop: 10,
    },
    progress: {
      position: "absolute",
    },
    separator: {
      border: "none",
      margin: 4,
    },
    sLine: {
      width: "100%",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      marginBottom: 20,
    },
    card: {
      display: "flex",
      marginBottom: 20,
    },
    cardContent: {
      width: "100%",
      flexDirection: "column",
      padding: 25,
    },
    cover: {
      minWidth: 150,
      objectFit: "cover",
    },
    handle: {
      width: 60,
      height: 18,
      backgroundColor: "#00bcd4",
      marginBottom: 7,
    },
    date: {
      height: 14,
      width: 100,
      backgroundColor: "rgba(0,0,0,0.3)",
      marginBottom: 10,
    },
    fullLine: {
      height: 15,
      width: "90%",
      marginBottom: 10,
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    halfLine: {
      height: 15,
      width: "50%",
      marginBottom: 10,
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    paper: {
      padding: 20,
    },
    profile: {
      "& .image-wrapper": {
        textAlign: "center",
        position: "relative",
        "& .button": {
          position: "absolute",
          top: "80%",
          left: "70%",
        },
      },
      "& .profile-image": {
        width: 200,
        hight: 200,
        objectFit: "cover",
        maxWidth: "100%",
        borderRadius: "50%",
      },
      "& .profile-details": {
        textAlign: "center",
        "& span, svg": {
          verticalAlign: "middle",
        },
        "& a": {
          color: "#00bcd4",
        },
      },
      "& hr": {
        border: "none",
        margin: "0 0 10px 0",
      },
      "& svg.button": {
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
    buttons: {
      textAlign: "center",
      "& a": {
        margin: "20px 10px",
      },
    },
  },
};
