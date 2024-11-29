import React, { useState } from 'react';
import './ProblemForm.css'; 

const ProblemForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        issue: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting Data:", formData); // Add this
        try {
            const response = await fetch('http://localhost:4001/problems', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP Error: ${response.status} - ${errorText}`);
            }
    
            const result = await response.json();
            alert(result.message || 'Problem submitted successfully!');
        } catch (error) {
            console.error("Fetch Error:", error.message);
            alert('Failed to submit the problem. Please try again.');
        }
    };
    

    return (
        <form className="problem-form" onSubmit={handleSubmit}>
            <h2>Submit Your Problem</h2>
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="number"
                placeholder="Your Phone No."
                value={formData.number}
                onChange={handleChange}
                required
            />
             <select
                name="issue"
                value={formData.issue}
                onChange={handleChange}
                required
            >
                <option value="" disabled>
                    Select a Problem Title
                </option>
                <option value="Microwave Issue">Microwave Issue</option>
                <option value="Refrigerator Problem">Refrigerator Problem</option>
                <option value="Plumbing Leak">Plumbing Leak</option>
                <option value="Air Conditioner Malfunction">
                    Air Conditioner Malfunction
                </option>
                <option value="Electrical Wiring">Electrical Wiring</option>
                <option value="Water Heater Repair">Water Heater Repair</option>
                <option value="Other">Other</option>
            </select>
            <textarea
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
            />
            <button type="submit">Book Now</button>
        </form>
    );
};

export default ProblemForm;
