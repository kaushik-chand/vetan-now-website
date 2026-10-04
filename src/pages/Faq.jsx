import { useEffect, useState } from "react";
import Seo from "../components/Seo";
import "./Faq.css";

const GROUPS = [
  {
    title: "For Employers",
    items: [
      {
        question: "What is VetanNow?",
        answer:
          "VetanNow is India’s pioneering Early Wage Access (EWA) and financial wellness platform that helps employees access their earned salary on-demand, along with savings and learning tools. Designed for SMBs and mid-sized firms, our platform reduces financial stress, boosts employee satisfaction, and improves workplace productivity.",
      },
      {
        question: "How can our company offer VetanNow to employees, and who is eligible?",
        answer:
          "We follow a B2B2C model—your company partners with us to offer benefits. Once onboarded, both on-roll and off-roll employees—including field staff, gig workers, and consultants—can access the platform.",
      },
      {
        question: "How quickly can VetanNow benefits be rolled out?",
        answer:
          "Very quickly. With our standard deployment, we can launch within 24–48 hours post-agreement. For more custom setups or deeper integrations (like HRMS/payroll), rollouts typically complete within 3–10 business days.",
      },
      {
        question: "Will integrating VetanNow disrupt payroll operations?",
        answer:
          "Not at all. VetanNow integrates seamlessly with existing HR payroll systems. Withdrawals are auto-deducted from the same month’s payroll, clearly shown as line items. Payroll cadence, timelines, and structure remain unchanged.",
      },
      {
        question: "What are the costs for the employer?",
        answer:
          "VetanNow costs you nothing. There’s no capital impact—employees access only their own earnings. A nominal, transparent transaction fee is applied only to the employee’s withdrawal request.",
      },
      {
        question: "Is employee data secure with VetanNow?",
        answer:
          "Yes, completely. We comply with RBI’s KYC standards and follow data protection best practices (DPDP, VAPT), along with SOC-2 certification. Your employee data remains secure and confidential.",
      },
    ],
  },
  {
    title: "For Employees",
    items: [
      {
        question: "Am I eligible to use VetanNow?",
        answer:
          "Yes—if your employer has partnered with VetanNow, you're eligible. Both permanent and contingent staff (field workers, contractors, gig staff) can access the platform.",
      },
      {
        question: "Can I sign up for VetanNow on my own?",
        answer:
          "No. VetanNow is available only through employer partnerships. Please reach out to your HR team to explore the benefits for your workplace.",
      },
      {
        question: "What makes VetanNow different from bank apps or payday loans?",
        answer:
          "VetanNow gives you access to your already-earned salary, without any credit checks or hidden costs. It’s not a loan. Withdrawals are processed within minutes, unlike the slow and paperwork-heavy banking or loan process.",
      },
      {
        question: "How soon will funds be available after I request withdrawal?",
        answer:
          "Funds are typically credited to your account within 60 seconds of the request, giving you fast access during mid-month crunches.",
      },
      {
        question: "Can I withdraw more than my monthly salary?",
        answer:
          "Currently no, but in future we will come up with a feature where you can withdraw more than salary as well.",
      },
      {
        question: "Does using VetanNow impact my credit score?",
        answer:
          "No. Since this isn't a loan but simply access to your own earned wages, there’s no impact on your credit score.",
      },
      {
        question: "What fees am I charged as an employee?",
        answer:
          "A small transaction fee, ranging between 2.5% and 3% per transaction, is applied per withdrawal. No interest, no hidden charges—and it's clearly shown before you proceed.",
      },
    ],
  },
];

const Faq = () => {
  const [openId, setOpenId] = useState("For Employers-0");

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: GROUPS.flatMap((group) => group.items).map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <main className="faq-page">
      <Seo
        title="FAQs | VetanNow"
        description="Frequently asked questions about VetanNow for employers and employees."
        path="/faq"
      />
      <h1>VetanNow – FAQ</h1>
      <p className="faq-intro">
        Answers for employers partnering with VetanNow and for employees using earned wage access.
      </p>
      {GROUPS.map((group) => (
        <section key={group.title}>
          <h2>{group.title}</h2>
          <div className="faq-list">
            {group.items.map((item, index) => {
              const id = `${group.title}-${index}`;
              const open = openId === id;
              return (
                <div className={`faq-item ${open ? "open" : ""}`} key={id}>
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenId(open ? "" : id)}
                  >
                    <span>{item.question}</span>
                    <span aria-hidden="true">{open ? "−" : "+"}</span>
                  </button>
                  {open && <p>{item.answer}</p>}
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
};

export default Faq;
