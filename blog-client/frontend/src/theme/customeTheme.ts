import "@mui/material/styles";

declare module "@mui/material/Pagination" {
  interface PaginationPropsColorOverrides {
    tertiary: true;
  }
}

declare module "@mui/material/CircularProgress" {
  interface CircularProgressPropsColorOverrides {
    tertiary: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: PaletteColorTertiaryOptions;
  }

  interface PaletteOptions {
    tertiary: PaletteColorTertiaryOptions;
  }

  interface PaletteColorTertiaryOptions {
    main: string;
  }
}
