import React from 'react';
import { Button, Container, Typography, Box, Card, CardContent, Divider } from '@mui/material';

// Datos simulados para facturación
const invoiceData = {
  subtotal: 100,
  iva: 15,
  total: 115,
  items: [
    { name: 'Mantenimiento de motor', price: 80 },
    { name: 'Filtro de aceite', price: 20 },
  ]
};

const BillingPage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Facturación</Typography>
        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h6">Factura #F001-123</Typography>
            {invoiceData.items.map(item => (
              <Box key={item.name} sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                <Typography>{item.name}</Typography>
                <Typography>${item.price}</Typography>
              </Box>
            ))}
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography>Subtotal:</Typography>
              <Typography>${invoiceData.subtotal}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography>IVA (15%):</Typography>
              <Typography>${invoiceData.iva}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1, fontWeight: 'bold' }}>
              <Typography>Total:</Typography>
              <Typography>${invoiceData.total}</Typography>
            </Box>
          </CardContent>
        </Card>
        <Button variant="contained" sx={{ mt: 2 }}>Imprimir Factura</Button>
      </Box>
    </Container>
  );
};

export default BillingPage;
