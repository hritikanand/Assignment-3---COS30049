import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Bar, Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

function Predict() {
  const [formData, setFormData] = useState({
    rooms: '',
    bathroom: '',
    distanceFromCBD: '',
    schoolingFacilities: ''
  });
  const [predictions, setPredictions] = useState(null);
  const [featureImportances, setFeatureImportances] = useState(null);
  const [selectedModel, setSelectedModel] = useState('Random Forest');
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
          bathroom: parseInt(formData.bathroom),
          schooling_facilities: parseInt(formData.schoolingFacilities)
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch predictions');
      }

      const data = await response.json();
      setPredictions(data);
      setFeatureImportances(data['Feature Importances']);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Data for the Bar Chart
  const barChartData = {
    labels: ['Random Forest', 'Polynomial Regression', 'Gradient Boosting'],
    datasets: [
      {
        label: 'Price Prediction',
        data: predictions ? [
          predictions["Random Forest Prediction"],
          predictions["Polynomial Regression Prediction"],
          predictions["Gradient Boosting Prediction"]
        ] : [],
        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b']
      }
    ]
  };

  // Data for the Line Chart (hypothetical trend over distance from CBD)
  const lineChartData = {
    labels: Array.from({ length: 10 }, (_, i) => `${i + 1} km`),
    datasets: [
      {
        label: 'Price Prediction Trend',
        data: predictions ? Array.from({ length: 10 }, (_, i) => predictions["Random Forest Prediction"] - (i * 10000)) : [],
        borderColor: '#3b82f6',
        fill: false
      }
    ]
  };

  // Data for the Pie Chart (Feature Importances)
  const pieChartData = {
    labels: featureImportances ? Object.keys(featureImportances[selectedModel]) : [],
    datasets: [
      {
        label: 'Feature Importance',
        data: featureImportances ? Object.values(featureImportances[selectedModel]) : [],
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40']
      }
    ]
  };

  return (
    <Box sx={{ padding: '50px', maxWidth: '1000px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>
        Predict Housing Prices
      </Typography>

      <Grid container spacing={4}>
        {/* Form Section */}
        <Grid item xs={12} md={predictions ? 6 : 12}>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
              backgroundColor: predictions ? '#f0f0f0' : 'transparent',
              padding: predictions ? '20px' : '0',
              borderRadius: predictions ? '10px' : '0'
            }}
          >
            <TextField
              label="Rooms"
              name="rooms"
              value={formData.rooms}
              onChange={handleChange}
              type="number"
              required
              InputProps={{
                inputProps: { min: 1, max: 5 }
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
                inputProps: { min: 2.7, max: 24.7, step: 0.1 }
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
                inputProps: { min: 1, max: 3 }
              }}
            />
            
            <FormControl fullWidth required>
              <InputLabel>Region</InputLabel>
              <Select
                name="schoolingFacilities"
                value={formData.schoolingFacilities}
                onChange={handleChange}
                label="Region"
              >
                <MenuItem value={202}>Eastern Metropolitan</MenuItem>
                <MenuItem value={95}>Eastern Victoria</MenuItem>
                <MenuItem value={239}>Northern Metropolitan</MenuItem>
                <MenuItem value={36}>Northern Victoria</MenuItem>
                <MenuItem value={185}>South-Eastern Metropolitan</MenuItem>
                <MenuItem value={191}>Southern Metropolitan</MenuItem>
                <MenuItem value={229}>Western Metropolitan</MenuItem>
                <MenuItem value={21}>Western Victoria</MenuItem>
              </Select>
            </FormControl>

            <Button variant="contained" onClick={handlePredict} disabled={loading}>
              {loading ? 'Loading...' : 'Get Predictions'}
            </Button>
          </Box>

          {error && <Typography color="error" sx={{ marginTop: 2 }}>{error}</Typography>}
        </Grid>

        {/* Pie Chart for Feature Importance - Only Visible After Prediction */}
        {predictions && (
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ marginBottom: 4 }}>
              <InputLabel>Feature Importance for Model</InputLabel>
              <Select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                label="Feature Importance for Model"
              >
                <MenuItem value="Random Forest">Random Forest</MenuItem>
                <MenuItem value="Gradient Boosting">Gradient Boosting</MenuItem>
                <MenuItem value="Polynomial Regression">Polynomial Regression</MenuItem>
              </Select>
            </FormControl>

            <Typography variant="h6" sx={{ marginBottom: 2 }}>Feature Importance - {selectedModel}</Typography>
            <Pie data={pieChartData} options={{ responsive: true }} />
          </Grid>
        )}
      </Grid>

      {predictions && (
        <Grid container spacing={4} sx={{ marginTop: '40px' }}>
          {/* Bar Chart for model comparison */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Model Comparison</Typography>
            <Bar data={barChartData} options={{ responsive: true }} />
          </Grid>

          {/* Line Chart for Price vs Distance from CBD */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Price Prediction Trend (over Distance)</Typography>
            <Line data={lineChartData} options={{ responsive: true }} />
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default Predict;
