import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import { clientService } from '../../services/client.service';
import { useAuthStore } from '../../store/auth.store';

const RegisterClientPage: React.FC = () => {
  const { user } = useAuthStore();
  const [email, setEmail] = useState('');
  const [ruc, setRuc] = useState('');
  const [address, setAddress] = useState('');

  const handleRegister = async () => {
    if (user?.workshopId) {
      await clientService.registerClient({
        email,
        ruc,
        address,
        age: 30, // dummy data
        workshopId: user.workshopId,
      });
      alert('Cliente registrado');
    }
  };

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Registrar Cliente</Typography>
        <TextField label="Email" onChange={(e) => setEmail(e.target.value)} />
        <TextField label="RUC/Cédula" onChange={(e) => setRuc(e.target.value)} />
        <TextField label="Dirección" onChange={(e) => setAddress(e.target.value)} />
        <Button onClick={handleRegister}>Registrar</Button>
      </Box>
    </Container>
  );
};

export default RegisterClientPage;
