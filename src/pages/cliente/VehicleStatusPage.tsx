import React from 'react';
import { Container, Typography, Box, Card, CardContent, Stepper, Step, StepLabel } from '@mui/material';
import type { ServiceOrder, ServiceStatus } from '../../types/serviceOrder';

// Datos simulados
const clientOrder: ServiceOrder = {
  id: '1',
  vehicleId: 'V1',
  mechanicId: '3',
  items: [{ serviceId: 'S1', productId: 'P1' }],
  status: 'avanzado',
  photos: [/* 'url/to/photo1.jpg' */],
  workshopId: '1',
};

const steps: ServiceStatus[] = ['iniciado', 'avanzado', 'finalizado'];

const VehicleStatusPage: React.FC = () => {
  const activeStep = steps.indexOf(clientOrder.status);

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Estado de tu Vehículo (Placa: XYZ-123)</Typography>
        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h6">Orden de Servicio #{clientOrder.id}</Typography>
            <Stepper activeStep={activeStep} alternativeLabel sx={{ mt: 3 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label.charAt(0).toUpperCase() + label.slice(1)}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h6">Fotos del Vehículo</Typography>
              {/* Aquí se mostrarían las imágenes */}
              <Typography>
                {clientOrder.photos.length > 0 ? 'Fotos...' : 'Aún no hay fotos.'}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default VehicleStatusPage;
