import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import * as XLSX from 'xlsx';

// Datos simulados para el reporte
const reportData = [
  { mes: 'Enero', ingresos: 5000, gastos: 3000, ganancias: 2000 },
  { mes: 'Febrero', ingresos: 6000, gastos: 3500, ganancias: 2500 },
  { mes: 'Marzo', ingresos: 5500, gastos: 3200, ganancias: 2300 },
];

const ReportsPage: React.FC = () => {
  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(reportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Reporte');
    XLSX.writeFile(workbook, 'reporte_ingresos.xlsx');
  };

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Reportes Estadísticos</Typography>
        {/* Aquí irían los gráficos */}
        <Button variant="contained" sx={{ mt: 2 }} onClick={handleExport}>
          Exportar a Excel
        </Button>
      </Box>
    </Container>
  );
};

export default ReportsPage;
