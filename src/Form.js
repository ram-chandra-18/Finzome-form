import React, { useState } from 'react';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css';
import { FaCalendarAlt } from 'react-icons/fa';

const Form = ({ addData, setError }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    weekdays: [],
    gender: '',
    dob: new Date(),
  });

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleChange = (e) => {
    console.log('Input changed', e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (day) => {
    const updatedWeekdays = formData.weekdays.includes(day)
      ? formData.weekdays.filter((d) => d !== day)
      : [...formData.weekdays, day];

    setFormData({ ...formData, weekdays: updatedWeekdays });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     
    console.log('Form submitted');

    if (!formData.name || !formData.email || !formData.contact || !formData.gender) {
      setError('Please fill out all required fields');
      return;
    }

    addData(formData);
    setFormData({
      name: '',
      email: '',
      contact: '',
      weekdays: [],
      gender: '',
      dob: new Date(),
    });
    setError(null);
  };

  const handleCalendarToggle = () => {
    setIsCalendarOpen((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />

      <label>Email</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />

      <label>Contact</label>
      <input type="text" name="contact" value={formData.contact} onChange={handleChange} />

      <label>Weekdays</label>
      <div>
        <label>
          <input
            type="checkbox"
            name="weekday"
            value="Monday" 
            checked={formData.weekdays.includes('Monday')}
            onChange={() => handleCheckboxChange('Monday')}
          />
          Monday
        </label>
        <label>
          <input
            type="checkbox"
            name="weekday"
            value="Tuesday" 
            checked={formData.weekdays.includes('Tuesday')}
            onChange={() => handleCheckboxChange('Tuesday')}
          />
          Tuesday
        </label>
        <label>
          <input
            type="checkbox"
            name="weekday"
            value="Wednesday" 
            checked={formData.weekdays.includes('Wednesday')}
            onChange={() => handleCheckboxChange('Wednesday')}
          />
          Wednesday
        </label>
        <label>
          <input
            type="checkbox"
            name="weekday"
            value="Thursday" 
            checked={formData.weekdays.includes('Thursday')}
            onChange={() => handleCheckboxChange('Thursday')}
          />
          Thursday
        </label>
        <label>
          <input
            type="checkbox"
            name="weekday"
            value="Friday" 
            checked={formData.weekdays.includes('Friday')}
            onChange={() => handleCheckboxChange('Friday')}
          />
          Friday
        </label>
      </div>

      <label>Gender</label>
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === 'Male'}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === 'Female'}
            onChange={handleChange}
          />
          Female
        </label>
      </div>

      <label>Date of Birth</label>
      <div className="date-of-birth-container">
        <input
          type="text"
          name="dob"
          value={formData.dob.toLocaleDateString()}
          onChange={() => {}}
          onClick={handleCalendarToggle}
        />
        <FaCalendarAlt className="calendar-icon" onClick={handleCalendarToggle} />
        {isCalendarOpen && (
          <div className="calendar-container">
            <Calendar onChange={(date) => setFormData({ ...formData, dob: date })} value={formData.dob} />
          </div>
        )}
      </div> 

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
