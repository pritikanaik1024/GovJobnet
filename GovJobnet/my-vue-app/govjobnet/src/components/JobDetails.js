import React, { useState } from 'react';
import { firestore } from '../firebase';

const JobDetails = ({ job }) => {
  const [applicationStatus, setApplicationStatus] = useState(null);
  const [applicationRemarks, setApplicationRemarks] = useState('');

  const applyForJob = async () => {
    try {
      // Store job application data in Firestore
      await firestore.collection('applications').add({
        jobId: job.id,
        status: 'Pending',
        remarks: applicationRemarks,
        // Add more fields as needed
      });
      setApplicationStatus('Pending');
    } catch (error) {
      console.error('Error applying for job:', error);
    }
  };

  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <p>Location: {job.location}</p>

      {applicationStatus === 'Pending' ? (
        <p>Application Status: Pending</p>
      ) : (
        <button onClick={applyForJob}>Apply for Job</button>
      )}

      {applicationStatus && (
        <div>
          <h3>Application Status: {applicationStatus}</h3>
          {applicationRemarks && <p>Remarks: {applicationRemarks}</p>}
        </div>
      )}
    </div>
  );
};

export default JobDetails;
