
# **Sustainability Tracker**

---

## **📌 Features**  
✅ Add sustainability actions (e.g., Recycling, Planting Trees)  
✅ View all recorded actions with date & points  
✅ Edit or update actions  
✅ Delete unwanted actions  
✅ RESTful API using Django and PostgreSQL  
✅ React frontend for easy interaction  

---

## **🛠 Tech Stack**  
**Backend:** Django, Django REST Framework, PostgreSQL  
**Frontend:** React, Axios  
**Database:** PostgreSQL  

---

## Screenshots

![Page1](https://github.com/YBU666/SUSTAINABILITY-TRACKER/blob/main/public/Page2.png)
![Page2](https://github.com/YBU666/SUSTAINABILITY-TRACKER/blob/main/public/Page3.png)
![Page3](https://github.com/YBU666/SUSTAINABILITY-TRACKER/blob/main/public/page4.png)
![Page4](https://github.com/YBU666/SUSTAINABILITY-TRACKER/blob/main/public/page5.png)



## ** API Endpoints**
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET    | `/api/actions/` | Retrieve all sustainability actions |
| POST   | `/api/actions/` | Add a new sustainability action |
| PUT    | `/api/actions/<id>/` | Update an existing action |
| DELETE | `/api/actions/<id>/` | Delete an action |

### **Payload Format (POST/PUT)**
```json
{
  "action": "Recycling",
  "date": "2025-01-08",
  "points": 25
}

