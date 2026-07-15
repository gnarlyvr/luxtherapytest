import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { practiceInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "New Aviv privacy notice describing how medical information may be used and disclosed, and how you can get access to this information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Your Information. Your Rights. Our Responsibilities."
        backdropImage="https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1800&q=70"
      />

      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-sm font-semibold text-lux-ink">New Aviv, LLC</p>
        <p className="mt-1 text-sm text-lux-ink-muted">Effective date: 12/6/18</p>
        <p className="mt-6 text-lg leading-relaxed text-lux-ink-muted">
          This notice describes how medical information about you may be used and
          disclosed and how you can get access to this information. Please review
          it carefully.
        </p>

        <section className="mt-12">
          <h2 className="font-display text-2xl text-lux-moss-deep">Your Rights</h2>
          <p className="mt-3 text-lux-ink-muted">You have the right to:</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-lux-ink-muted">
            <li>Get a copy of your paper or electronic medical record</li>
            <li>Correct your paper or electronic medical record</li>
            <li>Request confidential communication</li>
            <li>Ask us to limit the information we share</li>
            <li>Get a list of those with whom we’ve shared your information</li>
            <li>Get a copy of this privacy notice</li>
            <li>Choose someone to act for you</li>
            <li>File a complaint if you believe your privacy rights have been violated</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl text-lux-moss-deep">Your Choices</h2>
          <p className="mt-3 text-lux-ink-muted">
            You have some choices in the way that we use and share information as we:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-lux-ink-muted">
            <li>Tell family and friends about your condition</li>
            <li>Provide disaster relief</li>
            <li>Include you in a hospital directory</li>
            <li>Provide mental health care</li>
            <li>Market our services and sell your information</li>
            <li>Raise funds</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl text-lux-moss-deep">
            Our Uses and Disclosures
          </h2>
          <p className="mt-3 text-lux-ink-muted">We may use and share your information as we:</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-lux-ink-muted">
            <li>Treat you</li>
            <li>Run our organization</li>
            <li>Bill for your services</li>
            <li>Help with public health and safety issues</li>
            <li>Do research</li>
            <li>Comply with the law</li>
            <li>Respond to organ and tissue donation requests</li>
            <li>Work with a medical examiner or funeral director</li>
            <li>Address workers’ compensation, law enforcement, and other government requests</li>
            <li>Respond to lawsuits and legal actions</li>
          </ul>
        </section>

        <section className="mt-12 space-y-6 text-lux-ink-muted">
          <h2 className="font-display text-2xl text-lux-moss-deep">
            Your Rights in Detail
          </h2>
          <div>
            <h3 className="font-semibold text-lux-ink">
              Get an electronic or paper copy of your medical record
            </h3>
            <p className="mt-2 leading-relaxed">
              You can ask to see or get an electronic or paper copy of your medical
              record and other health information we have about you. Ask us how to
              do this. We will provide a copy or a summary of your health
              information, usually within 30 days of your request. We may charge a
              reasonable, cost-based fee.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lux-ink">Ask us to correct your medical record</h3>
            <p className="mt-2 leading-relaxed">
              You can ask us to correct health information about you that you think
              is incorrect or incomplete. We may say “no” to your request, but
              we’ll tell you why in writing within 60 days.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lux-ink">Request confidential communications</h3>
            <p className="mt-2 leading-relaxed">
              You can ask us to contact you in a specific way (for example, home or
              office phone) or to send mail to a different address. We will say
              “yes” to all reasonable requests.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lux-ink">Ask us to limit what we use or share</h3>
            <p className="mt-2 leading-relaxed">
              You can ask us not to use or share certain health information for
              treatment, payment, or our operations. We are not required to agree
              to your request, and we may say “no” if it would affect your care. If
              you pay for a service or health care item out-of-pocket in full, you
              can ask us not to share that information for the purpose of payment
              or our operations with your health insurer. We will say “yes” unless
              a law requires us to share that information.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lux-ink">
              Get a list of those with whom we’ve shared information
            </h3>
            <p className="mt-2 leading-relaxed">
              You can ask for a list (accounting) of the times we’ve shared your
              health information for six years prior to the date you ask, who we
              shared it with, and why. We will include all the disclosures except
              for those about treatment, payment, and health care operations, and
              certain other disclosures (such as any you asked us to make). We’ll
              provide one accounting a year for free but will charge a reasonable,
              cost-based fee if you ask for another one within 12 months.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lux-ink">Get a copy of this privacy notice</h3>
            <p className="mt-2 leading-relaxed">
              You can ask for a paper copy of this notice at any time, even if you
              have agreed to receive the notice electronically. We will provide you
              with a paper copy promptly.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lux-ink">Choose someone to act for you</h3>
            <p className="mt-2 leading-relaxed">
              If you have given someone medical power of attorney or if someone is
              your legal guardian, that person can exercise your rights and make
              choices about your health information. We will make sure the person
              has this authority and can act for you before we take any action.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lux-ink">
              File a complaint if you feel your rights are violated
            </h3>
            <p className="mt-2 leading-relaxed">
              You can complain if you feel we have violated your rights by
              contacting us at {practiceInfo.phone} or {practiceInfo.email}. You
              can also file a complaint with the U.S. Department of Health and
              Human Services Office for Civil Rights by sending a letter to 200
              Independence Avenue, S.W., Washington, D.C. 20201, calling
              1-877-696-6775, or visiting{" "}
              <a
                href="https://www.hhs.gov/ocr/privacy/hipaa/complaints/"
                className="font-medium text-lux-moss underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.hhs.gov/ocr/privacy/hipaa/complaints/
              </a>
              . We will not retaliate against you for filing a complaint.
            </p>
          </div>
        </section>

        <section className="mt-12 space-y-4 text-lux-ink-muted">
          <h2 className="font-display text-2xl text-lux-moss-deep">Your Choices in Detail</h2>
          <p className="leading-relaxed">
            For certain health information, you can tell us your choices about what
            we share. If you have a clear preference for how we share your
            information in the situations described below, talk to us. Tell us what
            you want us to do, and we will follow your instructions.
          </p>
          <p className="leading-relaxed">In these cases, you have both the right and choice to tell us to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Share information with your family, close friends, or others involved in your care</li>
            <li>Share information in a disaster relief situation</li>
            <li>Include your information in a hospital directory</li>
          </ul>
          <p className="leading-relaxed">
            If you are not able to tell us your preference, for example if you are
            unconscious, we may go ahead and share your information if we believe
            it is in your best interest. We may also share your information when
            needed to lessen a serious and imminent threat to health or safety.
          </p>
          <p className="leading-relaxed">
            In these cases we never share your information unless you give us
            written permission: marketing purposes, sale of your information, and
            most sharing of psychotherapy notes. We may contact you for fundraising
            efforts, but you can tell us not to contact you again.
          </p>
        </section>

        <section className="mt-12 space-y-6 text-lux-ink-muted">
          <h2 className="font-display text-2xl text-lux-moss-deep">
            How We Typically Use or Share Your Health Information
          </h2>
          <div>
            <h3 className="font-semibold text-lux-ink">Treat you</h3>
            <p className="mt-2 leading-relaxed">
              We can use your health information and share it with other
              professionals who are treating you. Example: A doctor treating you
              for an injury asks another doctor about your overall health
              condition.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lux-ink">Run our organization</h3>
            <p className="mt-2 leading-relaxed">
              We can use and share your health information to run our practice,
              improve your care, and contact you when necessary. Example: We use
              health information about you to manage your treatment and services.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lux-ink">Bill for your services</h3>
            <p className="mt-2 leading-relaxed">
              We can use and share your health information to bill and get payment
              from health plans or other entities. Example: We give information
              about you to your health insurance plan so it will pay for your
              services.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lux-ink">
              Help with public health and safety issues
            </h3>
            <p className="mt-2 leading-relaxed">
              We can share health information about you for certain situations such
              as preventing disease, helping with product recalls, reporting adverse
              reactions to medications, reporting suspected abuse, neglect, or
              domestic violence, and preventing or reducing a serious threat to
              anyone’s health or safety.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lux-ink">Do research</h3>
            <p className="mt-2 leading-relaxed">
              We can use or share your information for health research.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lux-ink">Comply with the law</h3>
            <p className="mt-2 leading-relaxed">
              We will share information about you if state or federal laws require
              it, including with the Department of Health and Human Services if it
              wants to see that we’re complying with federal privacy law.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lux-ink">
              Respond to organ and tissue donation requests
            </h3>
            <p className="mt-2 leading-relaxed">
              We can share health information about you with organ procurement
              organizations.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lux-ink">
              Work with a medical examiner or funeral director
            </h3>
            <p className="mt-2 leading-relaxed">
              We can share health information with a coroner, medical examiner, or
              funeral director when an individual dies.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lux-ink">
              Address workers’ compensation, law enforcement, and other government
              requests
            </h3>
            <p className="mt-2 leading-relaxed">
              We can use or share health information about you for workers’
              compensation claims, for law enforcement purposes or with a law
              enforcement official, with health oversight agencies for activities
              authorized by law, and for special government functions such as
              military, national security, and presidential protective services.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lux-ink">Respond to lawsuits and legal actions</h3>
            <p className="mt-2 leading-relaxed">
              We can share health information about you in response to a court or
              administrative order, or in response to a subpoena.
            </p>
          </div>
        </section>

        <section className="mt-12 space-y-4 text-lux-ink-muted">
          <h2 className="font-display text-2xl text-lux-moss-deep">Our Responsibilities</h2>
          <ul className="list-disc space-y-2 pl-5 leading-relaxed">
            <li>
              We are required by law to maintain the privacy and security of your
              protected health information.
            </li>
            <li>
              We will let you know promptly if a breach occurs that may have
              compromised the privacy or security of your information.
            </li>
            <li>
              We must follow the duties and privacy practices described in this
              notice and give you a copy of it.
            </li>
            <li>
              We will not use or share your information other than as described
              here unless you tell us we can in writing. If you tell us we can, you
              may change your mind at any time. Let us know in writing if you
              change your mind.
            </li>
          </ul>
          <p className="leading-relaxed">
            For more information see:{" "}
            <a
              href="https://www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/noticepp.html"
              className="font-medium text-lux-moss underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/noticepp.html
            </a>
            .
          </p>
        </section>

        <section className="mt-12 space-y-4 text-lux-ink-muted">
          <h2 className="font-display text-2xl text-lux-moss-deep">
            Changes to the Terms of this Notice
          </h2>
          <p className="leading-relaxed">
            We can change the terms of this notice, and the changes will apply to
            all information we have about you. The new notice will be available
            upon request, in our office, and on our website.
          </p>
          <p className="leading-relaxed">
            Questions about this notice? Contact us at{" "}
            <a
              href={`tel:${practiceInfo.phone.replace(/\D/g, "")}`}
              className="font-medium text-lux-moss underline-offset-2 hover:underline"
            >
              {practiceInfo.phone}
            </a>{" "}
            or{" "}
            <a
              href={`mailto:${practiceInfo.email}`}
              className="font-medium text-lux-moss underline-offset-2 hover:underline"
            >
              {practiceInfo.email}
            </a>
            .
          </p>
        </section>
      </article>
    </>
  );
}
