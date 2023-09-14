import { Box, Button, Stack } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FC } from "react";
import { useCreateWordMutation, useListWordsQuery } from "../../../reducers/appApis";

export const WordList: FC = () => {
  const { data, refetch } = useListWordsQuery();
  const [createWord] = useCreateWordMutation();
  const handleCreateWord = async () => {
    const data = await createWord({ title: "言葉", definition: "ひとのことば" });
    void refetch();
  };
  return (
    <Stack gap={2}>
      <Box component='div' display='flex' justifyContent='flex-end'>
        <Button variant='contained' onClick={() => handleCreateWord()}>
          create
        </Button>
      </Box>
      <Box component='div' display='flex' justifyContent='center' width='100%'>
        <DataGrid
          columns={columns}
          rows={data ?? []}
          rowSelection
          pageSizeOptions={[100]}
          sx={{ maxWidth: "1000px", height: "90%" }}
        />
      </Box>
    </Stack>
  );
};

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", sortable: true, flex: 1 },
  { field: "title", headerName: "word", sortable: true, flex: 2 },
  { field: "definition", headerName: "definition", sortable: true, flex: 3 },
];
