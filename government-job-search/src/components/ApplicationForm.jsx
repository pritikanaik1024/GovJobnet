// src/components/ApplicationForm.jsx
import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const ApplicationForm = ({ jobId }) => {
    const [application, setApplication] = useState('');

    const handleApply = async (e) => {
        e.preventDefault();
        if (!application) return;
        await addDoc(collection(db, 'applications'), {
            jobId,
            content: application,
            status: 'Pending'
        });
        setApplication('');
        alert('Application submitted!');
    };

    return (
        <div className="p-4 border rounded shadow-md max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">Apply for Job</h2>
            <form onSubmit={handleApply} className="space-y-4">
                <textarea
                    value={application}
                    onChange={(e) => setApplication(e.target.value)}
                    placeholder="Write your application here"
                    required
                    className="w-full p-2 border rounded"
                />
                <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Apply
                </button>
            </form>
        </div>
    );
};

export default ApplicationForm;
