'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { sendAppointmentEmail } from '@/lib/email'
import { useToast } from '@/hooks/use-toast'
import { useAppointmentModal } from '@/components/appointment-modal-provider'
import { User, Mail, Phone, Calendar, MessageSquare, Send } from 'lucide-react'

const SERVICES = [
  'General Consultation',
  'Infertility Treatment',
  'High Risk Pregnancy Care',
  'Fibroids Treatment',
  'Ovarian Cyst Treatment',
  'Endometriosis Treatment',
  'Heavy Menstrual Bleeding',
  'Laparoscopic Gynecology',
  'Uterine Cancer Screening',
]

export default function AppointmentForm() {
  const { openModal, closeModal } = useAppointmentModal()
  const { toast } = useToast()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const isValid = form.name.trim() && form.email.trim() && form.phone.trim()

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    if (!isValid) {
      toast({
        title: 'Missing information',
        description: 'Please provide your name, email, and phone number to proceed.',
        variant: 'destructive',
      })
      return
    }

    setLoading(true)

    try {
      await sendAppointmentEmail({
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        service: form.service,
        preferred_date: form.preferredDate,
        message: form.message,
      })

      toast({
        title: 'Appointment request sent successfully!',
        description: 'We have received your request and will contact you within 24 hours.',
      })
      setForm({
        name: '',
        email: '',
        phone: '',
        service: '',
        preferredDate: '',
        message: '',
      })
      closeModal()
    } catch (error) {
      console.error(error)
      toast({
        title: 'Something went wrong',
        description: 'We were unable to send your request. Please try again or call us directly.',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Form Fields in a compact grid */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            Full Name *
          </label>
          <Input
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            required
            placeholder="Enter your full name"
            className="h-10"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            Email Address *
          </label>
          <Input
            type="email"
            value={form.email}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            required
            placeholder="your.email@example.com"
            className="h-10"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            Phone Number *
          </label>
          <Input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
            required
            placeholder="+91 99103 91381"
            className="h-10"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            Preferred Date
          </label>
          <Input
            type="date"
            value={form.preferredDate}
            onChange={(e) => setForm((prev) => ({ ...prev, preferredDate: e.target.value }))}
            className="h-10"
          />
        </div>
      </div>

      {/* Service Selection */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Service Required</label>
        <Select value={form.service} onValueChange={(value) => setForm((prev) => ({ ...prev, service: value }))}>
          <SelectTrigger className="w-full h-10">
            <SelectValue placeholder="Choose a service" />
          </SelectTrigger>
          <SelectContent>
            {SERVICES.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-primary" />
          Additional Message (Optional)
        </label>
        <Textarea
          value={form.message}
          onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
          placeholder="Describe your symptoms or concerns..."
          rows={3}
          className="resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full h-11 text-sm font-semibold bg-primary hover:bg-primary/90"
        disabled={loading}
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Send className="w-4 h-4" />
            Send Appointment Request
          </div>
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        * Required fields • We respect your privacy
      </p>
    </form>
  )
}
