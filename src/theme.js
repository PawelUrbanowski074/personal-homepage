const colorNames = {
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  scienceBlue: "#0366D6",
  scienceBlueHover: "#0255C5",
  iron: "#D1D5DA60",
  ironHover: "#C1C5C080",
  slateGray: "#6E7E91", 
  lightGray: "#E5E5E5",
  mineShaft: "#252525",
  dodgerBlue: "#2188FF",
  dodgerBlueHover: "#1077EE",
  ironTransparent: "rgba(209, 213, 218, 0.3)",
  mineShaftLighter: "#424242",
};

const common = {
  breakpoints: {
    mobileMax: 767,
  },
  boxShadow: "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
  borderRadiusSmall: "4px",
}

export const themeLight = {
  ...common,
  color: {
    background: colorNames.whiteLilac,
    textPrimary: colorNames.mineShaft,
    textPrimaryHover: colorNames.scienceBlueHover,
    secondaryText: colorNames.slateGray,

    switchBackground: colorNames.lightGray,
    switchIcons: colorNames.white,

    buttonBorder: colorNames.ironTransparent,
    buttonText: colorNames.white,
    buttonBackground: colorNames.scienceBlue,
    buttonBackgroundHover: colorNames.scienceBlueHover,

    boxBackground: colorNames.white,
    boxBullet: colorNames.scienceBlue,
    headerBorderBottom: colorNames.iron,

    socialsColor: colorNames.mineShaft,
    socialsHover: colorNames.scienceBlueHover,
    
    githubIcon: colorNames.scienceBlue,
    spinnerColor: colorNames.scienceBlue,
    ghBoxHeader: colorNames.scienceBlue,
    border: colorNames.iron,
    borderHover: colorNames.ironHover,
    linkColor: colorNames.scienceBlue,
    linkColorHover: colorNames.scienceBlueHover,
  },
};

export const themeDark = {
  ...common,
  color: {
    background: colorNames.mineShaft,
    textPrimary: colorNames.white,
    textPrimaryHover: colorNames.dodgerBlueHover,
    secondaryText: colorNames.white,

    switchBackground: colorNames.mineShaftLighter,
    switchIcons: colorNames.mineShaft,

    buttonBorder: colorNames.ironTransparent,
    buttonText: colorNames.white,
    buttonBackground: colorNames.dodgerBlue,
    buttonBackgroundHover: colorNames.dodgerBlueHover,

    boxBackground: colorNames.mineShaftLighter,
    boxBullet: colorNames.dodgerBlue,
    headerBorderBottom: colorNames.iron,

    socialsColor: colorNames.white,
    socialsHover: colorNames.dodgerBlueHover,
    
    githubIcon: colorNames.dodgerBlue,
    spinnerColor: colorNames.dodgerBlue,
    ghBoxHeader: colorNames.white,
    border: colorNames.iron,
    borderHover: colorNames.ironHover,
    linkColor: colorNames.dodgerBlue,
    linkColorHover: colorNames.dodgerBlueHover,
  },
};