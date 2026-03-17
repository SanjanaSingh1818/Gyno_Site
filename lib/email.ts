// import emailjs from '@emailjs/browser' // Temporarily commented out

// EmailJS configuration - Replace with your actual values
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id'
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id'
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key'

export interface AppointmentEmailData {
  from_name: string
  from_email: string
  phone: string
  service: string
  preferred_date: string
  message: string
}

export async function sendAppointmentEmail(data: AppointmentEmailData) {
  try {
    // Dummy implementation - replace with actual EmailJS call
    console.log('Sending appointment email:', data)

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Mock successful response
    return {
      status: 200,
      text: 'Email sent successfully'
    }

    // Uncomment and configure EmailJS when ready:
    /*
    const templateParams = {
      from_name: data.from_name,
      from_email: data.from_email,
      phone: data.phone,
      service: data.service,
      preferred_date: data.preferred_date || 'Not specified',
      message: data.message || 'No additional message',
      to_email: 'drpriyadarshini@gmail.com',
    }

    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    )

    return result
    */
  } catch (error) {
    console.error('Email sending failed:', error)
    throw new Error('Failed to send appointment email')
  }
}

// Initialize EmailJS - Uncomment when ready
export function initEmailJS() {
  // if (typeof window !== 'undefined') {
  //   emailjs.init(PUBLIC_KEY)
  // }
}