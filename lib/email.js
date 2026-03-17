// Utility to send emails via EmailJS (https://www.emailjs.com/)
// Configure the following environment variables in .env.local:
// NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_USER_ID

export async function sendAppointmentEmail(templateParams) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID

  if (!serviceId || !templateId || !userId) {
    throw new Error(
      'Missing EmailJS configuration. Please set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID and NEXT_PUBLIC_EMAILJS_USER_ID in your environment.',
    )
  }

  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: userId,
      template_params: templateParams,
    }),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`EmailJS send failed: ${res.status} ${res.statusText} - ${text}`)
  }

  return res.json()
}
