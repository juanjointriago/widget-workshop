import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import { workshopService } from '../../services/workshop.service';

const RegisterWorkshopPage: React.FC = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [ruc, setRuc] = useState('');
  const [phone, setPhone] = useState('');
  const [sriWebService, setSriWebService] = useState('');
  const [ownerId, setOwnerId] = useState('');


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await workshopService.createWorkshop({
        name,
        logo: 'default_logo.png',
        address,
        ruc,
        colors: { primary: '#00BFFF', secondary: '#FF0000' },
        phone,
        sriWebService,
        ownerId,
      });
      alert('Taller registrado con éxito');
      // Limpiar formulario
    } catch (error) {
      alert('Error al registrar el taller');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Registrar Nuevo Taller Mecánico
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre del Taller"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Dirección"
            variant="outlined"
            fullWidth
            margin="normal"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            label="RUC"
            variant="outlined"
            fullWidth
            margin="normal"
            value={ruc}
            onChange={(e) => setRuc(e.target.value)}
          />
          <TextField
            label="Teléfono"
            variant="outlined"
            fullWidth
            margin="normal"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            label="Web Service SRI"
            variant="outlined"
            fullWidth
            margin="normal"
            value={sriWebService}
            onChange={(e) => setSriWebService(e.target.value)}
          />
          <TextField
            label="ID del Propietario"
            variant="outlined"
            fullWidth
            margin="normal"
            value={ownerId}
            onChange={(e) => setOwnerId(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Registrar Taller
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default RegisterWorkshopPage;
