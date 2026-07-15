import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { practiceInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "No Surprises Act",
  description:
    "New Aviv information about the No Surprises Act, surprise billing protections, and patient notice and consent requirements.",
};

export default function NoSurprisesActPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="No Surprises Act"
        description="Standard notice and consent information under the No Surprises Act for healthcare transparency and billing protections."
        backdropImage="https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1800&q=70"
      />

      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <section className="space-y-4 text-lux-ink-muted">
          <h2 className="font-display text-2xl text-lux-moss-deep">
            Standard Notice and Consent Documents
          </h2>
          <p className="text-sm font-medium text-lux-ink">
            For use by nonparticipating providers and nonparticipating emergency
            facilities beginning January 1, 2022
          </p>
          <p className="leading-relaxed">
            The Department of Health and Human Services (HHS) developed standard
            notice and consent documents under section 2799B-2(d) of the Public
            Health Service Act (PHS Act). These documents are for use when
            providing items and services to participants, beneficiaries, enrollees,
            or covered individuals in group health plans or group or individual
            health insurance coverage, including Federal Employees Health Benefits
            (FEHB) plans by either:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              A nonparticipating provider or nonparticipating emergency facility
              when furnishing certain post-stabilization services, or
            </li>
            <li>
              A nonparticipating provider (or facility on behalf of the provider)
              when furnishing non-emergency services (other than ancillary
              services) at certain participating health care facilities.
            </li>
          </ul>
          <p className="leading-relaxed">
            Providers and facilities should <strong>not</strong> give these
            documents to an individual who is seeking items or services from
            in-network providers only, who has Medicare, Medicaid, or any form of
            coverage other than as previously described, or who is uninsured.
          </p>
        </section>

        <section className="mt-12 space-y-4 text-lux-ink-muted">
          <h2 className="font-display text-2xl text-lux-moss-deep">
            Surprise Billing Protection Form
          </h2>
          <p className="leading-relaxed">
            This document describes your protections against unexpected medical
            bills. It also asks if you’d like to give up those protections and pay
            more for out-of-network care.
          </p>
          <p className="rounded-lg border border-lux-border bg-lux-foam p-4 leading-relaxed text-lux-ink">
            <strong>Important:</strong> You aren’t required to sign this form and
            shouldn’t sign it if you didn’t have a choice of health care provider
            before scheduling care. You can choose to get care from a provider or
            facility in your health plan’s network, which may cost you less.
          </p>
          <p className="leading-relaxed">
            If you’d like assistance with this document, ask your provider or a
            patient advocate. Take a picture and/or keep a copy of this form for
            your records.
          </p>
          <p className="leading-relaxed">
            You’re getting this notice because this provider or facility isn’t in
            your health plan’s network and is considered out-of-network. This means
            the provider or facility doesn’t have an agreement with your plan to
            provide services. Getting care from this provider or facility will
            likely cost you more.
          </p>
          <p className="leading-relaxed">
            If your plan covers the item or service you’re getting, federal law
            protects you from higher bills when:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              You’re getting emergency care from an out-of-network provider or
              facility, or
            </li>
            <li>
              An out-of-network provider is treating you at an in-network hospital
              or ambulatory surgical center without getting your consent to
              receive a higher bill.
            </li>
          </ul>
          <p className="leading-relaxed">
            Ask your health care provider or patient advocate if you’re not sure
            if these protections apply to you.
          </p>
        </section>

        <section className="mt-12 space-y-4 text-lux-ink-muted">
          <h2 className="font-display text-2xl text-lux-moss-deep">
            If You Sign the Consent Form
          </h2>
          <p className="leading-relaxed">If you sign this form, be aware that you may pay more because:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>You’re giving up your legal protections from higher bills.</li>
            <li>
              You may owe the full costs billed for the items and services you get.
            </li>
            <li>
              Your health plan might not count any of the amount you pay towards
              your deductible and out-of-pocket limit. Contact your health plan for
              more information.
            </li>
          </ul>
          <p className="leading-relaxed">
            Before deciding whether to sign this form, you can contact your health
            plan to find an in-network provider or facility. If there isn’t one,
            you can also ask your health plan if they can work out an agreement
            with this provider or facility (or another one) to lower your costs.
          </p>
        </section>

        <section className="mt-12 space-y-4 text-lux-ink-muted">
          <h2 className="font-display text-2xl text-lux-moss-deep">
            Estimate of What You Could Pay
          </h2>
          <p className="leading-relaxed">
            When these documents apply to your care, New Aviv will provide a
            written good-faith cost estimate for the items or services you may
            receive. That estimate is not an offer or contract for services and
            may differ from the final cost. Contact your health plan to find out
            if your plan will pay any portion of these costs, and how much you may
            have to pay out-of-pocket.
          </p>
          <p className="leading-relaxed">
            Except in an emergency, your health plan may require prior
            authorization (or other limitations) for certain items and services.
            This means you may need your plan’s approval that it will cover the
            items or services before you can get them. If your plan requires prior
            authorization, ask them what information they need for you to get
            coverage.
          </p>
        </section>

        <section className="mt-12 space-y-4 text-lux-ink-muted">
          <h2 className="font-display text-2xl text-lux-moss-deep">
            Timing of Notice and Consent Documents
          </h2>
          <p className="leading-relaxed">
            If an individual makes an appointment at least 72 hours before the
            date that the items and services are to be furnished, these notice and
            consent documents must be provided at least 72 hours before that date.
            If the appointment is made within 72 hours of the date services are to
            be furnished, the documents must be provided on the day the appointment
            is scheduled. When documents are provided on the day services are to
            be furnished, including for post-stabilization services, they must be
            provided no later than 3 hours prior to furnishing the relevant items
            or services.
          </p>
        </section>

        <section className="mt-12 space-y-4 text-lux-ink-muted">
          <h2 className="font-display text-2xl text-lux-moss-deep">
            More Information About Your Rights
          </h2>
          <p className="leading-relaxed">
            Visit{" "}
            <a
              href="https://www.cms.gov/nosurprises/consumers"
              className="font-medium text-lux-moss underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.cms.gov/nosurprises/consumers
            </a>{" "}
            for more information about your rights under federal law. For
            questions or complaints related to surprise billing protections, you
            may also contact the federal information line at{" "}
            <a
              href="tel:18009853059"
              className="font-medium text-lux-moss underline-offset-2 hover:underline"
            >
              1-800-985-3059
            </a>
            .
          </p>
          <p className="leading-relaxed">
            Questions about how New Aviv handles these notices for your care?
            Contact us at{" "}
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
          <p className="text-sm leading-relaxed">
            Note: The information on this page is a general summary of the notice
            and consent materials under the No Surprises Act. It is not intended to
            take the place of the statutes, regulations, or formal policy guidance
            upon which it is based. Official notice and consent documents, when
            required, will be provided separately in connection with your care.
          </p>
        </section>
      </article>
    </>
  );
}
