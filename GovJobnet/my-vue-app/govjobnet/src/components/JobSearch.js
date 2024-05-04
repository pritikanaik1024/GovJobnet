// src/components/JobSearch.js
import React, { useState, useEffect } from 'react';
import { firestore } from '../../govjobnet/src/firebase';

const JobSearch = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    jobType: '',
    salaryRange: '',
    experienceLevel: ''
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        let query = firestore.collection('jobs');

        // Apply filters
        if (filters.jobType) {
          query = query.where('jobType', '==', filters.jobType);
        }
        if (filters.salaryRange) {
          // Implement salary range filtering logic
        }
        if (filters.experienceLevel) {
          query = query.where('experienceLevel', '==', filters.experienceLevel);
        }

        // Fetch sorted data
        query = query.orderBy('postedDate', 'desc');

        const snapshot = await query.get();
        const jobList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setJobs(jobList);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, [filters]);

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value
    }));
  };

  return (
    <div>
      <select value={filters.jobType} onChange={e => handleFilterChange('jobType', e.target.value)}>
        <option value="">All Job Types</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        {/* Add more options as needed */}
      </select>

      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>Location: {job.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobSearch;
