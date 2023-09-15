import { Box, Stack } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FC, useState } from "react";
import { useListWordsQuery } from "../../../reducers/appApis";
import { BasicButton } from "../../atoms/basicButton/basicButton";
import { CreateWordDialog } from "../createWordDialog/createWordDialog";

export const WordList: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useListWordsQuery();
  return (
    <Stack gap={2}>
      <Box component='div' display='flex' justifyContent='flex-end'>
        <BasicButton variant='contained' onClick={() => setIsOpen(true)} title='ADD' />
      </Box>
      <Box component='div' display='flex' justifyContent='center' width='100%'>
        <DataGrid
          columns={columns}
          rows={data ?? []}
          rowSelection
          pageSizeOptions={[100]}
          sx={{ maxWidth: "1000px", height: "700px" }}
        />
      </Box>
      <CreateWordDialog open={isOpen} handleClose={() => setIsOpen(false)} />
    </Stack>
  );
};

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", sortable: true, flex: 1 },
  { field: "title", headerName: "word", sortable: true, flex: 2 },
  { field: "definition", headerName: "definition", sortable: true, flex: 3 },
];
