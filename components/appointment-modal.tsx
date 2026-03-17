'use client'

import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useAppointmentModal } from "@/components/appointment-modal-provider"
import { sendAppointmentEmail } from "@/lib/email"

const services = [
  "Infertility Treatment",
  "High Risk Pregnancy",
  "Fibroids Treatment",
  "Heavy Menstrual Bleeding",
  "Laparoscopic Gynecology",
  "Uterine Cancer Screening",
  "Menopause Management",
  "Adolescent Gynecology",
]

const slots = [
  "09:30 AM",
  "09:45 AM",
  "10:00 AM",
  "10:15 AM",
  "10:30 AM",
  "10:45 AM",
  "11:00 AM",
  "11:15 AM",
  "11:30 AM",
  "11:45 AM",
  "12:00 PM",
  "12:15 PM",
  "12:30 PM",
  "12:45 PM",
  "01:00 PM",
  "01:15 PM",
  "01:30 PM",
  "05:30 PM",
  "05:45 PM",
  "06:00 PM",
  "06:15 PM",
  "06:30 PM",
  "06:45 PM",
  "07:00 PM",
  "07:15 PM",
  "07:30 PM",
  
]

function convertTo24Hour(time) {
  const [timePart, modifier] = time.split(" ")
  let [hours, minutes] = timePart.split(":").map(Number)

  if (modifier === "PM" && hours !== 12) hours += 12
  if (modifier === "AM" && hours === 12) hours = 0

  return hours * 60 + minutes
}

export default function AppointmentModal() {
  const { open, closeModal, openModal } = useAppointmentModal()
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [patientName, setPatientName] = useState('')
  const [patientPhone, setPatientPhone] = useState('')
  const [appointmentDate, setAppointmentDate] = useState('')
  const [selectedServices, setSelectedServices] = useState([])

  const now = new Date()
  const currentMinutes = now.getHours() * 60 + now.getMinutes()

  const selectedDate = appointmentDate ? new Date(appointmentDate) : null
  const isToday =
    selectedDate &&
    selectedDate.toDateString() === new Date().toDateString()

  const availableSlots = isToday
    ? slots.filter((slot) => convertTo24Hour(slot) > currentMinutes)
    : slots

  const nextSlot = availableSlots[0]
  const [showSlotModal, setShowSlotModal] = useState(false)

  const isTomorrow =
    selectedDate &&
    new Date(selectedDate.getTime() - 86400000).toDateString() ===
      new Date().toDateString()

  const formatSlotDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0')
    const month = date
      .toLocaleDateString('en-US', { month: 'short' })
      .toUpperCase()
    const year = String(date.getFullYear()).slice(-2)
    return `${day} ${month}'${year}`
  }

  const slotDateLabel = selectedDate
    ? `SLOTS AVAILABLE ${formatSlotDate(selectedDate)}${isTomorrow ? ', TOMORROW' : ''}`
    : ''

  const slotsToShow = availableSlots.slice(0, 3)

  const groupedSlots = availableSlots.reduce<
    Record<'Morning' | 'Afternoon' | 'Evening', string[]>
  >(
    (acc, slot) => {
      const minutes = convertTo24Hour(slot)
      if (minutes < 12 * 60) acc.Morning.push(slot)
      else if (minutes < 17 * 60) acc.Afternoon.push(slot)
      else acc.Evening.push(slot)
      return acc
    },
    { Morning: [], Afternoon: [], Evening: [] }
  )

  const isValid =
    patientName.trim() &&
    patientPhone.trim() &&
    appointmentDate &&
    selectedSlot

  async function handleConfirm() {
    if (!isValid) return

    try {
      await sendAppointmentEmail({
        from_name: patientName,
        from_email: `${patientPhone}@unknown`,
        phone: patientPhone,
        service: `Appointment on ${appointmentDate} at ${selectedSlot}${selectedServices.length > 0 ? ` - ${selectedServices.join(', ')}` : ''}`,
        preferred_date: appointmentDate,
        message: `Selected Service: ${selectedServices.length > 0 ? selectedServices.join(', ') : 'General Consultation'}`,
      })
    } catch (error) {
      console.error('Email send failed', error)
    }

    const whatsappText = `Hello, I would like to book an appointment.%0A%0APatient Name: ${patientName}%0APhone: ${patientPhone}%0ADate: ${appointmentDate}%0ATime Slot: ${selectedSlot}%0A${selectedServices.length > 0 ? `%0AService: ${selectedServices.join(', ')}` : ''}%0A%0ADoctor: Dr. Priyadarshini Ghosh`
    const waUrl = `https://wa.me/919910391381?text=${whatsappText}`
    window.open(waUrl, '_blank')
    closeModal()
  }

  return (
    <Dialog open={open} onOpenChange={(value) => (value ? openModal() : closeModal())}>
        <DialogContent className="max-w-xl sm:max-w-2xl rounded-xl p-6">
          <DialogTitle className="sr-only">Book an Appointment</DialogTitle>
        {/* Logo */}
        <div className="flex justify-center mb-3">
          <Image
            src="/logo.webp"
            alt="Dr Priyadarshini Ghosh"
            width={170}
            height={60}
          />
        </div>

        {/* One-line intro */}
        <div className="text-center">
          <p className="text-sm text-gray-700">
            Choose a time to consult with Dr. Priyadarshini Ghosh.
          </p>
          <div className="mx-auto mt-2 h-0.5 w-14 rounded bg-[#c45166]" />
        </div>

        {/* Price */}
        <p className="text-center text-sm mt-3 text-gray-600">
          Consultation Fee <span className="font-semibold text-[#c45166]">₹800</span>
        </p>

        {/* Patient Details */}
        <div className="grid grid-cols-2 gap-3 mt-6">

          <input
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            type="text"
            placeholder="Full Name"
            className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c45166]"
          />

          <input
            value={patientPhone}
            onChange={(e) => setPatientPhone(e.target.value)}
            type="tel"
            placeholder="Phone"
            className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c45166]"
          />

          <input
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            type="date"
            className="border rounded-lg px-3 py-2 text-sm col-span-2 focus:outline-none focus:ring-2 focus:ring-[#c45166]"
          />

        </div>

        {/* Slot Selection */}
        <div className="mt-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-sm font-semibold text-gray-900">Consultation</p>
              {slotDateLabel && (
                <p className="text-xs font-semibold text-emerald-600 mt-1">
                  {slotDateLabel}
                </p>
              )}
            </div>
            <p className="text-sm text-gray-500">
              from <span className="font-semibold text-[#c45166]">₹800</span>
            </p>
          </div>

          {availableSlots.length === 0 ? (
            <p className="text-xs text-gray-500">
              {isToday
                ? 'No slots available today. Please choose another date.'
                : 'No slots available for the selected date.'}
            </p>
          ) : (
            <>
              <div className="grid grid-cols-3 gap-2">
                {slotsToShow.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`text-sm py-2 rounded-lg border transition relative
                      ${
                        selectedSlot === slot
                          ? "bg-[#c45166] text-white border-[#c45166]"
                          : "hover:bg-[#F6E9EC] border-gray-300"
                      }
                      ${slot === nextSlot ? "ring-2 ring-[#c45166]" : ""}
                    `}
                  >
                    {slot}

                    {slot === nextSlot && (
                      <span className="absolute -top-2 -right-2 text-[10px] bg-[#c45166] text-white px-1.5 py-0.5 rounded">
                        Next
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {availableSlots.length > slotsToShow.length && (
                <button
                  type="button"
                  onClick={() => setShowSlotModal(true)}
                  className="w-full mt-3 py-2 rounded-lg border border-[#c45166] bg-[#F6E9EC] text-[#c45166] font-semibold"
                >
                  See all slots
                </button>
              )}
            </>
          )}
        </div>

        <Dialog open={showSlotModal} onOpenChange={(value) => setShowSlotModal(value)}>
          <DialogContent className="max-w-lg sm:max-w-xl rounded-xl p-6">
            <DialogTitle className="text-lg font-semibold">Select a time slot</DialogTitle>
            {slotDateLabel && (
              <p className="text-xs font-semibold text-emerald-600 mt-1">
                {slotDateLabel}
              </p>
            )}

            <div className="mt-4 space-y-4">
              {Object.entries(groupedSlots).map(([heading, slots]) =>
                slots.length ? (
                  <div key={heading}>
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      {heading}
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {slots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => {
                            setSelectedSlot(slot)
                            setShowSlotModal(false)
                          }}
                          className={`text-sm py-2 rounded-lg border transition relative
                            ${
                              selectedSlot === slot
                                ? "bg-[#c45166] text-white border-[#c45166]"
                                : "hover:bg-[#F6E9EC] border-gray-300"
                            }
                            ${slot === nextSlot ? "ring-2 ring-[#c45166]" : ""}
                          `}
                        >
                          {slot}

                          {slot === nextSlot && (
                            <span className="absolute -top-2 -right-2 text-[10px] bg-[#c45166] text-white px-1.5 py-0.5 rounded">
                              Next
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null
              )}
            </div>

            <Button
              type="button"
              variant="secondary"
              onClick={() => setShowSlotModal(false)}
              className="w-full mt-6"
            >
              Close
            </Button>
          </DialogContent>
        </Dialog>

        {/* Services Selection */}
        <div className="mt-6">
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Select Service (optional)
          </label>
          <select
            value={selectedServices[0] || ''}
            onChange={(e) => {
              const value = e.target.value
              setSelectedServices(value ? [value] : [])
            }}
            className="border rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#c45166]"
            style={{
              backgroundColor: 'white',
            }}
          >
            <option value="" style={{ backgroundColor: 'white' }}>Choose a service...</option>
            {services.map((service, index) => (
              <option 
                key={index} 
                value={service}
                style={{ 
                  backgroundColor: 'white',
                  color: 'black'
                }}
                className="hover:bg-[#c45166] hover:text-white"
              >
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* CTA Button */}
        <Button
          type="button"
          onClick={handleConfirm}
          disabled={!isValid}
          className="w-full mt-5 bg-[#c45166] hover:bg-[#a83f4d] text-white py-3 rounded-lg disabled:bg-gray-300 disabled:text-gray-500"
        >
          Confirm Appointment
        </Button>

      </DialogContent>
    </Dialog>
  )
}