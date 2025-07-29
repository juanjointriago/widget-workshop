import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import { inventoryService } from '../../services/inventory.service';
import { useAuthStore } from '../../store/auth.store';

const InventoryPage: React.FC = () => {
    const { user } = useAuthStore();
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productStock, setProductStock] = useState(0);

  const handleAddProduct = async () => {
    if (user?.workshopId) {
      await inventoryService.addProduct({
        name: productName,
        description: 'Descripción...',
        price: productPrice,
        stock: productStock,
        type: 'repuesto',
        workshopId: user.workshopId,
      });
      alert('Producto añadido');
    }
  };

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Gestión de Inventario</Typography>
        <TextField label="Nombre Producto" onChange={(e) => setProductName(e.target.value)} />
        <TextField label="Precio" type="number" onChange={(e) => setProductPrice(parseFloat(e.target.value))} />
        <TextField label="Stock" type="number" onChange={(e) => setProductStock(parseInt(e.target.value, 10))} />
        <Button onClick={handleAddProduct}>Añadir Producto</Button>
      </Box>
    </Container>
  );
};

export default InventoryPage;
