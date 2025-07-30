import { useAuthStore } from './store/auth.store';
import RegisterWorkshopPage from './pages/super-admin/RegisterWorkshopPage';
import { Button, Box, Typography, AppBar, Toolbar, Container } from '@mui/material';
import InventoryPage from './pages/propietario/InventoryPage';
import RegisterClientPage from './pages/propietario/RegisterClientPage';
import MechanicDashboard from './pages/profesional/MechanicDashboard';
import VehicleStatusPage from './pages/cliente/VehicleStatusPage';
import BillingPage from './pages/propietario/BillingPage';
import ReportsPage from './pages/propietario/ReportsPage';
import type { UserProfile } from './types/user';

function App() {
  const { isAuthenticated, user, login, logout } = useAuthStore();

  const handleLogin = (profile: UserProfile) => {
    login(`${profile}@test.com`, 'password');
  };

  if (!isAuthenticated) {
    return (
      <Container>
        <Box sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>Bienvenido al Sistema de Gestión de Talleres</Typography>
          <Button sx={{ m: 1 }} variant="contained" onClick={() => handleLogin('super-admin')}>Super-Admin</Button>
          <Button sx={{ m: 1 }} variant="contained" onClick={() => handleLogin('propietario')}>Propietario</Button>
          <Button sx={{ m: 1 }} variant="contained" onClick={() => handleLogin('profesional')}>Profesional</Button>
          <Button sx={{ m: 1 }} variant="contained" onClick={() => handleLogin('cliente')}>Cliente</Button>
        </Box>
      </Container>
    )
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TallerApp - {user?.profile}
          </Typography>
          <Typography sx={{ mr: 2 }}>{user?.email}</Typography>
          <Button color="inherit" onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        {user?.profile === 'super-admin' && <RegisterWorkshopPage />}

        {user?.profile === 'propietario' && (
          <>
            <InventoryPage />
            <RegisterClientPage />
            <BillingPage />
            <ReportsPage />
          </>
        )}

        {user?.profile === 'profesional' && <MechanicDashboard />}

        {user?.profile === 'cliente' && <VehicleStatusPage />}
      </Container>
    </Box>
  )
}

export default App;
