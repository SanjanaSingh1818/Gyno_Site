import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function FAQs() {

  const faqs = [
    {
      question: 'What conditions does Dr. Priyadarshini Ghosh treat?',
      answer: 'Dr. Priyadarshini specializes in a wide range of women’s health concerns including infertility, high-risk pregnancy, fibroids, ovarian cysts, endometriosis, PCOS, heavy menstrual bleeding, and menopausal issues.',
    },
    {
      question: 'When should I consult a gynecologist?',
      answer: 'You should consult a gynecologist if you experience irregular periods, severe pain, difficulty conceiving, unusual discharge, or any concerns related to reproductive health. Regular check-ups are also recommended for preventive care.',
    },
    {
      question: 'Do you provide infertility and IVF consultation?',
      answer: 'Yes, Dr. Priyadarshini provides comprehensive infertility evaluation and treatment plans, including guidance for IVF and assisted reproductive techniques based on individual patient needs.',
    },
    {
      question: 'What is considered a high-risk pregnancy?',
      answer: 'A pregnancy is considered high-risk if there are complications such as high blood pressure, diabetes, previous pregnancy issues, or maternal age factors. Dr. Priyadarshini has extensive experience in managing such cases safely.',
    },
    {
      question: 'Are laparoscopic surgeries available at your clinic?',
      answer: 'Yes, minimally invasive laparoscopic procedures are offered for conditions like fibroids, cysts, and endometriosis, ensuring faster recovery and minimal discomfort.',
    },
    {
      question: 'Where is the clinic located?',
      answer: 'The clinic is located at L23, Kalkaji, New Delhi, and is equipped with modern diagnostic and treatment facilities for comprehensive women’s healthcare.',
    },
    {
      question: 'Which hospitals is Dr. Priyadarshini associated with?',
      answer: 'Dr. Priyadarshini is associated with reputed hospitals such as Apollo Cradle Panchsheel Enclave, Fortis La Femme GK2, and Cloudnine East of Kailash.',
    },
    {
      question: 'What should I expect during my first consultation?',
      answer: 'During your first visit, the doctor will review your medical history, understand your concerns, and may recommend tests if required. A personalized treatment plan will be discussed with you.',
    },
    {
      question: 'How can I book an appointment?',
      answer: 'You can book an appointment by calling +91-9910391381 or by using the “Book Appointment” option available on the website.',
    },
    {
      question: 'Is the clinic equipped with diagnostic facilities?',
      answer: 'Yes, the clinic offers essential diagnostic support including blood tests and guidance on imaging and other investigations, along with nutrition and lifestyle counseling.',
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-foreground mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto">
            Answers to common questions about treatments, consultations, and patient care.
          </p>

          <div className="mt-5 h-[2px] w-24 mx-auto bg-[#c45166]/60 rounded-full" />
        </div>

        {/* accordion */}
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-pink-100 rounded-xl px-4 bg-white hover:shadow-sm transition"
            >
              <AccordionTrigger className="text-left text-sm md:text-base font-medium">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  )
}