# Sustainability Tracker API

A web application for tracking sustainability actions using **Django REST Framework (DRF)** for the backend and **React** for the frontend. The backend stores sustainability actions in a PostgreSQL database and exposes REST API endpoints for CRUD operations. The React frontend interacts with this API.

## 1. Features

### Backend (Django + DRF)
- Create, retrieve, update, and delete sustainability actions
- Uses PostgreSQL as the database
- Follows RESTful API principles

### Frontend (React)
- Allows users to view, add, update, and delete sustainability actions
- Uses `axios` to interact with the API

## 2. Tech Stack

### Backend:
- Python 3.x
- Django
- Django REST Framework (DRF)
- PostgreSQL

### Frontend:
- React
- Axios

## 3. API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/actions/` | Retrieve all sustainability actions |
| POST   | `/api/actions/` | Add a new sustainability action |
| PUT    | `/api/actions/<id>/` | Update an existing action |
| DELETE | `/api/actions/<id>/` | Delete an action |

### Payload Format (POST/PUT)
```json
{
  "action": "Recycling",
  "date": "2025-01-08",
  "points": 25
}
```

## 4. Installation & Setup

### Backend Setup (Django)

#### Step 1: Clone Repository
```bash
git clone https://github.com/yourusername/sustainability-tracker.git
cd sustainability-tracker
```

#### Step 2: Create a Virtual Environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
```

#### Step 3: Install Dependencies
```bash
pip install django djangorestframework psycopg2
```

#### Step 4: Configure Database
Update `sustainability_tracker/settings.py` with PostgreSQL details:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'sustainability_db',
        'USER': 'your_username',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

#### Step 5: Run Migrations
```bash
python manage.py makemigrations actions
python manage.py migrate
```

#### Step 6: Start the Django Server
```bash
python manage.py runserver
```
The backend will run at http://127.0.0.1:8000/

### Frontend Setup (React)

#### Step 1: Navigate to Frontend Directory
```bash
cd sustainability-tracker-frontend
```

#### Step 2: Install Dependencies
```bash
npm install
```

#### Step 3: Start React Development Server
```bash
npm start
```
The frontend will be available at http://localhost:3000/

## 5. Directory Structure

```bash
sustainability-tracker/
│── sustainability_tracker/    # Django Project
│   │── settings.py           # Project settings
│   │── urls.py              # URL configuration
│   ├── actions/             # Django App
│       │── models.py        # Database models
│       │── views.py         # API Views
│       │── serializers.py   # DRF Serializers
│       │── urls.py          # App URLs
│── sustainability-tracker-frontend/  # React Frontend
│   │── src/
│       │── api.js          # API Service
│       │── App.js          # Main React Component
│── README.md               # Project Documentation
```

## 6. Usage

Start the Backend:
```bash
python manage.py runserver
```

Start the Frontend:
```bash
npm start
```

Interact with API using Postman or the React UI.

## 7. Notes

- Make sure PostgreSQL is running before starting the backend
- You may need to update PostgreSQL credentials in `settings.py`
- If you need to reset the database, run:
```bash
python manage.py flush
```

## 8. License

This project is open-source under the MIT License.

## 9. Contributing

Pull requests are welcome. Please open an issue to discuss any major changes before submitting.

## 10. Screenshots

![Page1](https://github.com/YBU666/SUSTAINABILITY-TRACKER/blob/main/public/Page2.png)
![Page2](https://github.com/YBU666/SUSTAINABILITY-TRACKER/blob/main/public/Page3.png)
![Page3](https://github.com/YBU666/SUSTAINABILITY-TRACKER/blob/main/public/page4.png)
![Page4](https://github.com/YBU666/SUSTAINABILITY-TRACKER/blob/main/public/page5.png)
