import { useState, useEffect } from 'react';
import BirdCard from '../components/BirdCard';
import { Box, CircularProgress } from '@mui/material';

// Estilo para el fondo verde crema
const pageStyle = {
  backgroundColor: '#f1f8e9', // Verde crema
  padding: '2em',
  minHeight: '100vh',
};

const Birds = () => {
  const [birds, setBirds] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBirds = async () => {
      try {
        const response = await fetch('https://aves.ninjas.cl/api/birds');
        if (!response.ok) throw new Error('Error al obtener datos de la API');
        const data = await response.json();
        setBirds(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBirds();
  }, []);

  if (error) return <div>Error: {error}</div>;

  // Si los datos no han sido cargados, muestra el indicador de carga
  if (birds.length === 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', // Ocupa toda la pantalla mientras carga
          backgroundColor: '#f1f8e9',
        }}
      >
        <CircularProgress size={60} sx={{ color: '#2e7d32' }} />
      </Box>
    );
  }

  return (
    <div style={pageStyle}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {birds.map(bird => (
          <BirdCard key={bird.uid} bird={bird} />
        ))}
      </div>
    </div>
  );
};

export default Birds;


