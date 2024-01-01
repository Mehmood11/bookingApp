import { alpha } from "@mui/material";

export const styles = {
  tabsWrapper: () => ({
    background: "transparent",
    borderRadius: "8px",
    display: "inline-block",
    padding: "4px",
    height: "4rem",
    // marginLeft: "2rem",
    marginBottom: "8px",
    "& ._indicator": {
      display: "none",
    },
    "& ._root, ": { minHeight: "unset", maxWidth: "100%" },
    "& .tab_root": {
      height: "40px",
      marginLeft: "1rem !important",
      zIndex: 1,
      padding: "4px 20px",
      minHeight: "unset",
      textTransform: "capitalize",
      color: "#64748B",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
      borderRadius: "6px",
      background:
        "linear-gradient(92deg, rgba(248, 250, 252, 0.80) 7.57%, rgba(248, 250, 252, 0.73) 32.7%, rgba(248, 250, 252, 0.80) 55.51%, rgba(248, 250, 252, 0.72) 96.73%)",
      boxShadow: " 0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
      backdropFilter: "blur(12px)",
      "&._selected": {
        color: "#F8FAFC",
        height: "40px",
        background: "#21608B",
        borderRadius: "6px",
        boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
        backdropFilter: "blur(12px)",
        fontSize: "16px",
        fontWeight: 500,
        padding: "4px 20px",
        minHeight: "unset",
        textTransform: "capitalize",
        marginLeft: "0.3rem !important",
        zIndex: 1,
      },
    },
  }),
};
