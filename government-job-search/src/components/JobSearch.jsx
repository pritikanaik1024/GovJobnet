// src/components/JobSearch.jsx
import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { getUserLocation } from '../services/LocationService';

const JobSearch = () => {
    const [jobs, setJobs] = useState([]);
    const [location, setLocation] = useState(null);

    useEffect(() => {
        getUserLocation((loc) => setLocation(loc));
    }, []);

    useEffect(() => {
        if (location) {
            const q = query(collection(db, 'jobs'), where('approved', '==', true));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                setJobs(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            });
            return () => unsubscribe();
        }
    }, [location]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Job Search</h1>
            <ul className="list-disc pl-5">
                {jobs.map(job => (
                    <li key={job.id} className="mb-2">{job.title} - {job.location}</li>
                ))}
            </ul>
        </div>
    );
};

export default JobSearch;
