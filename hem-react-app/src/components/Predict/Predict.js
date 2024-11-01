// src/components/Predict.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

function Predict() {
  const [formData, setFormData] = useState({
    rooms: '',
    bathroom: '',
    distanceFromCBD: ''
  });
  const [predictions, setPredictions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePredict = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          rooms: parseInt(formData.rooms),
          distance_from_cbd: parseFloat(formData.distanceFromCBD),
          bathroom: parseInt(formData.bathroom)
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch predictions');
      }

      const data = await response.json();
      setPredictions(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>
        Predict Housing Prices
      </Typography>

      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField
          label="Rooms"
          name="rooms"
          value={formData.rooms}
          onChange={handleChange}
          type="number"
          required
          InputProps={{
            inputProps: { min: 1, max: 5 } // Cap rooms between 1 and 5
          }}
        />
        <TextField
          label="Distance from CBD (km)"
          name="distanceFromCBD"
          value={formData.distanceFromCBD}
          onChange={handleChange}
          type="number"
          required
          InputProps={{
            inputProps: { min: 2.7, max: 24.7, step: 0.1 } // Cap distance from 2.7 to 24.7
          }}
        />
        <TextField
          label="Bathroom"
          name="bathroom"
          value={formData.bathroom}
          onChange={handleChange}
          type="number"
          required
          InputProps={{
            inputProps: { min: 1, max: 3 } // Cap bathrooms at 3
          }}
        />
        <Button variant="contained" onClick={handlePredict} disabled={loading}>
          {loading ? 'Loading...' : 'Get Predictions'}
        </Button>
      </Box>

      {error && <Typography color="error" sx={{ marginTop: 2 }}>{error}</Typography>}

      {predictions && (
        <Box sx={{ marginTop: '40px' }}>
          <Typography variant="h6">Prediction Results:</Typography>
          <Typography>Random Forest Prediction: {predictions["Random Forest Prediction"]}</Typography>
          <Typography>Polynomial Regression Prediction: {predictions["Polynomial Regression Prediction"]}</Typography>
          <Typography>Gradient Boosting Prediction: {predictions["Gradient Boosting Prediction"]}</Typography>
        </Box>
      )}
    </Box>
  );
}

export default Predict;
