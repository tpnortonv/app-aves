import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import logo from '../assets/logo.png';

// Estilo global para la tipografía personalizada
const navbarStyle = {
  fontFamily: '"Dancing Script", cursive',
};

const Navbar = () => (
  <AppBar position="static" style={{ backgroundColor: '#2e7d32', padding: '0.5em' }}>
    <Toolbar>
      {/* Logo con redirección al Home */}
      <Box component={Link} to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', marginRight: '1em' }}>
        <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '0.5em' }} />
        {/* Tipografía exótica aplicada al título */}
        <Typography variant="h6" style={{ ...navbarStyle, color: 'white' }}>
          Aves de Chile
        </Typography>
      </Box>

      {/* Botones con borde y tipografía exótica */}
      <Box style={{ marginLeft: 'auto' }}>
        <Button
          variant="outlined"
          component={Link}
          to="/"
          style={{
            color: 'white',
            borderColor: 'white',
            marginRight: '0.5em',
            textTransform: 'none',
            fontFamily: '"Dancing Script", cursive', // Tipografía en los botones
          }}
        >
          Inicio
        </Button>
        <Button
          variant="outlined"
          component={Link}
          to="/birds"
          style={{
            color: 'white',
            borderColor: 'white',
            textTransform: 'none',
            fontFamily: '"Dancing Script", cursive', // Tipografía en los botones
          }}
        >
          Aves
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;



