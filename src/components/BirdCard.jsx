import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// Estilo para la card y la imagen
const cardStyle = {
  maxWidth: 300,
  margin: '1em',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  cursor: 'pointer',  // Indicamos que la card es interactiva
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  borderRadius: '8px',
};

// Tipografía personalizada
const typographyStyle = {
  fontFamily: '"Dancing Script", cursive',
  color: '#2e7d32',
};

const BirdCard = ({ bird }) => (
  <Link to={`/bird/${bird.uid}`} style={{ textDecoration: 'none' }}> {/* Redirige a la página de detalles */}
    <Card style={cardStyle}>
      <CardMedia
        component="img"
        alt={bird.name.spanish}
        image={bird.images.main}
        style={imageStyle}
      />
      <CardContent>
        {/* Solo mostramos el nombre en español */}
        <Typography variant="h6" style={typographyStyle}>
          {bird.name.spanish}
        </Typography>
      </CardContent>
    </Card>
  </Link>
);

export default BirdCard;




