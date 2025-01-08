import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Typography, Box, CircularProgress } from '@mui/material';

const typographyStyle = {
  fontFamily: '"Dancing Script", cursive',
  color: '#2e7d32',
};

const BirdDetail = () => {
  const { uid } = useParams(); // Obtenemos el uid de la URL
  const [bird, setBird] = useState(null);

  useEffect(() => {
    const fetchBirdDetails = async () => {
      try {
        const response = await fetch(`https://aves.ninjas.cl/api/birds/${uid}`);
        if (!response.ok) throw new Error('Error al obtener los detalles de la ave');
        const data = await response.json();
        setBird(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBirdDetails();
  }, [uid]);

  if (!bird) {
    // Mostrar el indicador de carga mientras se obtiene la información
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', // Ocupa toda la pantalla mientras carga
          backgroundColor: '#f1f5e1',
        }}
      >
        <CircularProgress size={60} sx={{ color: '#2e7d32' }} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 0, // Elimina márgenes innecesarios
        padding: '2em',
        backgroundColor: '#f1f5e1', // Fondo verde crema
        minHeight: '100vh', // Asegura que ocupe toda la altura de la pantalla
      }}
    >
      {/* Imagen ampliada con borde redondeado */}
      <img
        src={bird.images.main}
        alt={bird.name.spanish}
        style={{
          width: '80%',
          maxWidth: '500px',
          height: 'auto',
          borderRadius: '15px', // Border radius para redondear los bordes
          border: '5px solid #2e7d32', // Borde decorativo verde
        }}
      />
      {/* Información de la ave */}
      <Typography variant="h4" style={typographyStyle} sx={{ marginTop: '1em' }}>
        {bird.name.spanish}
      </Typography>
      <Typography variant="h6" style={typographyStyle}>
        Nombre en inglés: {bird.name.english}
      </Typography>
      <Typography variant="body1" style={typographyStyle}>
        Nombre científico: {bird.name.latin}
      </Typography>
    </Box>
  );
};

export default BirdDetail;



