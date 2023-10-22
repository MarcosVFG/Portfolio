import React, { useState } from 'react';
import styles from './form.module.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer algo com os dados do formulário, como enviá-los para um servidor ou exibi-los no console.
    console.log(formData);
  };

  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit}>
        <div className={styles.nameMail}>
            <div className={styles.divMail}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                className={styles.divInput}
                value={formData.name}
                onChange={handleChange}
            />
            </div>
            <div className={styles.divMail}>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                className={styles.divInput}
                value={formData.email}
                onChange={handleChange}
            />
            </div>
        </div>
        <div className={styles.divMail}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className={styles.divInputAr}
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className={styles.teste}>
          <button type="submit" className={styles.botao}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
