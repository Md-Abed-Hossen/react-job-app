import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import dummyJobDetails from './data/dummyJobDetails'; // Adjust the path as necessary

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error

  useEffect(() => {
    const fetchJob = async () => {
      setLoading(true);
      try {
        // Uncomment below to use API call
        // const response = await fetch(`http://localhost/api/jobs/${id}`);
        // if (!response.ok) {
        //   throw new Error('Network response was not ok');
        // }
        // const data = await response.json();

        // Use dummy data for development/testing
        const data = dummyJobDetails.find(job => job.id === parseInt(id));

        if (!data) {
          throw new Error('Job not found');
        }
        setJob(data);
      } catch (error) {
        console.error('Error fetching job details:', error);
        setError('Failed to load job details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return <p>Loading job details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!job) {
    return <p>Job not found.</p>;
  }

  return (
    <>
      <Navbar />
      <div className="job-details">
        <h2>{job.title}</h2>
        <p><strong>Company:</strong> {job.companyName}</p>
        <p><strong>Description:</strong> {job.description}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Salary:</strong> {job.salary}</p>
        <p><strong>Requirements:</strong> {job.requirements}</p>
        <p><strong>Benefits:</strong> {job.benefits}</p>
        <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="button">Apply Now</a>
      </div>
      <Footer />
    </>
  );
};Y

export default JobDetails;
