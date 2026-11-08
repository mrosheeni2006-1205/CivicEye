import React, { createContext, useContext, useState, useEffect } from 'react';

const DEFAULT_USER = {
  name: "Alex Morgan",
  email: "alex.morgan@civicmail.org",
  phone: "+1 (555) 234-5678",
  ward: "Ward 7 - Metro Central",
  address: "742 Evergreen Terrace, Sector 4",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  joinDate: "October 2023",
  citizenId: "CIV-8921-OK",
  notificationPrefs: {
    email: true,
    sms: false,
    aiUpdates: true
  }
};

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('civic_eye_user');
      return saved ? JSON.parse(saved) : DEFAULT_USER;
    } catch {
      return DEFAULT_USER;
    }
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return localStorage.getItem('civic_eye_auth') === 'true';
    } catch {
      return true; // Default logged in for interactive demo convenience
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('civic_eye_user', JSON.stringify(user));
    }
  }, [user]);

  const login = (email, password, remember = true) => {
    const loggedUser = {
      ...user,
      email: email || user.email,
      name: email ? email.split('@')[0].replace('.', ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase()) : user.name
    };
    setUser(loggedUser);
    setIsAuthenticated(true);
    localStorage.setItem('civic_eye_auth', 'true');
    return true;
  };

  const register = ({ name, email, password }) => {
    const newUser = {
      ...DEFAULT_USER,
      name: name || "New Citizen",
      email: email || "citizen@civicmail.org",
      citizenId: `CIV-${Math.floor(1000 + Math.random() * 9000)}-NW`,
      joinDate: "November 2024"
    };
    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem('civic_eye_auth', 'true');
    return true;
  };

  const updateProfile = (updatedFields) => {
    setUser((prev) => {
      const updated = { ...prev, ...updatedFields };
      localStorage.setItem('civic_eye_user', JSON.stringify(updated));
      return updated;
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('civic_eye_auth');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, updateProfile, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

