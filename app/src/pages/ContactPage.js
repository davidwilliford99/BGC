import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/contact/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Thanks for contacting us!');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } else {
            alert('Sorry, there was an error submitting your message.');
        }
    };

    return (
        <div class="container py-4">
            <form id='contactForm' onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label class="form-label" htmlFor="name">Name:</label>
                    <input class="form-control"
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <label class="form-label" htmlFor="email">Email:</label>
                <input class="form-control"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label class="form-label" htmlFor="message">Message:</label>
                <textarea class="form-control"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <button class="btn btn-primary btn-lg disabled" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;
