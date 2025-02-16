import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
const Button = ({ children, onClick }) => (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
  
  const Card = ({ children }) => (
    <div className="bg-white shadow-md p-4 rounded-md">{children}</div>
  );
  

const API_URL = "http://127.0.0.1:8000/api/actions/";

export default function SustainabilityTracker() {
  const [actions, setActions] = useState([]);
  const [newAction, setNewAction] = useState({ action: "", date: "", points: 0 });

  useEffect(() => {
    fetchActions();
  }, []);

  const fetchActions = async () => {
    try {
      const response = await axios.get(API_URL);
      setActions(response.data);
    } catch (error) {
      console.error("Error fetching actions:", error);
    }
  };

  const handleAddAction = async () => {
    try {
      await axios.post(API_URL, newAction);
      setNewAction({ action: "", date: "", points: 0 });
      fetchActions();
    } catch (error) {
      console.error("Error adding action:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.h1 className="text-4xl font-bold text-blue-600 mb-6" animate={{ scale: 1.1 }}>
        Sustainability Tracker
      </motion.h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <input
          type="text"
          placeholder="Action"
          className="border p-2 w-full rounded mb-2"
          value={newAction.action}
          onChange={(e) => setNewAction({ ...newAction, action: e.target.value })}
        />
        <input
          type="date"
          className="border p-2 w-full rounded mb-2"
          value={newAction.date}
          onChange={(e) => setNewAction({ ...newAction, date: e.target.value })}
        />
        <input
          type="number"
          placeholder="Points"
          className="border p-2 w-full rounded mb-2"
          value={newAction.points}
          onChange={(e) => setNewAction({ ...newAction, points: parseInt(e.target.value) || 0 })}
        />
        <Button onClick={handleAddAction} className="w-full mt-2">
          Add Action
        </Button>
      </div>

      <div className="mt-6 w-full max-w-md">
        {actions.map((item) => (
          <Card key={item.id} className="mb-4 bg-white shadow-md p-4 rounded-md">
            <div>
              <h2 className="text-lg font-semibold">{item.action}</h2>
              <p className="text-gray-600">Date: {item.date}</p>
              <p className="text-green-500 font-bold">Points: {item.points}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
