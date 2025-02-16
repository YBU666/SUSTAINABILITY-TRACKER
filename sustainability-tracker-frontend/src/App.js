import React, { useEffect, useState } from 'react';
import { getActions, addAction, deleteAction } from './api';
import './App.css';

function App() {
    const [actions, setActions] = useState([]);
    const [newAction, setNewAction] = useState({ action: '', date: '', points: '' });

    useEffect(() => {
        fetchActions();
    }, []);

    const fetchActions = async () => {
        const data = await getActions();
        setActions(data);
    };

    const handleAdd = async () => {
      if (!newAction.action || !newAction.date || !newAction.points) {
          alert("All fields are required!");
          return;
      }
  
      try {
          await addAction(newAction);
          setNewAction({ action: '', date: '', points: '' });
          fetchActions();
      } catch (error) {
          console.error("Error Adding Action:", error.response?.data || error.message);
      }
  };
  
  
    const handleDelete = async (id) => {
        await deleteAction(id);
        fetchActions();
    };

    return (
        <div className="container">
            <h1>Sustainability Tracker</h1>
            
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Action"
                    value={newAction.action}
                    onChange={(e) => setNewAction({ ...newAction, action: e.target.value })}
                />
                <input
                    type="date"
                    value={newAction.date}
                    onChange={(e) => setNewAction({ ...newAction, date: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Points"
                    value={newAction.points}
                    onChange={(e) => setNewAction({ ...newAction, points: e.target.value })}
                />
                <button onClick={handleAdd}>Add Action</button>
            </div>

            <ul>
                {actions.map((act) => (
                    <li key={act.id}>
                        {act.action} - {act.date} - {act.points} points
                        <button className="delete-btn" onClick={() => handleDelete(act.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
