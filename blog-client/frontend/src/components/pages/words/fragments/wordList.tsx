import { Box, Button, CircularProgress, Stack } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FC, useState } from "react";
import { useListWordsQuery } from "../../../../reducers/appApis";
import { setWordPage } from "../../../../reducers/word";
import { selectWord } from "../../../../reducers/word/selector";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { Word } from "../../../../types/word";
import { perPageItem } from "../../../../utils/word";
import { BasicButton } from "../../../atoms/basicButton/basicButton";
import { Pagination } from "../../../atoms/pagination/pagination";
import { NoResult } from "../../../molecules/noResult/noResult";
import { CreateWordDialog } from "./createWordDialog";

export const WordList: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { page } = useAppSelector(selectWord);
  const dispatch = useAppDispatch();
  const { data, isLoading } = useListWordsQuery({ offset: 0, per_page: perPageItem });
  const [selectedWord, setSelectedWord] = useState<Word | undefined>();

  const handleChangePage = (page: number) => {
    dispatch(setWordPage(page));
  };

  const columns: GridColDef[] = [
    { field: "title", headerName: "word", disableColumnMenu: true, sortable: true, flex: 2 },
    { field: "definition", headerName: "definition", disableColumnMenu: true, sortable: true, flex: 3 },
    {
      field: "editBtn",
      headerName: "",
      sortable: false,
      width: 120,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Button
          variant='contained'
          color='primary'
          onClick={() => {
            setSelectedWord(params.row);
            setIsOpen(true);
          }}
        >
          編集
        </Button>
      ),
    },
  ];

  return (
    <Stack gap={2}>
      <Box component='div' display='flex' justifyContent='flex-end'>
        <BasicButton variant='contained' onClick={() => setIsOpen(true)} title='ADD' />
      </Box>
      <Stack justifyContent='center' alignItems='center' gap={2} width='100%' height='100%'>
        {isLoading ? (
          <CircularProgress color='tertiary' />
        ) : (
          <>
            {data?.total === 0 ? (
              <Box component='div' my={4}>
                <NoResult />
              </Box>
            ) : (
              <>
                <Box component='div' width='100%' sx={{ maxWidth: "1000px" }}>
                  <DataGrid
                    columns={columns}
                    rows={data?.data ?? []}
                    rowSelection
                    hideFooter={true}
                    pageSizeOptions={[100]}
                    sx={{ height: "700px" }}
                  />
                </Box>
                <Pagination page={page} maxPage={data?.last_page ?? 0} handleChange={handleChangePage} />
              </>
            )}
          </>
        )}
      </Stack>
      <CreateWordDialog
        open={isOpen}
        selectedWord={selectedWord}
        handleClose={() => {
          setIsOpen(false);
          setSelectedWord(undefined);
        }}
      />
    </Stack>
  );
};
