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
      field: "paymentAmount",
      headerName: "Valor monetário",
      width: 150,
      editable: true,
    },
    {
      field: "information",
      headerName: "information",
      width: 150,
      editable: true,
    },
    {
      field: "expiredDate",
      headerName: "Data de Publicação",
      type: "number",
      width: 150,
      editable: true,
      valueGetter: (params) =>
        `${params.row.expiredDate ?? "---"}`,
    },
  ];

  useEffect(() => {
    HttpCall("api/payments", setPayments);
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
