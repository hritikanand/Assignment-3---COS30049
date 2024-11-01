from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import os
import numpy as np
import pandas as pd
from sklearn.preprocessing import PolynomialFeatures

# Initialize FastAPI app
app = FastAPI()

# Enable CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the model directory and paths
model_dir = '/Users/V/Documents/Github/Assignment-3---COS30049/models'
rf_model_path = os.path.join(model_dir, 'rf_model.joblib')
poly_model_path = os.path.join(model_dir, 'poly_model.joblib')
gbr_model_path = os.path.join(model_dir, 'gbr_model.joblib')
poly_transformer_path = os.path.join(model_dir, 'poly_features.joblib')

# Load models with error handling
try:
    rf_model = joblib.load(rf_model_path)
    print("Random Forest model loaded successfully.")
except Exception as e:
    rf_model = None
    print(f"Error loading Random Forest model: {e}")

try:
    poly_model = joblib.load(poly_model_path)
    print("Polynomial model loaded successfully.")
except Exception as e:
    poly_model = None
    print(f"Error loading Polynomial model: {e}")

try:
    gbr_model = joblib.load(gbr_model_path)
    print("Gradient Boosting model loaded successfully.")
except Exception as e:
    gbr_model = None
    print(f"Error loading Gradient Boosting model: {e}")

# Load the polynomial features transformer if it was saved separately
try:
    poly_transformer = joblib.load(poly_transformer_path)
    print("Polynomial transformer loaded successfully.")
except Exception as e:
    poly_transformer = None
    print(f"Error loading polynomial transformer: {e}")

# Ensure all models are loaded
if not all([rf_model, poly_model, gbr_model, poly_transformer]):
    raise RuntimeError("One or more models or transformers failed to load. Please check the paths and files.")

# Input data format for the API
class InputData(BaseModel):
    rooms: int
    distance_from_cbd: float
    bathroom: int

@app.post("/predict")
def predict(input_data: InputData):
    try:
        
        X_base = pd.DataFrame([{
            "Rooms": input_data.rooms,
            "Bathroom": input_data.bathroom,            
            "Distance_from_CBD": input_data.distance_from_cbd,
            "Schooling_Facilities": 1,  # Placeholder
            "Rooms_Bathroom_Interaction": input_data.rooms * input_data.bathroom,  # Interaction feature            
            "Distance_Schools_Interaction": input_data.distance_from_cbd,  # Placeholder           
            "Schools_Distance_Ratio": input_data.distance_from_cbd  # Placeholder
        }])

        #THIS NEEDS TO BE IN THE EXACT ORDER THAT THE MODEL WAS TRAINED
        feature_order = [
            "Rooms", "Bathroom", "Distance_from_CBD", "Schooling_Facilities",
            "Rooms_Bathroom_Interaction", "Distance_Schools_Interaction", "Schools_Distance_Ratio"
        ]
        X_base = X_base[feature_order]

        # polynomial transformation for polynomial model
        X_poly = poly_transformer.transform(X_base)

        # DEBUGGING Convert transformed features into a DataFrame
        X_poly_df = pd.DataFrame(X_poly)
        print("Input data after polynomial transformation:", X_poly_df)

        # predictions w. each model
        rf_prediction = rf_model.predict(X_base)  # Random Forest uses base features
        poly_prediction = poly_model.predict(X_poly)  # Polynomial model uses expanded features
        gbr_prediction = gbr_model.predict(X_base)  # Gradient Boosting uses base features

        # Return predictions in a structured response
        return {
            "Random Forest Prediction": rf_prediction[0],
            "Polynomial Regression Prediction": poly_prediction[0],
            "Gradient Boosting Prediction": gbr_prediction[0]
        }

    except Exception as e:
        print(f"Prediction error: {e}")
        raise HTTPException(status_code=500, detail=f"Prediction error: {str(e)}")

# Optional root endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to the Prediction API"}

# Run Uvicorn server for FastAPI
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
