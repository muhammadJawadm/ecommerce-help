import { useState } from 'react'
import { HeadphonesIcon, CheckCircle, Mail, MessageSquare } from 'lucide-react'

export default function Support() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); setForm({ name: '', email: '', subject: '', message: '' }) }

  const faqs = [
    { q: 'Are all calculators and converters free?', a: 'Yes, 100% free. No signup, no credit card, no hidden costs — ever.' },
    { q: 'How accurate are the calculations?', a: 'Calculations use current platform fee structures as of 2026. Always verify with official platform documentation for the latest rates.' },
    { q: 'Can I use these tools on mobile?', a: 'Yes, the website is fully responsive and works on all devices.' },
    { q: 'How do I export results?', a: 'Use the "Export PDF" button on any calculator page — it triggers your browser\'s print dialog to save as PDF.' },
  ]

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 60%, #7c3aed 100%)', padding: '3rem 1.5rem', color: 'white' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MessageSquare size={22} color="white" />
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>Support Center</h1>
          </div>
          <p style={{ opacity: 0.85, fontSize: '1rem' }}>Have a question, found a bug, or want to suggest a new calculator? We'd love to hear from you.</p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '2.5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
          {/* Contact Form */}
          <div className="calc-panel" style={{ gridColumn: 'span 1' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  <CheckCircle size={32} color="#10b981" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>Message Received!</h3>
                <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>We'll follow up with you shortly at your email address.</p>
                <button onClick={() => setSubmitted(false)} className="btn btn-outline">Send Another Message</button>
              </div>
            ) : (
              <>
                <h2>Send a Message</h2>
                <form onSubmit={handleSubmit}>
                  {[
                    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com' },
                    { id: 'subject', label: 'Subject', type: 'text', placeholder: 'What can we help with?' },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id} style={{ marginBottom: '1rem' }}>
                      <label className="form-label" htmlFor={id}>{label}</label>
                      <input id={id} name={id} type={type} value={form[id]} onChange={handleChange} placeholder={placeholder} className="form-input" required />
                    </div>
                  ))}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Tell us what you need help with..." className="form-input" required style={{ resize: 'vertical' }} />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <Mail size={16} /> Send Message
                  </button>
                </form>
              </>
            )}
          </div>

          {/* FAQs */}
          <div className="calc-panel">
            <h2>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ paddingBottom: '1rem', borderBottom: i < faqs.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.375rem' }}>{faq.q}</div>
                  <div style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6 }}>{faq.a}</div>
                </div>
              ))}
            </div>

            <div style={{ background: 'linear-gradient(135deg, #eff6ff, #f5f3ff)', border: '1px solid #ddd6fe', borderRadius: 12, padding: '1.25rem', marginTop: '1.5rem' }}>
              <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <HeadphonesIcon size={16} color="#7c3aed" /> Direct Contact
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>
                For urgent queries, email us directly:
              </p>
              <a href="mailto:malikjawadkanyal@gmail.com" style={{ fontSize: '0.875rem', fontWeight: 600, color: '#2563eb', textDecoration: 'none' }}>
                malikjawadkanyal@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
