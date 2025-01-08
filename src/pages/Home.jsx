import { Box, Typography, TextField, Button, Container } from '@mui/material';
import { useState } from 'react';

// Estilo para los títulos y texto en la página
const titleStyle = {
  fontFamily: '"Dancing Script", cursive',
  textAlign: 'center',
  color: '#2e7d32', // Verde natural
};

const Home = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [isSubscribed, setIsSubscribed] = useState(false); // Estado para controlar si el usuario se ha suscrito

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
    };

    // Validación de campos
    if (!formData.firstName) {
      newErrors.firstName = 'El nombre es requerido';
      isValid = false;
    }
    if (!formData.lastName) {
      newErrors.lastName = 'El apellido es requerido';
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = 'El correo es requerido';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'El correo es inválido';
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
    } else {
      // Enviar el formulario
      console.log('Formulario enviado:', formData);

      // Mostrar mensaje de éxito
      setIsSubscribed(true);

      // Limpiar campos del formulario
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
      });

      // Limpiar errores
      setErrors({
        firstName: '',
        lastName: '',
        email: '',
      });
    }
  };

  return (
    <Box style={{ backgroundColor: '#f1f8e9', minHeight: '100vh', padding: '2em' }}>
      <Container maxWidth="md">
        {/* Títulos */}
        <Typography variant="h3" style={titleStyle}>
          Bienvenidos a Aves de Chile
        </Typography>
        <Typography variant="h5" style={{ ...titleStyle, marginBottom: '2em' }}>
          Descubre la diversidad de las aves chilenas
        </Typography>

        {/* Si el usuario se suscribió, mostrar mensaje de agradecimiento */}
        {isSubscribed ? (
          <Typography variant="h4" style={{ ...titleStyle, color: 'green' }}>
            ¡Gracias por suscribirte a nuestro Newsletter!
          </Typography>
        ) : (
          // Formulario de suscripción
          <Box
            component="form"
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#e8f5e9',
              padding: '2em',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography variant="h6" style={{ ...titleStyle, marginBottom: '1.5em' }}>
              ¡Suscríbete a nuestro Newsletter!
            </Typography>

            {/* Campos de texto con validación */}
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={{ marginBottom: '1em' }}
              error={Boolean(errors.firstName)}
              helperText={errors.firstName}
            />
            <TextField
              label="Apellido"
              variant="outlined"
              fullWidth
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={{ marginBottom: '1em' }}
              error={Boolean(errors.lastName)}
              helperText={errors.lastName}
            />
            <TextField
              label="Correo Electrónico"
              variant="outlined"
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ marginBottom: '1.5em' }}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />

            <Button variant="contained" color="primary" type="submit" style={{ textTransform: 'none' }}>
              Suscribirse
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Home;


  