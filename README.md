# Simple Website with Django & React

Welcome to the Simple Website project! This is a basic web application built using **Django** for the backend and **React** for the frontend. The site provides a warm greeting, fun facts, and inspirational quotes to make the user experience enjoyable and informative.

## Features

- **Greeting Page:** Welcomes users with a personalized message and a random fun fact.
- **About Page:** Shares information about the site along with an inspiring quote.
- **API Endpoints:**
  - `/api/greeting/` - Returns a greeting message with a fun fact.
  - `/api/about/` - Provides details about the site along with an inspirational quote.

## Tech Stack

- **Frontend:** React.js
- **Backend:** Django, Django REST Framework
- **Styling:** Simple CSS with animations for an engaging user experience.

## Installation

### Backend Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/simple-website.git
    cd simple-website
    ```

2. **Create and activate a virtual environment:**
    ```bash
    python -m venv venv
    source venv/bin/activate   # On Windows: venv\Scripts\activate
    ```

3. **Install the required dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4. **Run database migrations:**
    ```bash
    python manage.py migrate
    ```

5. **Start the Django server:**
    ```bash
    python manage.py runserver
    ```

1. **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2. **Install the required dependencies:**
    ```bash
    npm install
    ```

3. **Start the React development server:**
    ```bash
    npm start
    ```

The React app should now be running at `http://localhost:3000`, and the Django API at `http://localhost:8000`.

## Usage

Once the app is running, visit the homepage to see a warm greeting with a fun fact. Navigate to the "About" page to learn more about the site and get inspired by an uplifting quote.

## API Endpoints

- **`/api/greeting/`** - Provides a greeting message along with a fun fact.
- **`/api/about/`** - Shares information about the site and an inspirational quote.

