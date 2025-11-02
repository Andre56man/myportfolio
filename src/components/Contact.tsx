import { useState, FormEvent, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [message, setMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    
    setIsSubmitting(true);
    try {
      await emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY!);
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        form.current
      );
      setMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <h2 className="contact-email">kodjoandre56@gmail.com </h2>

        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            <label>
              <span>Name</span>
              <input 
                name="user_name" 
                type="text" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </label>
            <label>
              <span>E-mail</span>
              <input 
                name="user_email" 
                type="email" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </label>
          </div>

          <label>
            <span>Message</span>
            <textarea 
              name="message" 
              rows={6} 
              required 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </label>

          <div className="form-row">
            <button type="submit" className="btn-send" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send'} <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </form>

        {message && (
          <div className="flash-messages">
            <p className="msg">{message}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;