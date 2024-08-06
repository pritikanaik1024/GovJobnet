// src/components/ApplicationDashboard.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useUser } from '../context/UserContext';

const ApplicationDashboard = () => {
    const [applications, setApplications] = useState([]);
    const { user } = useUser();

    useEffect(() => {
        if (user) {
            const fetchApplications = async () => {
                const q = query(collection(db, 'applications'), where('userId', '==', user.uid));
                const querySnapshot = await getDocs(q);
                setApplications(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            };
            fetchApplications();
        }
    }, [user]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Your Applications</h1>
            <ul className="space-y-4">
                {applications.map(app => (
                    <li key={app.id} className="p-4 border rounded shadow-md">
                        <p className="text-lg font-semibold">Job ID: {app.jobId}</p>
                        <p className="text-sm text-gray-500">Status: {app.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ApplicationDashboard;
