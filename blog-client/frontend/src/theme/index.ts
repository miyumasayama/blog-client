import { createTheme } from "@mui/material/styles";
import type {} from "@mui/x-data-grid/themeAugmentation";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#CDE6C7",
    },
    secondary: {
      main: "#cdc7e6",
    },
    tertiary: {
      main: "#fadce1",
    },
  },
  components: {
    MuiTypography: {
      variants: [],
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus": {
            outline: "none",
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          "&.MuiPaginationItem-root &.Mui-selected": {
            backgroundColor: "#edbbc3",
          },
        },
      },
    },
  },
});
