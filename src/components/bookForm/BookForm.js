import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBookFormData } from '../../redax/slice/slice';

import styles from './styles.module.scss';

const initialState = {
  name: '',
  email: '',
  date: '',
  comment: '',
};

const BookForm = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    setState(prev => ({ ...prev, [name]: value }));
  };
  console.log(state);

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(setBookFormData(state));
    setState(initialState);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Book your campervan now</h2>
      <h3 className={styles.subtitle}>Stay connected! We are always ready to help you.</h3>
      <form className={styles.form} id="bookForm" onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={state.name}
          placeholder="Name"
          required
          minLength={2}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          value={state.email}
          placeholder="Email"
          required
          onChange={handleChange}
        />
        <input
          className={styles.input}
          type="date"
          name="date"
          value={state.date}
          placeholder="Booking date"
          required
          minLength={2}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          type="textarea"
          name="comment"
          value={state.comment}
          placeholder="Comment"
          required
          minLength={2}
          onChange={handleChange}
        />
        <button className={styles.button} type="submit" htmlFor="bookForm">
          Send
        </button>
      </form>
    </div>
  );
};

export default BookForm;
