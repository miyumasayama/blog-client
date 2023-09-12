import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FC } from "react";
import { useListWordsQuery } from "../../../reducers/appApis";

export const WordList: FC = () => {
  const { data } = useListWordsQuery();
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "800px" }}>
        <DataGrid columns={columns} rows={data?.post ?? []} rowSelection pageSizeOptions={[100]} />
      </div>
    </div>
  );
};

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", sortable: true, flex: 1 },
  { field: "title", headerName: "word", sortable: true, flex: 2 },
  { field: "content", headerName: "definition", sortable: true, flex: 3 },
];
