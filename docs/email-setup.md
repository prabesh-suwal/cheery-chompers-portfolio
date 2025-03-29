# Setting up EmailJS for the Contact Form

This project uses EmailJS to handle the contact form submissions. EmailJS allows sending emails directly from client-side JavaScript without requiring a backend server.

## Setup Instructions

1. **Create an EmailJS Account**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - The free tier allows up to 200 emails per month

2. **Create an Email Service**
   - Go to the EmailJS dashboard
   - Click "Add New Service"
   - Connect your email provider (Gmail, Outlook, etc.)
   - Follow the authentication steps

3. **Create an Email Template**
   - Go to "Email Templates" in the dashboard
   - Click "Create New Template"
   - Design your email template using the following variables:
     - `{{name}}` - Name of the sender
     - `{{email}}` - Email of the sender
     - `{{phone}}` - Phone number
     - `{{subject}}` - Subject of the message
     - `{{message}}` - Message content
   - Save your template

4. **Get Your Credentials**
   - Note your Service ID from the Email Services page
   - Note your Template ID from the Email Templates page
   - Get your Public Key from the Account page > API Keys

5. **Configure the Environment Variables**
   - Copy the `.env.example` file to a new file named `.env`
   - Fill in your credentials:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

## How It Works

The contact form in `src/components/Contact.tsx` uses the EmailJS library to send form data directly to your email address. When a user submits the form:

1. The form data is collected (name, email, phone, subject, message)
2. EmailJS is initialized with your public key
3. The send method uses your service ID and template ID to send the message
4. A success or error message is displayed to the user

## Troubleshooting

- If emails are not being sent, check if all credentials are correctly set in the `.env` file
- Ensure the email template variables match exactly with what's being sent from the form
- Check the EmailJS dashboard for any error logs
- For rate limit issues, consider upgrading your EmailJS plan