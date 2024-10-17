'use client';

import { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './contactForm.module.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');



console.log('Datos del formulario:', formData);


    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('Mensaje enviado con éxito!');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Resetear formulario
    } else {
      setStatus('Error al enviar el mensaje');
    }
  };

  return (
    <Container className={styles.contactContainer}>
      <h1 className={styles.title}>Contact Us</h1>
      <Form onSubmit={handleSubmit} className={styles.contactForm}>
        <Form.Group controlId="name" className={styles.formGroup}>
          <Form.Label className={styles.label}>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.formInput}
          />
        </Form.Group>

        <Form.Group controlId="email" className={styles.formGroup}>
          <Form.Label className={styles.label}>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.formInput}
          />
        </Form.Group>

        <Form.Group controlId="subject" className={styles.formGroup}>
          <Form.Label className={styles.label}>Subject:</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={styles.formInput}
          />
        </Form.Group>

        <Form.Group controlId="message" className={styles.formGroup}>
          <Form.Label className={styles.label}>Message:</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles.formTextarea}
          />
        </Form.Group>

        <Button type="submit" className={styles.submitButton} style={{ background: '#0070f3', border: 'none' }}>
          Send
        </Button>
      </Form>
      {status && <Alert className={styles.statusMessage} variant={status.includes('éxito') ? 'success' : 'danger'}>{status}</Alert>}
    </Container>
  );
}
