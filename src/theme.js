const colorNames = {
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  scienceBlue: "#0366D6",
  iron: "#D1D5DA",
  slateGray: "#6E7E91",
  black: "#000000",
  
};

const common = {
  media: {
    mobileMax: 767,
  }
}

export const themeLight = {
  ...common,
  color: {
    text: colorNames.black,
    secondaryText: colorNames.slateGray,
    background: colorNames.whiteLilac,
    buttonBacground: colorNames.scienceBlue,
    buttonText: colorNames.white,
    sectionBackground: colorNames.white,
    borderBottom: colorNames.iron,
  },
};