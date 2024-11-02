import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem, Paper } from '@mui/material';
import { Bar, Line, Pie } from 'react-chartjs-2';
import SchoolIcon from '@mui/icons-material/School';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
import 'chart.js/auto';
import { Fade } from '@mui/material';


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

  // Data for Charts
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

  ChartJS.register(Tooltip, Legend, ArcElement);

  const pieChartOptions = { // Allows Pie Chart to be Donut Chart
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            family: '"Roboto Condensed", sans-serif',
            size: 14,
          },
          color: '#4A4A4A',
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            let value = context.raw;
            let total = context.chart._metasets[context.datasetIndex].total;
            let percentage = ((value / total) * 100).toFixed(1) + '%';
            return `${label}: ${percentage}`;
          },
        },
        backgroundColor: '#2F4F4F',
        titleFont: { size: 14 },
        bodyFont: { size: 14 },
        padding: 10,
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    },
    cutout: '40%',
  };


  const pieChartData = {
    labels: featureImportances ? Object.keys(featureImportances[selectedModel]) : [],
    datasets: [
      {
        label: 'Feature Importance',
        data: featureImportances ? Object.values(featureImportances[selectedModel]) : [],
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40'],
        borderColor: '#FFFFFF',
        borderWidth: 2
      },
    ],
  };

  return (
    <Box sx={{
      padding: '50px',
      maxWidth: '1500px',
      margin: '0 auto'
    }}>
      <Typography variant="h4" gutterBottom align="center" sx={{
        marginBottom: '50px',
        fontFamily: '"Roboto Condensed", sans-serif',
        fontSize: '2.5rem'
      }}>
        Predict With Us
      </Typography>

      {/* Centered Container for Form and Results */}
      <Grid container spacing={6} justifyContent="center" alignItems="flex-start">

        {/* Form Container */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {predictions && (
              <Typography variant="h6" sx={{
                marginBottom: '20px',
                fontFamily: '"Roboto Condensed", sans-serif',
                fontSize: '1.5rem',
                color: '#2F4F4F'
              }}>
                Have Different Features? Refine your Prediction!
              </Typography>
            )}

            <Box
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                backgroundColor: predictions ? '#F5F5F5' : 'transparent',
                padding: predictions ? '40px' : '0',
                borderRadius: '10px',
                width: '100%',
                maxWidth: '800px',
              }}
            >
              <TextField label="Rooms"
                name="rooms"
                value={formData.rooms}
                onChange={handleChange}
                sx={{
                  backgroundColor: 'white',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderWidth: '3px', // thickness of the outline
                      borderColor: '#CED1D6'
                    },
                    '&:hover fieldset': {
                      borderWidth: '3px', //thickness on hover
                      borderColor: '#2F4F4F', //color when hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#2F4F4F', //color when focused
                      borderWidth: '3px', // thickness when focused
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#A3A7AF', // Default label color
                    fontWeight: 'bold',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#2F4F4F', // Color when label is focused
                  }
                }}
                InputLabelProps={{
                  style: {
                    fontWeight: 'bold',
                  }
                }}
                type="number" required InputProps={{
                  inputProps: { min: 1, max: 5 } // Min and Max for Rooms input
                }}
              />

              <TextField label="Distance from CBD (km)"
                name="distanceFromCBD"
                value={formData.distanceFromCBD}
                onChange={handleChange}
                sx={{
                  backgroundColor: 'white',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderWidth: '3px',
                      borderColor: '#CED1D6'
                    },
                    '&:hover fieldset': {
                      borderWidth: '3px',
                      borderColor: '#2F4F4F',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#2F4F4F',
                      borderWidth: '3px',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#A3A7AF', // Default label color
                    fontWeight: 'bold',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#2F4F4F', // Color when label is focused
                  }
                }}
                InputLabelProps={{
                  style: {
                    fontWeight: 'bold',
                  }
                }}
                type="number" required InputProps={{
                  inputProps: { min: 2.7, max: 24.7, step: 0.1 } // Min Max for Distance in KM
                }}
              />

              <TextField label="Bathroom"
                name="bathroom"
                value={formData.bathroom}
                onChange={handleChange}
                sx={{
                  backgroundColor: 'white',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderWidth: '3px',
                      borderColor: '#CED1D6'
                    },
                    '&:hover fieldset': {
                      borderWidth: '3px',
                      borderColor: '#2F4F4F',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#2F4F4F',
                      borderWidth: '3px',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#A3A7AF', // Default label color
                    fontWeight: 'bold',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#2F4F4F', // Color when label is focused
                  }
                }}
                InputLabelProps={{
                  style: {
                    fontWeight: 'bold',
                  }
                }}
                type="number"
                required
                InputProps={{
                  inputProps: { min: 1, max: 3 } // Min Max Bathrooms
                }}
              />

              <FormControl
                fullWidth
                required
                sx={{
                  backgroundColor: 'white',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderWidth: '3px',
                      borderColor: '#CED1D6'
                    },
                    '&:hover fieldset': {
                      borderWidth: '3px',
                      borderColor: '#2F4F4F'
                    },
                    '&.Mui-focused fieldset': {
                      borderWidth: '3px',
                      borderColor: '#2F4F4F'
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#A3A7AF', // Default label color
                    fontWeight: 'bold',
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#2F4F4F', // Color when label is focused
                  }
                }}
                InputLabelProps={{
                  style: {
                    fontWeight: 'bold',
                  }
                }}
              >

                <InputLabel>Region</InputLabel>
                <Select
                  name="schoolingFacilities"
                  value={formData.schoolingFacilities}
                  onChange={handleChange}
                  label="Region"
                  sx={{
                    textAlign: 'left',
                    '& .MuiSelect-select': {
                      padding: '15px',
                    }
                  }}
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

              <Button // Button for input form
                variant="contained"
                onClick={handlePredict}
                sx={{
                  backgroundColor: '#2F4F4F',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '12px 45px',
                  '&:hover': {
                    backgroundColor: '#2F4F4F',
                  },
                }}
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Get Predictions'}
              </Button>
            </Box>
          </Box>
        </Grid>


        {/* Prediction Results Container */}
        {predictions && (
          <Grid item xs={12} md={5}>
            <Box>
              <Typography variant="h6" align="center" sx={{
                marginBottom: '20px',
                fontFamily: '"Roboto Condensed", sans-serif',
                fontSize: '1.5rem',
                color: '#2F4F4F'
              }}>
                Prediction Results
              </Typography>

              <Grid container spacing={2} direction="column" alignItems="stretch" sx={{
                width: '100%',
                maxWidth: '600px',
                margin: '0 auto',
                mt: 5
              }}
              >
                {['Random Forest', 'Polynomial Regression', 'Gradient Boosting'].map((model, idx) => (
                  <Fade
                    in={true}
                    timeout={(idx + 1) * 500} // For cascading effect on prices
                    key={`${model}-${JSON.stringify(predictions)}`} // Unique key to trigger restarting animation
                  >
                    <Grid item xs={12}>
                      <Paper elevation={3} sx={{
                        padding: '20px',
                        textAlign: 'center',
                        backgroundColor: '#2F4F4F'
                      }}>
                        <Typography variant="h6" sx={{
                          color: 'white',
                          fontFamily: '"Roboto Condensed", sans-serif',
                          fontSize: '1.5rem'
                        }}>
                          {model}
                        </Typography>

                        <Typography variant="h5" sx={{
                          color: 'white',
                          fontFamily: '"Roboto Condensed", sans-serif',
                          fontSize: '1.5rem'
                        }}>
                          ${predictions[`${model} Prediction`].toFixed(2)}
                        </Typography>
                      </Paper>
                    </Grid>
                  </Fade>
                ))}
              </Grid>
            </Box>
          </Grid>
        )}
      </Grid>

      {/* Charts Section */}
      {predictions && (
        <Box sx={{ marginTop: '50px' }}>

          {/* Title for the Charts Section */}
          <Typography
            variant="h6"
            align="center"
            sx={{
              marginTop: '120px',
              marginBottom: '60px',
              fontFamily: '"Roboto Condensed", sans-serif',
              fontSize: '2.3rem',
              fontStyle: 'italic',
              color: '#2F4F4F'
            }}
          >
            How do Property Prices Compare?
          </Typography>

          {/* Line Chart & Description */}
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ marginBottom: '10px', fontFamily: '"Roboto Condensed", sans-serif', fontSize: '1.5rem' }}>
                  Price Prediction Trend (over Distance)
                </Typography>
                <Box sx={{ position: 'relative', height: '400px' }}>
                  <Line data={lineChartData} options={{ responsive: true, maintainAspectRatio: false }} />
                </Box>
              </Box>
              <Paper elevation={3} sx={{ padding: 2, marginTop: 2, backgroundColor: '#9fb3ac' }}>
                <Typography variant="body2" sx={{ padding: 3, color: 'black', fontSize: '1rem' }}>
                  This chart demonstrates the trend of property prices as they stem further away from the CBD of Victoria.
                </Typography>
              </Paper>
            </Grid>

            {/* Bar Chart & Description */}

            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ marginBottom: '10px', fontFamily: '"Roboto Condensed", sans-serif', fontSize: '1.5rem' }}>
                  Model Comparison
                </Typography>
                <Box sx={{ position: 'relative', height: '400px' }}>
                  <Bar data={barChartData} options={{ responsive: true, maintainAspectRatio: false }} />
                </Box>
              </Box>
              <Paper elevation={3} sx={{ padding: 2, marginTop: 2, backgroundColor: '#9fb3ac' }}>
                <Typography variant="body2" sx={{ padding: 3, color: 'black', fontSize: '1rem' }}>
                  This bar chart compares predictions across the three different models, aiming to illustrate the range of price estimates generated for the parameters that have been selected.
                </Typography>
              </Paper>
            </Grid>

          </Grid>

          {/* Selection for Model Type for Pie Chart */}
          <FormControl
            fullWidth
            sx={{
              marginBottom: -3,
              marginTop: 10,
              backgroundColor: 'white',
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderWidth: '3px', borderColor: '#CED1D6' },
                '&:hover fieldset': { borderWidth: '3px', borderColor: '#2F4F4F' },
                '&.Mui-focused fieldset': { borderWidth: '3px', borderColor: '#2F4F4F' },
              },
              '& .MuiInputLabel-root': {
                color: '#A3A7AF', fontWeight: 'bold',
              },
              '& .MuiInputLabel-root.Mui-focused': { color: '#2F4F4F' },
            }}
          >
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

          <Typography variant="h6" sx={{
            marginTop: '60px',
            marginBottom: '10px',
            textAlign: 'center',
            fontFamily: '"Roboto Condensed", sans-serif',
            fontSize: '2.3rem',
            fontStyle: 'italic',
            color: '#2F4F4F'
          }}>
            Feature Weighing - {selectedModel}
          </Typography>

          <Grid container spacing={4} sx={{ marginTop: '50px' }}>
            {/* Responsive Pie Chart Container */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  padding: 2,
                }}
              >
                <Box
                  sx={{
                    width: { xs: '80%', sm: '80%', md: '70%', lg: '60%' },  // Responsive width for different screen sizes
                    maxWidth: '600px',  // Prevent overflow on very large screens
                    minWidth: '250px',  // Ensure visibility on smaller screens
                    aspectRatio: '1',   // Keeps the aspect ratio 1:1 for a square shape
                  }}
                >
                  <Pie data={pieChartData} options={{ responsive: true, maintainAspectRatio: false }} />
                </Box>
              </Box>
            </Grid>

            {/* Information Container Next to Pie Chart */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ marginBottom: '10px', textAlign: 'left', fontFamily: '"Roboto Condensed", sans-serif', fontSize: '2rem' }}>
                How are the Prices Evaluated?
              </Typography>
              <Paper elevation={3} sx={{ padding: 3, textAlign: 'left' }}>

                {/* School Icon and Text */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', color: '#6b6b6b', mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <SchoolIcon sx={{ fontSize: '40px', mr: 1 }} />
                    <Typography variant="body2" sx={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: '"Roboto Condensed", sans-serif' }}>
                      Schooling Facilities
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ fontSize: '1rem', color: '#8a8a8a', fontFamily: '"Roboto", sans-serif', ml: '48px' }}>
                    Schooling facilities is one of the primary features that are weighed in the model's predictive process. This is inputted by the user through the selection of Region.
                  </Typography>
                </Box>


                {/* Bathroom Icon and Text */}
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column', // Stack items vertically
                  alignItems: 'flex-start',
                  color: '#6b6b6b',
                  mb: 2 // Add some bottom margin if needed
                }}>
                  {/* Icon and Main Label */}
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <BathtubIcon sx={{ fontSize: '40px', mr: 1 }} />
                    <Typography variant="body2" sx={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      fontFamily: '"Roboto Condensed", sans-serif'
                    }}>
                      Rooms & Bathrooms
                    </Typography>
                  </Box>

                  {/* Additional Explanation Text */}
                  <Typography variant="body2" sx={{
                    fontSize: '1rem',
                    color: '#8a8a8a',
                    fontFamily: '"Roboto", sans-serif',
                    ml: '48px'
                  }}>
                    This indicates the number of bedrooms and bathrooms within the property.
                  </Typography>
                </Box>
                {/* City Icon and Text */}
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column', // Stack items vertically
                  alignItems: 'flex-start',
                  color: '#6b6b6b',
                  mb: 2 // Add some bottom margin if needed
                }}>
                  {/* Icon and Main Label */}
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <LocationCityIcon sx={{ fontSize: '40px', mr: 1 }} />
                    <Typography variant="body2" sx={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      fontFamily: '"Roboto Condensed", sans-serif'
                    }}>
                      Distance from CBD
                    </Typography>
                  </Box>

                  {/* Additional Explanation Text */}
                  <Typography variant="body2" sx={{
                    fontSize: '1rem',
                    color: '#8a8a8a',
                    fontFamily: '"Roboto", sans-serif',
                    ml: '48px'
                  }}>
                    The distance from the property to the CBD typically conflates prices. However, it is important to note that further distance typically suggests lower prices, but are more likely to contain more rooms and bathrooms than properties closer to the CBD. This is due to properties closer to the CBD are more often units and apartments rather than large residential homes.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
}

export default Predict;
