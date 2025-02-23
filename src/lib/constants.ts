export const apiBaseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:1337"
    : "https://api.musicvideoeditor.com";

export const storageBaseUrl = apiBaseURL;

export const colors = {
  dashboardBgColor: "#e8e8e6",
  homeSidenavBgColor: "#f53d3d",
  loginBtnColor: "#7e55d9",
  orange: "#4ca336",
};

export const NAVLINKS = [
  {
    label: "How it works",
    href: "/#how-it-works",
  },
  {
    label: "Portfolio",
    href: "/#portfolio",
  },
  {
    label: "Pricing",
    href: "/#pricing",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "FAQ",
    href: "/#faq",
  },
];

