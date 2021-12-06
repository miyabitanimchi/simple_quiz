import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../actions/actions';
import { Link } from 'react-router-dom';

const Form = () => {
  const [name, setName] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('0-1');
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  console.log(userInfo);

  const submitForm = (e) => {
    e.preventDefault();
    const userInfo = {
      name,
      yearsOfExperience,
    };
    dispatch(setUser(userInfo));
  };

  return (
    <section>
      <h2>Simple Tech Quiz</h2>
      <div>
        <label htmlFor="">Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Years of Experience in Tech Field: </label>
        <select
          name="yearsOfExperience"
          id="yearsOfExperience"
          value={yearsOfExperience}
          onChange={(e) => setYearsOfExperience(e.target.value)}
        >
          <option value="0-1">0-1</option>
          <option value="1-2">1-2</option>
          <option value="2-3">2-3</option>
          <option value="3-4">3-4</option>
          <option value="4-5">4-5</option>
          <option value="5+">5+</option>
        </select>
      </div>
      <input type="submit" value="Submit" onClick={(e) => submitForm(e)} />
      {userInfo.name.length !== 0 && (
        <>
          <h2>Hello {userInfo.name}!</h2>
          <h3>Please choose a quiz below </h3>
          <Link to="/js-quiz">
            <button value="JavaScript">JavaScript Quiz</button>
          </Link>
          <Link to="/react-quiz">
            <button value="React.js">React.js Quiz</button>
          </Link>
        </>
      )}
    </section>
  );
};

export default Form;
