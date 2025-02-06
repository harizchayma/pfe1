import { Box, useTheme } from "@mui/material";
import { Header } from "../../components";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import axios from "axios";
import { tokens } from "../../theme";

const Vehicules = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState([]);

  const loaddata = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/get");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des données", error);
    }
  };

  useEffect(() => {
    loaddata();
  }, []);

  const columns = [
   
    { field: "num_immatriculation", headerName: "num_immatriculation", width: 150  },
    { field: "n_serie_du_type", headerName: "n_serie_du_type", width: 150 },
    { field: "constructeur", headerName: "constructeur", width: 100 },
    { field: "genre", headerName: "Genre", width: 100 },
    { field: "type_constructeur", headerName: "type_constructeur", width: 150 },
    { field: "DPMC", headerName: "DPMC", width: 150 },
    { field: "type_commercial", headerName: "type_commercial", width: 150 },
    { field: "carrosserie", headerName: "carrosserie", width: 100 },
    { field: "energie", headerName: "energie", width: 100 },
    { field: "puissance_fiscale", headerName: "puissance_fiscale", width: 150 },
    { field: "nbr_places", headerName: "nbr_places", width: 100 },
    { field: "cylindree", headerName: "cylindree", width: 100 },
    { field: "num_certificat", headerName: "num_certificat", width: 100 },
    { field: "lieu_certificat", headerName: "lieu_certificat", width: 100 },
    { field: "date_certificat", headerName: "date_certificat", width: 150 },

  ];

  return (
    <Box m="20px">
      <Header title="Vehicules" subtitle="liste des vehicules" />
      <Box
        mt="0px"
        height="75vh"
        maxWidth="100%"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { border: "none" },
          "& .name-column--cell": { color: colors.greenAccent[300] },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.redAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.redAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-iconSeparator": {
            color: colors.primary[100],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.gray[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={data} // Correction ici
          columns={columns} // Correction ici
          components={{ Toolbar: GridToolbar }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize:10,
              },
            },
          }}
          checkboxSelection
        />
      </Box>
    </Box>
  );
};

export default Vehicules;
