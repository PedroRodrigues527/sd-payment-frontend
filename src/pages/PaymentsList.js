import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import HttpCall from "../utils/HttpCall";
import styled from "@emotion/styled";

const DataGridWrapper = styled("div")`
  & .MuiDataGrid-columnHeaders {
    & .MuiDataGrid-columnHeader:first-child {
      visibility: hidden;
    }
  }
`;

export default function PaymentsList() {
  const [payments, setPayments] = useState(null);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Título",
      width: 150,
      editable: true,
    },
    {
      field: "author",
      headerName: "Autores",
      width: 150,
      editable: true,
    },
    {
      field: "content",
      headerName: "Conteúdo",
      width: 150,
      editable: true,
    },
    {
      field: "journal",
      headerName: "Revista",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "editor",
      headerName: "Editor",
      type: "number",
      width: 120,
      editable: true,
    },
    {
      field: "publication_date",
      headerName: "Data de Publicação",
      type: "number",
      width: 150,
      editable: true,
      valueGetter: (params) =>
        `${params.row.publication_date ?? "Por publicar"}`,
    },
  ];

  useEffect(() => {
    HttpCall("api/payment/1", setPayments);
  }, []);

  return (
    <div>
      {payments && (
        <DataGridWrapper>
          <DataGrid
            rows={payments}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            editMode="false"
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick={true}
          ></DataGrid>
        </DataGridWrapper>
      )}
    </div>
  );
}
