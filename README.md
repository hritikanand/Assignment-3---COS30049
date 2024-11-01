# HEM Housing - Predictive Housing Market Insights and Visualization Platform 

## Table Of Contents :house_with_garden:

1. [Overview](#project-overview)</br>
2. [Features](#features)</br>
3. [Tech Stack](#tech)</br>
4. [Setup Instructions](#setup)</br>
5. [Running the Application](#application)</br>
6. [Troubelshooting](#trouble)</br>
7. [Contributors](#team)</br>
 


<a name="project-overview"></a>
## Overview :books:
In a constantly evolving housing market, understanding current trends and future forecasts is essential for making informed decisions. HEM Housing, a web-based platform, is designed to empower homebuyers, investors, and real estate professionals by providing insightful visualizations and predictive analytics of Melbourne's housing market. Utilizing the power of machine learning, the platform forecasts property pricing trends and offers precise predictions for individual properties based on factors like distance from Melbourne’s Central Business District (CBD), number of bathrooms, and regional location.

<a name="features"></a>
## Features :sparkles:
This project integrates a machine learning (ML) model with a React.js frontend to deliver a seamless user experience. Through the website, users can explore the following:

- **Property Price Predictions:** On the **Predict page**, users can get personalized price predictions for properties in Melbourne by entering specific property attributes, such as distance from the CBD, number of bathrooms, and regional location.
-  **Data-Driven Visualizations:**  Access comprehensive and interactive visualizations of housing price trends on the **Predict page**, helping users understand the factors that influence prices in Melbourne's market.
- **Model Insights:** Learn about the machine learning models chosen, the datasets used, and the rationale behind the model selection process by navigvating to the **About** webpage.

  
<a name="tech"></a>
## Tech Stack :hammer_and_wrench: 
This project utilizes a blend of frontend and backend technologies to deliver an interactive and predictive web application for housing prices.

- #### **Frontend**
    1. **React.js** for building a dynamic and responsive user interface.
    2. **Material-UI** (MUI) for stylish, pre-built components that create a consistent look and
       feel.
    3. **React Router** to handle smooth page navigation within the single-page application.
- #### **Backend**
    1. **FastAPI** for a high-performance API that efficiently handles requests and integrates 
       with machine learning models.
    2. **Python** with **Scikit-Learn**  for model training and predictions. We use models like 
       **Gradient Boosting**, **Random Forest**, and **Polynomial Regression** to capture 
       complex patterns in housing data.
- #### **Data and Infrastructure**
   1. **Git and GitHub** for version control and collaboration.
   2. **Node.js & npm** to run the React app and manage dependencies.
This stack ensures a scalable, efficient application that combines an intuitive interface with robust backend processing for predictive analytics.


<a name="setup"></a>
## Setup Instructions :gear:
#### **Prerequisites**
- Node.js (v20.18.0) and npm (v10.8.2) (no problem , instructions are provided below to get the 
  desired versions )
- Python (v3.12.7)
- Git for cloning the repository

#### Step 1 : **Clone the repository to your local machine using the following commands**
    git clone https://github.com/hritikanand/Assignment-3---COS30049.git
    cd your-repository //folder where the repository was clonned 

#### Step 2 : **Setting up the backend**
1. ##### **Navigate to the Project Directory:**
   Firstly, navigate to the root of your project where main.py and the models directory are located.
   
        cd path/to/your-repositry/models
        // replace this(path/to/your-repositry/) with the actual repositry path 
   
                                            
2. ##### **Install Python Dependencies**
   Install the recquried python dependencoes using the recquirements.txt diresctly using the following code snippet.
   
        pip install -r requirements.txt

   
3. #####  **Set the Model Directory Path:**
   After installing the dependencies navigate to the main.py file in the mdoels section and in your code editor locate the following line which is used to define the model_dir variabe.
   
        model_dir = '/Users/V/Documents/Github/Assignment-3---COS30049/models'
   
   Update the "/Users/V/Documents/Github/Assignment-3---COS30049" with the path to where the reposirty was cloned
   
        model_dir = 'path/to/your-repositry/models'
   This is done in order to ensure the backend can locate the model files

4. #####  **Starting the FastAPI Server:**
   Start the FastAPI server using the following command:
   
         uvicorn main:app --reload --host 0.0.0.0 --port 8000
   
   **Verify**: Once the server is running, open a browser and navigate to **http://localhost:8000** to confirm that the server is up and accessible.


#### Step 2 : **Frontend Setup**   
1. ##### **Navigate to the React App Directroy:**
 Once you are done setting up the FastAPI server navigate to the React App directory in the repositry.
   
           cd hem-react-app
2. ##### **Install Node.js (via Fast Node Manager)**:
   Fast Node Manager (FNM) is used to manage Node.js versions. Run the following commands to install FNM and configure the required Node.js version.
   
           winget install Schniz.fnm  # installs fnm (Fast Node Manager)
           fnm env --use-on-cd | Out-String | Invoke-Expression # configure fnm environment
           fnm use --install-if-missing 20 # download and install Node.js
   
3. ##### **Verify Node and npm Versions**:
   Confirm the correct versions of Node and npm are installed, ensuring compatibility with your application.
   
           node -v  # Should output v20.18.0
           npm -v   # Should output 10.8.2
   
4. ###### **Install React Dependencies:**
  Set up essential dependencies for Material-UI components and routing that offer different functionalities in the HEM housing website.
          
           # mui components install statements 
           npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
           npm install react-router-dom
           
5. ##### **Install Charting Libraries:**
    Add charting libraries react-chartjs-2, chart.js, react-plotly.js, and plotly.js to create interactive visualizations for data insights.

           npm install react-chartjs-2 chart.js
           npm install react-plotly.js plotly.js
6. ##### **Start the React Development Server:**
   Begin development by starting the hem-react-app on localhost:3000.
   
           npm start
7. #### **Acesss the Frontend:**
   Once the react server is activated , the website will ne launched by itself on the browser and if it does not initiate open your browser and navigate to http://localhost:3000 to interact with the application.

   
<a name="application"></a>
## Running the Application :rocket:
1. **Start Backend:** Ensure that the FastAPI server is running:
              
          uvicorn main:app --reload --host 0.0.0.0 --port 8000
   
2. **Start Frontend:** In another terminal, after installing Node.js and other dependecies stated in **Step 3** in the same terminal start the React app:
   
          npm start
   
3. **Navigate between Pages:** Once the application successfully runs on the browser you navigate through it to get insigts about the associaton, model and get customized predictions.
   - **Home Page**: Provides an overview of the application and comprises of Contact form for users to ask queestions and reach out to the team .
   - **Predict Page**:  Allows users to input property details to get predictions and get real time visualizations to understand relationships and get insights about model performance.
   - **About Page**: Explains the dataset, model selection, and prediction methodology.
          



<a name="trouble"></a>
## Troubleshooting :stop_sign:
- **Backend not starting**: Ensure all Python dependencies in requirements.txt are installed and the model_dir path is correct in main.py.
- **Frontend not loading**: Double-check Node.js and npm versions. Re-run npm install in the hem-react-app directory if necessary(refer to step 3 in Setup Instructions).
- **API not connecting to Frontend**: Ensure both servers are running on the correct ports(backend at 8000 and frontend generall at 3000) and that any CORS settings in FastAPI allow connections from the frontend.


  
<a name="team"></a>
## Contributors :busts_in_silhouette:
- **Project Manager & Model Developer**: *Hritik Anand*
- **Technical Implementation , UI/UX Designer & Evaluator**: *Eshita Mahajan and Michelle Abrigo*
          
           

               


   
   


