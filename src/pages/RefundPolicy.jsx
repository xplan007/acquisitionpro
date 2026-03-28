import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function RefundPolicy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="legal-page">
      <nav className="nav scrolled">
        <div className="container nav-inner">
          <Link to="/" className="logo">
            <img src="/logo-new.png" alt="AcquisitionPro" className="logo-image" />
            <span className="logo-text">Acquisition<span>Pro</span></span>
          </Link>
          <Link to="/" className="nav-cta">Back to Home</Link>
        </div>
      </nav>

      <div className="container legal-container">
        <h1>Cancellation Policy</h1>
        <p className="legal-updated">Last updated: March 4, 2026</p>

        <section>
          <h2>1. Overview</h2>
          <p>
            At AcquisitionPro LLC, we provide custom lead generation and client acquisition
            services for executive and leadership coaches. This policy outlines our cancellation
            terms and conditions. By engaging our services and signing a service agreement, you
            acknowledge and agree to the terms set forth below.
          </p>
        </section>

        <section>
          <h2>2. Service Structure</h2>
          <p>
            Our engagements consist of two components:
          </p>
          <ul>
            <li>
              <strong>Setup & Onboarding:</strong> A one-time engagement covering LinkedIn profile
              optimization, prospect targeting, campaign strategy development, outreach system
              configuration, and campaign launch. This work begins immediately upon agreement
              execution and payment.
            </li>
            <li>
              <strong>Performance-Based Delivery:</strong> Ongoing appointment generation where
              fees are charged per confirmed booked appointment delivered to you. You are only
              invoiced for results that have already been delivered.
            </li>
          </ul>
          <p>
            All terms, deliverables, and fee structures are outlined in your individual service
            agreement, which must be signed prior to any payment or work commencing.
          </p>
        </section>

        <section>
          <h2>3. No-Refund Policy</h2>
          <p>
            All payments made to AcquisitionPro LLC are <strong>non-refundable</strong>. This
            applies to both the setup and onboarding fee and any per-appointment fees. Here is why:
          </p>
          <ul>
            <li>
              <strong>Setup & Onboarding fees</strong> cover custom, labor-intensive work that
              begins immediately upon agreement execution. This includes strategy development,
              profile optimization, targeting research, campaign creation, and system configuration, all of which are performed specifically for your business and cannot be reused
              or reversed.
            </li>
            <li>
              <strong>Per-appointment fees</strong> are only charged after a qualified appointment
              has been successfully booked and confirmed. Since the service has already been
              delivered at the time of invoicing, these fees are non-refundable.
            </li>
          </ul>
          <p>
            In the event of a duplicate or erroneous charge caused by a billing error on our end,
            we will issue a correction promptly. Please contact us within 7 days of the charge.
          </p>
        </section>

        <section>
          <h2>4. Cancellation Terms</h2>

          <h3>Before Work Begins</h3>
          <p>
            If you wish to cancel before your signed service agreement has been executed and
            before any payment has been made, you may do so at no cost. Simply notify us in
            writing at{' '}
            <a href="mailto:contact@acquisitionpro.net">contact@acquisitionpro.net</a>.
          </p>

          <h3>After Setup & Onboarding Has Started</h3>
          <p>
            Once the setup and onboarding phase has begun, this fee is non-refundable as work
            is already underway. You may request to cancel the ongoing appointment generation
            component at any time by providing written notice. Upon cancellation:
          </p>
          <ul>
            <li>No further appointments will be generated on your behalf.</li>
            <li>You will be invoiced for any appointments already booked up to the cancellation date.</li>
            <li>The setup and onboarding fee remains non-refundable, as the work has been completed or is in progress.</li>
            <li>Cancellation takes effect within 5 business days of receiving your written notice.</li>
          </ul>

          <h3>How to Cancel</h3>
          <p>
            To cancel your service, send a written request to{' '}
            <a href="mailto:contact@acquisitionpro.net">contact@acquisitionpro.net</a>{' '}
            with the subject line "Cancellation Request." Include your full name and the
            email address associated with your account. We will confirm receipt and process
            your cancellation within 2 business days.
          </p>
        </section>

        <section>
          <h2>5. Dispute Resolution</h2>
          <p>
            If you have concerns about our services or any charges, we strongly encourage you
            to contact us directly at{' '}
            <a href="mailto:contact@acquisitionpro.net">contact@acquisitionpro.net</a>{' '}
            before taking any other action. We are committed to resolving any issues promptly
            and fairly.
          </p>
          <p>
            By agreeing to our service terms, you acknowledge that filing a chargeback or
            payment dispute with your bank or card issuer without first attempting to resolve
            the matter with us directly may result in additional administrative fees and will
            delay resolution. We reserve the right to submit evidence of the signed service
            agreement, delivered work, and correspondence to contest any unauthorized disputes.
          </p>
        </section>

        <section>
          <h2>6. Your Acknowledgment</h2>
          <p>
            By signing your service agreement and making a payment, you confirm that you have
            read, understood, and agree to this Cancellation Policy, including the no-refund
            terms. You acknowledge that:
          </p>
          <ul>
            <li>The setup and onboarding fee covers custom work that begins immediately and is non-refundable.</li>
            <li>Per-appointment fees are charged only for delivered results and are non-refundable.</li>
            <li>You may cancel ongoing services at any time, but all fees for work completed or results delivered remain due.</li>
          </ul>
        </section>

        <section>
          <h2>7. Modifications</h2>
          <p>
            We reserve the right to update this Cancellation Policy at any time. Changes will
            be posted on this page with an updated "Last updated" date. The policy in effect
            at the time you sign your service agreement will apply to that engagement.
          </p>
        </section>

        <section>
          <h2>8. Contact Us</h2>
          <p>For cancellation requests or questions about this policy:</p>
          <ul className="contact-list">
            <li><strong>AcquisitionPro LLC</strong></li>
            <li>Email: <a href="mailto:contact@acquisitionpro.net">contact@acquisitionpro.net</a></li>
            <li>Phone: <a href="tel:+13079982025">+1 (307) 998-2025</a></li>
            <li>Website: <a href="https://acquisitionpro.net">acquisitionpro.net</a></li>
          </ul>
        </section>
      </div>

      <footer className="legal-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} AcquisitionPro LLC. All rights reserved.</p>
          <div className="legal-footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
