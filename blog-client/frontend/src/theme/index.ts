import { createTheme } from "@mui/material/styles";
import type {} from "@mui/x-data-grid/themeAugmentation";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#CDE6C7",
    },
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus": {
            outline: "none",
          },
        },
      },
    },
  },
});
