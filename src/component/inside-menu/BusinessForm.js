import React, { useState } from 'react';
import Axios from 'axios';
import BusinessPlan from './BusinessPlan';
// import { useNavigate } from 'react-router-dom';


const BusinessForm = () => {
  // below here is for state management which stores the state variables
  const [business_name, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('');
  const [mission, setMission] = useState('');
  const [vision, setVision] = useState('');
  const [target_audience, setTargetAudience] = useState('');
  const [generatedresponse, setGeneratedResponse]= useState('');
  // const navigate = useNavigate();

  // category array
  const categories = [
    { label: 'Manufacturer', value: 'manufacturer' },
    { label: 'Service', value: 'service' },
    { label: 'Trade', value: 'trade' },
  ];

  // on clicking the submit button the handleSubmit function is called
  const handleSubmit = async (e) => {
    e.preventDefault();

    // formData is an object 
    const formData = { business_name, industry, mission, vision, target_audience };
    // console.log(formData);

      try {
        const response = await Axios.post('http://192.168.1.117:8000/api/business-plan/', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(response);

        if(response.status === 200){
          setGeneratedResponse(response.data.generated_response);
          // navigate('/business-plan');
        }

      // Reset form fields after submission of the form data
      setBusinessName('');
      setIndustry('');
      setMission('');
      setVision('');
      setTargetAudience('');
    } 
    catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-8 space-y-8"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Business Registration Form
      </h2>

      {/* Business Name */}
      <div>
        <label
          htmlFor="business_name"
          className="block text-md font-semibold text-gray-900"
        >
          Business Name
        </label>
        <input
          id="business_name"
          name="business_name"
          type="text"
          value={business_name}
          onChange={(e) => setBusinessName(e.target.value)}
          className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-md"
          placeholder="Enter your business name"
          required
        />
      </div>

      {/* Category Dropdown */}
      <div>
        <label
          htmlFor="industry"
          className="block text-md font-semibold text-gray-900"
        >
          Category
        </label>
        <select
          id="industry"
          name="industry"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-md"
        >
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Mission */}
      <div>
        <label
          htmlFor="mission"
          className="block text-md font-semibold text-gray-900"
        >
          Mission
        </label>
        <textarea
          id="mission"
          name="mission"
          rows={4}
          value={mission}
          onChange={(e) => setMission(e.target.value)}
          className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-md"
          placeholder="Write something about your mission"
          required
        />
      </div>

      {/* Vision */}
      <div>
        <label
          htmlFor="vision"
          className="block text-md font-semibold text-gray-900"
        >
          Vision
        </label>
        <textarea
          id="vision"
          name="vision"
          rows={4}
          value={vision}
          onChange={(e) => setVision(e.target.value)}
          className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-md"
          placeholder="Write something about your vision"
          required
        />
      </div>

      {/* Target Audience */}
      <div>
        <label
          htmlFor="target_audience"
          className="block text-md font-semibold text-gray-900"
        >
          Target Audience
        </label>
        <input
          id="target_audience"
          name="target_audience"
          type="text"
          value={target_audience}
          onChange={(e) => setTargetAudience(e.target.value)}
          className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-md"
          placeholder="Enter your Target Audience"
          required
        />
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="px-8 py-3 bg-blue-600 text-white font-semibold text-md rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
    </form>
    <div>
        <BusinessPlan response={generatedresponse}/>
      </div>
    </>
  );
};

export default BusinessForm;
