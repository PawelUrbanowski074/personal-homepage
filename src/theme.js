const colorNames = {
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  scienceBlue: "#0366D6",
  violet2: "#090A3305",
  violet3: "#090A3308",
  iron: "#D1D5DA60",
  slateGray: "#6E7E91",
  black: "#000000",
  lightGray: "#E5E5E5",
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
    border: colorNames.iron,
    shadowBorder2: colorNames.violet2,
    shadowBorder3: colorNames.violet3,
    blueText: colorNames.scienceBlue,
    switchBackground: colorNames.lightGray,
    switchIcons: colorNames.slateGray,
  },
};