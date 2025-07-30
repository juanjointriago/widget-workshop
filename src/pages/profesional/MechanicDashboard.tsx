import React, { useState, useEffect } from 'react';
import { Button, Container, Typography, Box, Card, CardContent, CardActions } from '@mui/materia';
import { serviceOrderService } from '../../services/serviceOrder.service';
import type { ServiceOrder } from '../../types/serviceOrder';

// Datos simulados de órdenes asignadas
const assignedOrders: ServiceOrder[] = [
  { id: '1', vehicleId: 'V1', mechanicId: '3', items: [], status: 'iniciado', photos: [], workshopId: '1' },
  { id: '2', vehicleId: 'V2', mechanicId: '3', items: [], status: 'iniciado', photos: [], workshopId: '1' },
];

const MechanicDashboard: React.FC = () => {
  const [orders, setOrders] = useState<ServiceOrder[]>(assignedOrders);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const handleStatusChange = (id: string, status: 'avanzado' | 'finalizado') => {
    serviceOrderService.updateStatus(id, status);
    setOrders(orders.map(o => o.id === id ? { ...o, status } : o));
    if (status === 'finalizado' && timer) {
      clearInterval(timer);
    }
  };

  useEffect(() => {
    // Simulación de cronómetro
    const interval = setInterval(() => {
      console.log('Cronómetro corriendo...');
    }, 1000);
    setTimer(interval);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Panel del Mecánico</Typography>
        {orders.map(order => (
          <Card key={order.id} sx={{ mt: 2 }}>
            <CardContent>
              <Typography>Orden #{order.id} - Vehículo {order.vehicleId}</Typography>
              <Typography>Estado: {order.status}</Typography>
            </CardContent>
            <CardActions>
              {order.status === 'iniciado' && (
                <Button onClick={() => handleStatusChange(order.id, 'avanzado')}>Marcar como Avanzado</Button>
              )}
              {order.status === 'avanzado' && (
                <Button onClick={() => handleStatusChange(order.id, 'finalizado')}>Finalizar Tarea</Button>
              )}
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default MechanicDashboard;
