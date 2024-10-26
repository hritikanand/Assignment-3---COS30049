# fastapi_backend.py

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import os
import numpy as np

# Initialize FastAPI app
app = FastAPI()

# Define the model directory and paths
model_dir = '/Users/hritikanand/Library/CloudStorage/OneDrive-SwinburneUniversity/Innovation/code/models'
rf_model_path = os.path.join(model_dir, 'rf_model.joblib')
poly_model_path = os.path.join(model_dir, 'poly_model.joblib')
gbr_model_path = os.path.join(model_dir, 'gbr_model.joblib')

# Load models
rf_model = joblib.load(rf_model_path)
poly_model = joblib.load(poly_model_path)
gbr_model = joblib.load(gbr_model_path)

# Input data format for the API
class InputData(BaseModel):
    rooms: int
    bathroom: int
    distance_from_cbd: float
    schooling_facilities: int

# Define the prediction route
@app.post("/predict")
def predict(input_data: InputData):
    try:
        # Prepare input features
        X = np.array([[input_data.rooms, 
                       input_data.bathroom, 
                       input_data.distance_from_cbd, 
                       input_data.schooling_facilities]])

        # Perform predictions with each model
        rf_prediction = rf_model.predict(X)
        poly_prediction = poly_model.predict(X)  # Assuming input is already polynomial transformed
        gbr_prediction = gbr_model.predict(X)

        # Return predictions in a structured response
        return {
            "Random Forest Prediction": rf_prediction[0],
            "Polynomial Regression Prediction": poly_prediction[0],
            "Gradient Boosting Prediction": gbr_prediction[0]
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction error: {str(e)}")

# Run Uvicorn server for FastAPI
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
