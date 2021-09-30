const colorNames = {
  white: "#FFFFFF", //
  whiteLilac: "#FBFBFE", //
  scienceBlue: "#0366D6", //
  violet2: "#090A3305",
  violet3: "#090A3308",
  iron: "#D1D5DA60",
  slateGray: "#6E7E91", //
  black: "#000000", //- ?
  lightGray: "#E5E5E5", //mercury
  mineShaft: "#252525",


  blumine: "#1F5189",
  dodgerBlue: "#2188FF",
  shipCove: "#6D93BE",
  anakiwa: "#8CC2FF",
  tropicalBlue: "#CDE0F7",
  ironTransparent: "rgba(209, 213, 218, 0.3)",
  porcelain: "#F2F3F4", 
  doveGray: "#6D6D6D",
  tundora: "#414141",
  
  mineShaftLighter: "#313131",
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
    textPrimary: colorNames.mineShaft,
    secondaryText: colorNames.slateGray,
    switchBackground: colorNames.lightGray,
    switchIcons: colorNames.slateGray,
    buttonBorder: colorNames.ironTransparent,
    buttonText: colorNames.white,
    buttonBackground: colorNames.scienceBlue,
    boxBackground: colorNames.white,
    boxBullet: colorNames.scienceBlue,
    headerBorderBottom: colorNames.iron,
    socialsColor: colorNames.mineShaft,
    socialsHover: colorNames.scienceBlue,
    githubIcon: colorNames.scienceBlue,
    spinnerColor: colorNames.scienceBlue,
    ghBoxHeader: colorNames.scienceBlue,
    linkColor: colorNames.scienceBlue,

    text: colorNames.black,
    background: colorNames.whiteLilac,
    
    
    
    
    border: colorNames.iron,
    shadowBorder2: colorNames.violet2,
    shadowBorder3: colorNames.violet3,
  
    
  },
};

export const themeDark = {
  ...common,
  color: {
    text: colorNames.black,
    secondaryText: colorNames.black,
    background: colorNames.black,
    buttonBacground: colorNames.black,
    buttonText: colorNames.black,
    sectionBackground: colorNames.black,
    borderBottom: colorNames.black,
    border: colorNames.black,
    shadowBorder2: colorNames.black,
    shadowBorder3: colorNames.black,
    blueText: colorNames.black,
    switchBackground: colorNames.black,
    switchIcons: colorNames.black,
  },
};