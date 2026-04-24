import Footer from "@/components/Footer";

export default function RefundPolicyPage() {
  return (
    <div className="relative min-h-screen bg-[#f2f1ee] text-black flex flex-col items-center">
      <div className="w-95/100 md:w-8/10 pt-20 ">

        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-3 tracking-tight">
          Refund Policy
        </h1>
        <p className="text-sm text-black/40 font-medium mb-12 uppercase tracking-widest">
          Last Updated: 29/10/24
        </p>

        <div className="space-y-12 text-base md:text-lg leading-relaxed text-black/75">

          {/* Initial 14-Day Trial */}
          <section>
            <SubHeading>Initial 14-Day Trial</SubHeading>
            <p>
              Candidates may opt out from the trial within the first 14 days of the program and request a full refund of their entire amount.
            </p>
          </section>

          <hr className="border-black/10" />

          {/* Performance-Based Refund */}
          <section>
            <SubHeading>Performance-Based Refund</SubHeading>
            <p>
              Post trial, candidates remain eligible for a performance-based refund at the end of the program.
            </p>
          </section>

          <hr className="border-black/10" />

          {/* Eligibility for Performance-Based Refund */}
          <section>
            <SubHeading>Eligibility for Performance-Based Refund</SubHeading>
            <p>
              To qualify for a full refund, candidates must complete all program requirements within the specified time frame (8 or 10 months, depending on the program they enrolled in).
            </p>
          </section>

          <hr className="border-black/10" />

          {/* Eligibility Criteria for Refund */}
          <section>
            <SubHeading>Eligibility Criteria for Refund</SubHeading>

            <p className="mb-4">
              To qualify for a refund during the 14-day trial period, you must:
            </p>

            <ul className="space-y-3 mb-6 pl-1">
              {[
                "Attend 90% of all live classes conducted during the trial period.",
                "Complete 85% of all assignments provided within the trial period.",
                "Submit assignments within the given deadlines.",
                "Maintain active participation as required by the program guidelines.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              Failure to meet any of the above conditions will result in the trial period being considered invalid, and you will not be eligible for a refund.
            </p>
          </section>

          <hr className="border-black/10" />

          {/* Refund Request Process */}
          <section>
            <SubHeading>Refund Request Process</SubHeading>

            <p className="mb-4">
              Refund requests must be made in writing within the 14-day trial window.
            </p>

            <p className="mb-4">
              The request will be reviewed against attendance records and assignment completion status.
            </p>

            <p>
              If all eligibility conditions are satisfied, the refund will be processed as per company policy timelines.
            </p>
          </section>

          <hr className="border-black/10" />

          {/* Clauses to Qualify for Performance-Based Refund */}
          <section>
            <SubHeading>Clauses to Qualify for Performance-Based Refund</SubHeading>

            <p className="mb-4">
              Candidates must meet the following criteria to be eligible for a refund:
            </p>

            <ul className="space-y-3 pl-1">
              {[
                "Attendance: Maintain 90% attendance in live classes.",
                "Assignments: Submit 85% of assignments.",
                "Assessments: Successfully complete all assessments within scheduled dates.",
                "Project/Hackathon: Participate in and complete all required projects or hackathons.",
                "Mock Interviews: Successfully clear mock interviews.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-black/10" />

          {/* Placement Assistance */}
          <section>
            <SubHeading>Placement Assistance</SubHeading>

            <p className="mb-4">
              After completing the 4 or 7 months learning period, candidates who have fulfilled all requirements within the scheduled screening day will receive 4 months of dedicated placement assistance.
            </p>

            <p>
              Placement assistance will be provided only for job opportunities in the expected salary range of ₹10 LPA to ₹12 LPA.
            </p>
          </section>

          <hr className="border-black/10" />

          {/* Outcome After Placement Assistance */}
          <section>
            <SubHeading>Outcome After Placement Assistance</SubHeading>

            <p className="mb-4">
              If candidates do not secure a job within the 4-month placement assistance window, they have the following options:
            </p>

            <ul className="space-y-3 pl-1">
              {[
                "Refund Option: Full refund within 45–60 business days.",
                "Extended Assistance Option: 8 months self-paced assistance (no refund eligibility).",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-black/10" />

          {/* Failure to Meet Clauses */}
          <section>
            <SubHeading>Failure to Meet Clauses</SubHeading>

            <p className="mb-4">
              Candidates who fail to complete required clauses will not be eligible for refunds.
            </p>

            <p className="mb-4">
              A non-changeable extension of up to 2 months may be granted.
            </p>

            <p>
              Failure even after extension leads to ineligibility for refund and placement assistance.
            </p>
          </section>

          <section>
            <SubHeading>Extension of Clause Completion</SubHeading>

            <p className="mb-4">
              In cases of incomplete clauses, the team may grant a non-changeable extension of up to 2 additional months, post the screening day, for candidates to fulfill the pending requirements. Upon completion of the pending requirements,
               candidates will proceed to the 4-month dedicated placement assistance period.
            </p>

            <p className="mb-4">
              If candidates still do not secure a job after the 4-month dedicated placement assistance, they may access the 8-month self-paced assistance. However, if they fail to complete the pending clauses
               within the assigned time (up to 2 additional months), 
               they will not be eligible for further placement assistance.
            </p>
          </section>

          <hr className="border-black/10" />

          {/* General Terms */}
          <section>
            <SubHeading>General Terms for Refund and Placement Policies</SubHeading>

            <ul className="space-y-3 pl-1">
              {[
                "Refund requests must be submitted via refund@interviewcall.club.",
                "Refunds are processed only if all criteria are met.",
                "Refund processing time: 45–60 business days.",
                "Placement support includes resume building, interview preparation, and networking.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className="border-black/10" />

          {/* Data & Communication */}
          <section>
            <SubHeading>Data & Communication</SubHeading>

            <p className="mb-4">
              By registering, you authorize InterviewCall to contact you via email, phone, or SMS for up to 365 days.
            </p>

            <p>
              Personal data collected includes name, phone number, email, DOB, and gender.
            </p>
          </section>

          {/* Footer */}
          <p className="text-sm text-black/40 border-t border-black/10 pt-8 mb-10">
            © InterviewCall / Lancers Academy. All rights reserved.
          </p>

        </div>
      </div>

      <div className="w-full md:pt-36 mt-16 flex justify-center ">
        <div className="w-full md:w-8/10">
          <Footer />
        </div>
      </div>
    </div>
  );
}

// components/SubHeading.tsx

type SubHeadingProps = {
  children: React.ReactNode;
};

function SubHeading({ children }: SubHeadingProps) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
      {children}
    </h2>
  );
}