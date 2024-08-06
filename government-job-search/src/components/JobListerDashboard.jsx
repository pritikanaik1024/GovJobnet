// src/components/JobListerDashboard.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

const JobListerDashboard = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            const q = query(collection(db, 'jobs'), where('jobListerId', '==', 'your-job-lister-id'));
            const querySnapshot = await getDocs(q);
            setJobs(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };
        fetchJobs();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Job Lister Dashboard</h1>
            <ul className="space-y-4">
                {jobs.map(job => (
                    <li key={job.id} className="p-4 border rounded shadow-md">
                        <h2 className="text-xl font-semibold">{job.title}</h2>
                        <p className="text-gray-600">{job.description}</p>
                        <p className="text-sm text-gray-500">Location: {job.location}</p>
                        <p className="text-sm text-gray-500">Salary: {job.salary}</p>
                        <p className="text-sm text-gray-500">Experience: {job.experience}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobListerDashboard;
