import Header from "../components/Header";
import LogoutButton from "../components/LogoutButton";
import React, { useState, useEffect } from "react";
import firebase from "../firebase-config";

const AdminDashboard = () => {
  const [userInput, setUserInput] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (user) {
      setUserEmail(user.email);
    }
  }, []);
  return (
    <div>
      <Header />
      <div class="button-container">
        <LogoutButton />
      </div>
      <div className="admin-dashboard">
        <div className="dashboard-header">
          <h1>This is the admin page</h1>
        </div>
        <div className="dashboard-content">
          <p>Hello Admin</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

/// make it like HomeInput and Home