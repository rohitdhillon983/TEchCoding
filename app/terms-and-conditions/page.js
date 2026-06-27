import Contact from '@/Components/pages/Contact'
import Image from 'next/image';
import React from 'react'
import ContactImage from '@/public/Images/contact.png'
import icon1 from '@/public/Images/icon-1.png'
import {FaAngleDoubleRight} from 'react-icons/fa';

export const metadata = {
  title: "Terms and Conditions | TechCoding",
  description: "Learn about TechCoding's terms and conditions and how we protect your personal information.",
  openGraph: {
    title: "Terms and Conditions | TechCoding",
    description: "Learn about TechCoding's terms and conditions and how we protect your personal information.",
    url: "https://techcoding.in/terms-and-conditions",
    siteName: "TechCoding",
    images: [
      {
        url: "/images/og-terms.png",
        width: 1200,
        height: 630,
        alt: "Terms and Conditions | TechCoding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | TechCoding",
    description: "Learn about TechCoding's terms and conditions and how we protect your personal information.",
    images: ["/images/og-terms.png"],
  },
};

const Page = () => {
  return (
    <div>
        <section className='relative min-h-[80vh] overflow-hidden border w-full flex justify-center bg-[#171616e3]'>
            <Image src={icon1} alt="Terms and Conditions" className="absolute left-0 z-0" />
            <Image src={ContactImage} alt="Terms and Conditions" className="w-full max-h-[100%] -z-10 scaleAnimate" />
                    {/* <Image src={icon2} alt="Terms and Conditions" className="absolute right-0 bottom-0 z-10" /> */}
        
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-center">
                <h1 className="text-7xl font-bold border-b-4 border-[#b91202] mx-auto">Terms & Conditions</h1>
                <p className="text-2xl mt-2 flex items-center gap-2">Home <FaAngleDoubleRight className='text-[#b91202]'/> Terms and Conditions</p>
            </div>
        </section>
        <section className='w-full max-w-[1200px] mx-auto px-4 py-10'>
            <h3 className='text-3xl font-bold mt-8'>1. Acceptance of Terms</h3>

<p>
Welcome to <strong>TechCoding</strong>. These Terms and Conditions ("Terms") govern your access to and use of our website, products, and professional software development services. By accessing our website at https://techcoding.in, requesting a quotation, communicating with our team, or purchasing any of our services, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms.
</p>

<p>
If you do not agree with any provision of these Terms, you should immediately discontinue using our website and refrain from purchasing or requesting any of our services.
</p>

<p>
These Terms apply to every visitor, customer, business owner, organization, and any other person accessing our website or engaging with TechCoding. Your continued use of our website constitutes your acceptance of the latest version of these Terms.
</p>

<p>
TechCoding reserves the right to modify, update, or replace these Terms at any time without prior notice. Any revised Terms become effective immediately upon publication on this website. It is your responsibility to review these Terms periodically.
</p>

<p>
By continuing to use our services after changes have been published, you agree to the revised Terms and Conditions.
</p>


<h3 className='text-3xl font-bold mt-8'>2. About TechCoding</h3>

<p>
TechCoding is a professional software development company providing modern digital solutions for startups, businesses, entrepreneurs, and enterprises across India and worldwide.
</p>

<p>
Our expertise includes designing, developing, deploying, and maintaining secure, scalable, and performance-oriented digital products using the latest technologies and industry best practices.
</p>

<p>
Our primary services include, but are not limited to:
</p>

<p>
• Custom Website Development
</p>

<p>
• Business Website Development
</p>

<p>
• E-commerce Website Development
</p>

<p>
• React.js Development
</p>

<p>
• Next.js Development
</p>

<p>
• Node.js Development
</p>

<p>
• Full Stack Development
</p>

<p>
• Mobile App Development
</p>

<p>
• UI/UX Design
</p>

<p>
• API Development & Integration
</p>

<p>
• Website Maintenance
</p>

<p>
• Performance Optimization
</p>

<p>
• SEO-Friendly Development
</p>

<p>
• Technical Consulting
</p>

<p>
Every project undertaken by TechCoding follows a structured development process that includes planning, requirement analysis, UI/UX design, development, testing, deployment, and post-launch support depending on the agreed service package.
</p>


<h3 className='text-3xl font-bold mt-8'>3. Eligibility</h3>

<p>
To use our services, you must be at least eighteen (18) years of age or possess the legal authority to enter into a binding contract under the applicable laws of your jurisdiction.
</p>

<p>
By requesting our services, you represent and warrant that:
</p>

<p>
• All information provided by you is accurate and complete.
</p>

<p>
• You possess legal authority to enter into contracts.
</p>

<p>
• You will use our services only for lawful purposes.
</p>

<p>
• You will not misuse our website or services.
</p>

<p>
If we determine that false information has been provided, TechCoding reserves the right to refuse service without prior notice.
</p>
<h3 className='text-3xl font-bold mt-8'>4. Scope of Services</h3>

<p>
TechCoding provides professional software development and digital solutions tailored to the requirements of businesses, startups, entrepreneurs, and organizations. Our services are offered based on mutually agreed project requirements, timelines, technical feasibility, and commercial terms.
</p>

<p>
The scope of each project shall be defined through discussions, proposals, quotations, emails, project documentation, or any other written communication agreed upon by both parties before the commencement of development.
</p>

<p>
Our services may include, but are not limited to:
</p>

<p>• Custom Business Website Development</p>

<p>• Corporate Website Development</p>

<p>• E-commerce Website Development</p>

<p>• Landing Page Design & Development</p>

<p>• Portfolio Website Development</p>

<p>• React.js Development</p>

<p>• Next.js Development</p>

<p>• Node.js Development</p>

<p>• Full Stack Web Development</p>

<p>• Mobile Application Development</p>

<p>• REST API Development & Integration</p>

<p>• Database Design & Development</p>

<p>• UI/UX Design Services</p>

<p>• Website Redesign & Optimization</p>

<p>• Website Maintenance & Support</p>

<p>• Website Performance Optimization</p>

<p>• SEO-Friendly Development</p>

<p>• Technical Consultation</p>

<p>
Any service not explicitly mentioned in the approved project proposal or quotation shall be considered outside the agreed scope of work and may require additional time, resources, and charges.
</p>

<p>
TechCoding reserves the right to refuse any project that violates applicable laws, promotes illegal activities, infringes intellectual property rights, or conflicts with our ethical business standards.
</p>



<h3 className='text-3xl font-bold mt-8'>5. Project Quotations and Estimates</h3>

<p>
Every quotation or cost estimate provided by TechCoding is prepared based on the information available at the time of discussion. Quotations remain valid only for the period specified in the quotation document unless otherwise stated.
</p>

<p>
The quotation includes only those deliverables specifically mentioned in the proposal. Any additional feature, functionality, design modification, or integration requested after project approval may require a revised quotation.
</p>

<p>
Estimated timelines and pricing are based on assumptions including:
</p>

<p>• Timely client communication</p>

<p>• Timely content submission</p>

<p>• Availability of required assets</p>

<p>• Availability of third-party services</p>

<p>• Stable technical requirements</p>

<p>
If project requirements change significantly after work has commenced, TechCoding reserves the right to revise the project cost, timeline, and delivery schedule.
</p>

<p>
Unless specifically mentioned in writing, quotations do not include:
</p>

<p>• Domain registration fees</p>

<p>• Web hosting charges</p>

<p>• SSL certificates</p>

<p>• Premium plugins</p>

<p>• Paid APIs</p>

<p>• Stock images</p>

<p>• Premium fonts</p>

<p>• Third-party software licenses</p>

<p>• SMS gateway charges</p>

<p>• Email service subscriptions</p>

<p>• Cloud hosting costs</p>

<p>
Clients are responsible for purchasing or renewing any third-party service required for the successful operation of their website or application unless explicitly agreed otherwise.
</p>



<h3 className='text-3xl font-bold mt-8'>6. Project Commencement</h3>

<p>
A project shall be considered officially started only after all of the following conditions have been fulfilled:
</p>

<p>• The project requirements have been finalized.</p>

<p>• The quotation has been accepted.</p>

<p>• Required advance payment has been received.</p>

<p>• Necessary credentials and project assets have been shared.</p>

<p>• Both parties have agreed on the expected deliverables.</p>

<p>
Until these conditions are satisfied, TechCoding shall not be obligated to reserve development resources or guarantee project delivery dates.
</p>

<p>
If the client delays project initiation for more than thirty (30) days after quotation approval, TechCoding reserves the right to revise pricing and project timelines based on current business conditions.
</p>

<p>
Any verbal discussion shall not be considered a binding agreement unless confirmed in writing through email, invoice, quotation, or official communication.
</p>



<h3 className='text-3xl font-bold mt-8'>7. Communication</h3>

<p>
Effective communication is essential for successful project execution. Clients agree to maintain timely communication throughout the duration of the project.
</p>

<p>
Official communication may take place through:
</p>

<p>• Email</p>

<p>• WhatsApp</p>

<p>• Phone Calls</p>

<p>• Video Meetings</p>

<p>• Project Management Tools</p>

<p>
Instructions received through official communication channels may be treated as valid project requests.
</p>

<p>
Clients are encouraged to review completed work promptly and provide consolidated feedback wherever possible to avoid unnecessary delays.
</p>

<p>
TechCoding shall not be responsible for project delays caused by prolonged client inactivity, delayed approvals, or failure to provide requested information.
</p>

<p>
Where multiple stakeholders are involved, the client should appoint a single authorized representative responsible for providing approvals and communicating project decisions.
</p>
<h3 className='text-3xl font-bold mt-8'>8. Payment Terms</h3>

<p>
The Client agrees to pay all fees for the Services as outlined in the approved quotation, proposal, invoice, or any written agreement between the Client and TechCoding. All payments shall be made according to the agreed payment schedule and within the due dates mentioned in the invoice.
</p>

<p>
Depending on the nature and size of the project, TechCoding may require an advance payment before commencing work. The remaining balance may be collected in milestones or upon project completion, as mutually agreed.
</p>

<p>
Unless otherwise agreed in writing, a project will only begin after the required advance payment has been successfully received.
</p>

<p>
Payments may be accepted through bank transfer, UPI, online payment gateways, or any other officially approved payment method provided by TechCoding.
</p>

<p>
The Client agrees that failure to make payments according to the agreed schedule may result in delays, suspension of work, or termination of the project.
</p>

<p>
Any payment processing charges, international transaction fees, or currency conversion charges imposed by financial institutions shall be the responsibility of the Client unless otherwise agreed.
</p>

<p>
TechCoding reserves the right to revise pricing for future services without prior notice. However, any revision shall not affect an already approved quotation unless the project scope changes.
</p>



<h3 className='text-3xl font-bold mt-8'>9. Invoices and Billing</h3>

<p>
Invoices shall be generated electronically and shared through the Client's registered email address or any mutually agreed communication channel.
</p>

<p>
The Client agrees to review every invoice promptly and notify TechCoding of any discrepancies within seven (7) business days of receiving the invoice.
</p>

<p>
Failure to raise any billing concern within the specified period shall be considered acceptance of the invoice.
</p>

<p>
Invoices may include applicable taxes, government levies, transaction fees, or other statutory charges wherever required under applicable laws.
</p>

<p>
Clients are responsible for maintaining accurate billing information throughout the duration of the project.
</p>

<p>
TechCoding reserves the right to issue revised invoices if additional work is requested beyond the originally approved project scope.
</p>



<h3 className='text-3xl font-bold mt-8'>10. Late Payments</h3>

<p>
Timely payment is essential for maintaining project schedules and ensuring uninterrupted service delivery.
</p>

<p>
If the Client fails to make payment by the due date, TechCoding may suspend development activities until the outstanding balance has been cleared.
</p>

<p>
Project deadlines shall automatically be extended by the duration of any payment delay.
</p>

<p>
Repeated payment delays may result in permanent project suspension or cancellation without any obligation on TechCoding to continue work.
</p>

<p>
TechCoding reserves the right to withhold project files, source code, deployment credentials, documentation, design assets, and final deliverables until all outstanding payments have been received in full.
</p>

<p>
If legal recovery becomes necessary, the Client shall be responsible for all reasonable recovery expenses, legal fees, and associated costs permitted by applicable law.
</p>



<h3 className='text-3xl font-bold mt-8'>11. Taxes</h3>

<p>
All prices quoted by TechCoding are exclusive of applicable taxes unless explicitly stated otherwise.
</p>

<p>
Where applicable, Goods and Services Tax (GST) or any other statutory taxes required under Indian law shall be charged separately on invoices.
</p>

<p>
Clients located outside India are responsible for complying with their local taxation laws, import regulations, withholding taxes, or any other financial obligations applicable within their jurisdiction.
</p>

<p>
TechCoding shall not be responsible for any tax liabilities arising from the Client's country or region.
</p>



<h3 className='text-3xl font-bold mt-8'>12. Additional Work and Change Requests</h3>

<p>
Any request made by the Client that falls outside the originally approved project scope shall be treated as additional work.
</p>

<p>
Examples of additional work include but are not limited to:
</p>

<p>• New pages</p>

<p>• New features</p>

<p>• Dashboard modifications</p>

<p>• API integrations</p>

<p>• Payment gateway additions</p>

<p>• Third-party software integration</p>

<p>• Mobile responsiveness changes beyond the approved design</p>

<p>• Database restructuring</p>

<p>• UI redesign after approval</p>

<p>• Additional testing requirements</p>

<p>• SEO implementation beyond agreed scope</p>

<p>
Before starting any additional work, TechCoding will provide an updated quotation, revised timeline, or separate invoice for approval.
</p>

<p>
No additional work shall commence until the Client has approved the revised quotation in writing.
</p>

<p>
Any delay caused by repeated change requests may extend the final delivery schedule.
</p>

<p>
TechCoding reserves the right to refuse change requests that may compromise project stability, security, maintainability, or technical feasibility.
</p>

<p>
Minor text corrections or bug fixes that fall within the original scope may be completed without additional charges at TechCoding's sole discretion.
</p>
<h3 className='text-3xl font-bold mt-8'>13. Project Timeline</h3>

<p>
TechCoding is committed to delivering projects within the estimated timeline mentioned in the approved quotation, proposal, or project agreement. All delivery schedules are estimates based on the project requirements available at the time of approval and may vary depending on the complexity of the project.
</p>

<p>
Project timelines are calculated assuming that the Client provides all required information, approvals, content, media files, credentials, and feedback within the agreed timeframe.
</p>

<p>
While TechCoding makes every reasonable effort to complete projects on schedule, certain circumstances beyond our control may affect delivery timelines, including but not limited to technical challenges, third-party service outages, force majeure events, changes in project scope, delayed approvals, or incomplete information provided by the Client.
</p>

<p>
The estimated delivery date is not a legal guarantee but an expected completion target based on normal development conditions.
</p>

<p>
Any significant modifications requested after development has commenced may require additional development time and may result in a revised delivery schedule.
</p>

<p>
TechCoding shall not be liable for any financial loss, business interruption, or damages resulting from delays caused by circumstances outside our reasonable control.
</p>



<h3 className='text-3xl font-bold mt-8'>14. Client Delays</h3>

<p>
Successful completion of any software development project requires timely cooperation from the Client. The Client agrees to provide all necessary materials, approvals, credentials, and communication without unnecessary delay.
</p>

<p>
Client delays include but are not limited to:
</p>

<p>• Delayed content submission.</p>

<p>• Delayed logo or branding approval.</p>

<p>• Delayed design approval.</p>

<p>• Failure to provide hosting or domain access.</p>

<p>• Delayed API credentials.</p>

<p>• Delayed payment.</p>

<p>• Unavailability for project discussions.</p>

<p>• Frequent changes in requirements.</p>

<p>
If the Client remains inactive for more than fifteen (15) consecutive business days without prior notice, the project may be placed on temporary hold.
</p>

<p>
If inactivity exceeds sixty (60) days, TechCoding reserves the right to archive project files, release allocated resources, revise pricing, or terminate the project without any obligation to continue development under the original quotation.
</p>

<p>
Any revised schedule resulting from Client delays shall be communicated through email or other official communication channels.
</p>



<h3 className='text-3xl font-bold mt-8'>15. Project Delivery</h3>

<p>
A project shall be considered ready for delivery once all agreed deliverables under the approved scope have been completed.
</p>

<p>
Depending on the project type, delivery may include:
</p>

<p>• Source Code</p>

<p>• Website Files</p>

<p>• Mobile Application Files</p>

<p>• Design Assets</p>

<p>• Database Files</p>

<p>• API Documentation</p>

<p>• Deployment Instructions</p>

<p>• User Manuals</p>

<p>• Administrator Credentials</p>

<p>• Technical Documentation</p>

<p>
Delivery may occur through GitHub repositories, secure cloud storage, email, project management platforms, deployment on the Client's hosting server, or any mutually agreed delivery method.
</p>

<p>
The Client is responsible for reviewing all delivered materials within the agreed review period.
</p>

<p>
Failure to review the delivered work within the specified review period shall constitute deemed acceptance of the deliverables.
</p>



<h3 className='text-3xl font-bold mt-8'>16. Testing and Quality Assurance</h3>

<p>
Before delivery, TechCoding performs reasonable quality assurance procedures to verify that the developed solution functions according to the approved project requirements.
</p>

<p>
Testing may include:
</p>

<p>• Functional Testing</p>

<p>• User Interface Testing</p>

<p>• Responsive Design Testing</p>

<p>• Browser Compatibility Testing</p>

<p>• Performance Testing</p>

<p>• Security Review</p>

<p>• API Testing</p>

<p>• Database Validation</p>

<p>
Despite comprehensive testing, software development involves numerous external dependencies. Therefore, minor issues may occasionally arise after deployment due to server environments, browser updates, operating system changes, third-party integrations, or user-specific configurations.
</p>

<p>
Where applicable, TechCoding will make reasonable efforts to resolve verified defects that are directly related to the original project scope during the agreed support period.
</p>

<p>
Bug reports should include sufficient information such as screenshots, videos, browser details, and steps required to reproduce the issue.
</p>



<h3 className='text-3xl font-bold mt-8'>17. Acceptance of Deliverables</h3>

<p>
The Client agrees to inspect all deliverables promptly after completion.
</p>

<p>
If no written objections are received within the agreed review period, the project shall automatically be considered accepted.
</p>

<p>
Acceptance confirms that the deliverables substantially comply with the approved project requirements.
</p>

<p>
Requests for new functionality after acceptance shall be treated as new development work and may require additional quotations and timelines.
</p>

<p>
Acceptance does not waive the Client's rights regarding any defects covered under the agreed support or warranty period.
</p>



<h3 className='text-3xl font-bold mt-8'>18. Deployment and Go-Live</h3>

<p>
Upon project completion, TechCoding may assist with deployment of the website or application to the Client's production environment where included within the agreed scope of work.
</p>

<p>
Deployment assistance may include:
</p>

<p>• Hosting Configuration</p>

<p>• Domain Connection</p>

<p>• SSL Installation</p>

<p>• DNS Configuration</p>

<p>• Database Migration</p>

<p>• Production Build Deployment</p>

<p>• Email Configuration</p>

<p>• Basic Performance Optimization</p>

<p>
Once deployment has been completed and approved by the Client, responsibility for ongoing hosting infrastructure, server maintenance, backups, uptime monitoring, security updates, and third-party hosting services shall remain with the Client unless covered under a separate maintenance agreement.
</p>

<p>
TechCoding shall not be responsible for downtime, data loss, or service interruptions caused by hosting providers, domain registrars, internet service providers, or third-party infrastructure after successful deployment.
</p>

<h3 className='text-3xl font-bold mt-8'>19. Intellectual Property Rights</h3>

<p>
Unless otherwise agreed in writing, all source code, design concepts, graphics, layouts, wireframes, documentation, development methodologies, reusable software components, frameworks, templates, scripts, utilities, internal tools, automation workflows, and other proprietary assets created or owned by TechCoding before or during the project shall remain the exclusive intellectual property of TechCoding.
</p>

<p>
The Client shall receive ownership only of the final deliverables specifically agreed upon in the approved quotation after all outstanding payments have been received in full.
</p>

<p>
Nothing contained within these Terms shall be interpreted as transferring ownership of TechCoding's proprietary development tools, reusable components, internal frameworks, coding standards, automation scripts, libraries, or methodologies.
</p>

<p>
TechCoding reserves all rights not expressly granted under these Terms.
</p>



<h3 className='text-3xl font-bold mt-8'>20. Source Code Ownership</h3>

<p>
Upon successful completion of the project and receipt of full payment, ownership of the final project source code shall transfer to the Client unless otherwise stated in the project agreement.
</p>

<p>
Ownership transfer applies only to the custom-developed code specifically created for the Client's project.
</p>

<p>
The following items remain the exclusive property of their respective owners and are not transferred:
</p>

<p>• Open Source Libraries</p>

<p>• Third-Party Plugins</p>

<p>• Commercial Software Licenses</p>

<p>• Paid APIs</p>

<p>• Proprietary Frameworks</p>

<p>• Development Utilities</p>

<p>• Internal Automation Scripts</p>

<p>
If any commercial software licenses are required for continued operation of the project, the Client shall be responsible for purchasing and maintaining those licenses unless explicitly included within the project quotation.
</p>



<h3 className='text-3xl font-bold mt-8'>21. Open Source Software</h3>

<p>
TechCoding may incorporate open-source software, publicly available libraries, frameworks, packages, or development tools into Client projects where technically appropriate.
</p>

<p>
Such components remain subject to their respective open-source licenses, including but not limited to MIT License, Apache License, BSD License, GPL License, LGPL License, or other applicable licenses.
</p>

<p>
The Client acknowledges that TechCoding does not claim ownership over open-source software incorporated into any project.
</p>

<p>
The Client agrees to comply with the licensing terms applicable to any third-party open-source software used within the project.
</p>



<h3 className='text-3xl font-bold mt-8'>22. Third-Party Software and Licenses</h3>

<p>
Projects may require the use of third-party services, APIs, plugins, SDKs, hosting platforms, payment gateways, analytics services, cloud infrastructure, email providers, or external software products.
</p>

<p>
Examples include:
</p>

<p>• Google Services</p>

<p>• Microsoft Services</p>

<p>• Stripe</p>

<p>• Razorpay</p>

<p>• Firebase</p>

<p>• Vercel</p>

<p>• Hostinger</p>

<p>• Cloudflare</p>

<p>• GitHub</p>

<p>• MongoDB Atlas</p>

<p>
These services operate under their own Terms of Service and Privacy Policies.
</p>

<p>
TechCoding shall not be responsible for service interruptions, pricing changes, policy updates, account suspensions, API modifications, or discontinuation of third-party services.
</p>



<h3 className='text-3xl font-bold mt-8'>23. Portfolio Rights</h3>

<p>
Unless otherwise agreed in writing, TechCoding reserves the right to display completed projects within its portfolio, website, presentations, social media platforms, marketing materials, and promotional content.
</p>

<p>
Portfolio usage may include screenshots, project descriptions, technology stacks, development summaries, and publicly accessible website links.
</p>

<p>
Confidential business information, private databases, proprietary algorithms, customer information, internal dashboards, financial records, and other confidential material shall never be publicly disclosed without the Client's written permission.
</p>

<p>
If the Client requires complete confidentiality and requests that the project not be displayed publicly, such request must be communicated in writing before project completion.
</p>



<h3 className='text-3xl font-bold mt-8'>24. Confidential Information</h3>

<p>
Both TechCoding and the Client agree to treat confidential information responsibly throughout the duration of the project.
</p>

<p>
Confidential information may include:
</p>

<p>• Business Plans</p>

<p>• Customer Lists</p>

<p>• Financial Information</p>

<p>• Marketing Strategies</p>

<p>• API Keys</p>

<p>• Passwords</p>

<p>• Database Credentials</p>

<p>• Source Code</p>

<p>• Internal Documentation</p>

<p>• Product Roadmaps</p>

<p>
Neither party shall disclose confidential information to any unauthorized third party unless required by law or expressly permitted in writing.
</p>

<p>
Reasonable security measures shall be implemented to protect confidential information against unauthorized access, misuse, or disclosure.
</p>



<h3 className='text-3xl font-bold mt-8'>25. Non-Disclosure Obligations</h3>

<p>
TechCoding respects the confidentiality of all client projects and agrees not to intentionally disclose confidential project information obtained during the course of providing services.
</p>

<p>
Likewise, the Client agrees not to disclose any confidential technical documentation, proprietary methodologies, internal development processes, pricing strategies, or business information belonging to TechCoding without prior written consent.
</p>

<p>
These confidentiality obligations shall continue even after the completion or termination of the project unless otherwise required by applicable law.
</p>



<h3 className='text-3xl font-bold mt-8'>26. Data Security</h3>

<p>
TechCoding follows commercially reasonable administrative, technical, and organizational safeguards to protect project information, development assets, credentials, and client data during active project engagement.
</p>

<p>
While every reasonable effort is made to maintain security, no online system, server, software application, cloud service, or internet transmission can be guaranteed to be completely secure.
</p>

<p>
Clients are encouraged to regularly change passwords, enable multi-factor authentication where available, maintain secure backups, and follow industry-standard cybersecurity practices after project delivery.
</p>

<p>
TechCoding shall not be responsible for security incidents resulting from compromised client credentials, weak passwords, unauthorized third-party access, hosting provider vulnerabilities, or actions beyond our reasonable control.
</p>

<h3 className='text-3xl font-bold mt-8'>27. Acceptable Use Policy</h3>

<p>
The Client agrees to use TechCoding's website, software, and services only for lawful and legitimate purposes. Any activity that violates applicable laws, infringes intellectual property rights, compromises system security, or causes harm to TechCoding or any third party is strictly prohibited.
</p>

<p>
The Client shall not use any website, application, or software developed by TechCoding for activities involving fraud, phishing, spam distribution, malware, ransomware, illegal gambling, adult content prohibited by applicable law, money laundering, cryptocurrency scams, identity theft, unauthorized data collection, or any other unlawful purpose.
</p>

<p>
The Client further agrees not to attempt unauthorized access to TechCoding's servers, repositories, databases, development infrastructure, email systems, APIs, or any other digital assets owned or managed by TechCoding.
</p>

<p>
TechCoding reserves the right to immediately suspend or terminate any project or service if it reasonably believes that the Client is using the delivered software or website for unlawful, unethical, or malicious purposes.
</p>



<h3 className='text-3xl font-bold mt-8'>28. Warranties and Disclaimers</h3>

<p>
TechCoding warrants that all custom software development services will be performed with reasonable skill, care, and professional standards generally accepted within the software development industry.
</p>

<p>
Except as expressly stated in these Terms, all services are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied.
</p>

<p>
TechCoding does not warrant that:
</p>

<p>• The website or application will operate without interruption.</p>

<p>• Services will be completely free from bugs or errors.</p>

<p>• Third-party services will remain continuously available.</p>

<p>• Search engines will rank the website in any particular position.</p>

<p>• Business revenue or sales will increase after project completion.</p>

<p>• The delivered solution will be compatible with every future browser, operating system, or device update.</p>

<p>
Any performance estimates, SEO recommendations, or technical suggestions provided by TechCoding are based on industry experience and should not be interpreted as guaranteed results.
</p>



<h3 className='text-3xl font-bold mt-8'>29. Limitation of Liability</h3>

<p>
To the maximum extent permitted by applicable law, TechCoding, its owners, employees, contractors, affiliates, and partners shall not be liable for any indirect, incidental, consequential, punitive, special, or exemplary damages arising out of or relating to the use of our services.
</p>

<p>
This limitation includes, but is not limited to:
</p>

<p>• Loss of revenue</p>

<p>• Loss of profits</p>

<p>• Loss of business opportunities</p>

<p>• Loss of customers</p>

<p>• Data loss</p>

<p>• Website downtime</p>

<p>• Server failures</p>

<p>• Third-party API failures</p>

<p>• Security breaches caused by third parties</p>

<p>• Delays caused by hosting providers</p>

<p>• Internet connectivity issues</p>

<p>• Payment gateway failures</p>

<p>
In any event, TechCoding's total liability arising from any project or service shall not exceed the total amount actually paid by the Client for the specific project giving rise to the claim.
</p>



<h3 className='text-3xl font-bold mt-8'>30. Indemnification</h3>

<p>
The Client agrees to defend, indemnify, and hold harmless TechCoding, its directors, employees, contractors, affiliates, and representatives from and against any claims, liabilities, losses, damages, legal proceedings, penalties, expenses, or costs arising from:
</p>

<p>• The Client's misuse of our services.</p>

<p>• Violation of these Terms.</p>

<p>• Infringement of intellectual property rights.</p>

<p>• Illegal content supplied by the Client.</p>

<p>• Violation of any applicable law.</p>

<p>• Unauthorized use of third-party software.</p>

<p>
This indemnification obligation shall survive the completion or termination of the project.
</p>



<h3 className='text-3xl font-bold mt-8'>31. Suspension and Termination</h3>

<p>
TechCoding reserves the right to suspend or terminate any project, service, or Client account without prior notice if the Client:
</p>

<p>• Violates these Terms.</p>

<p>• Fails to make required payments.</p>

<p>• Provides false information.</p>

<p>• Uses our services for unlawful purposes.</p>

<p>• Abuses or threatens our employees.</p>

<p>• Requests work that violates applicable laws.</p>

<p>
Upon termination, all outstanding payments shall immediately become due, and TechCoding may discontinue access to project resources until payment obligations have been fulfilled.
</p>



<h3 className='text-3xl font-bold mt-8'>32. Force Majeure</h3>

<p>
TechCoding shall not be liable for any delay or failure in performing its obligations where such delay or failure results from events beyond our reasonable control.
</p>

<p>
Force Majeure events include, but are not limited to:
</p>

<p>• Natural disasters</p>

<p>• Floods</p>

<p>• Earthquakes</p>

<p>• Fire</p>

<p>• War</p>

<p>• Terrorist activities</p>

<p>• Government restrictions</p>

<p>• Internet outages</p>

<p>• Cyber attacks</p>

<p>• Pandemic or epidemic situations</p>

<p>• Labor strikes</p>

<p>• Cloud service failures</p>

<p>
Project timelines shall automatically be extended for the duration of any Force Majeure event.
</p>



<h3 className='text-3xl font-bold mt-8'>33. Governing Law and Jurisdiction</h3>

<p>
These Terms and Conditions shall be governed by and interpreted in accordance with the laws of the Republic of India.
</p>

<p>
Any dispute arising from or relating to these Terms, our website, or any services provided by TechCoding shall first be attempted to be resolved through good-faith negotiations between the parties.
</p>

<p>
If a dispute cannot be resolved amicably, it shall be subject to the exclusive jurisdiction of the competent courts located in India.
</p>



<h3 className='text-3xl font-bold mt-8'>34. Severability</h3>

<p>
If any provision of these Terms is found by a court of competent jurisdiction to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.
</p>



<h3 className='text-3xl font-bold mt-8'>35. Entire Agreement</h3>

<p>
These Terms and Conditions constitute the complete agreement between TechCoding and the Client regarding the use of our website and services and supersede all prior discussions, proposals, emails, or understandings relating to the same subject matter.
</p>



<h3 className='text-3xl font-bold mt-8'>36. Contact Information</h3>

<p>
If you have any questions regarding these Terms and Conditions, you may contact us using the details below:
</p>

<p>
<strong>TechCoding</strong><br/>
Website: https://techcoding.in<br/>
Email: contact@techcoding.in<br/>
Business Hours: Monday – Saturday, 10:00 AM – 7:00 PM (IST)
</p>



<h3 className='text-3xl font-bold mt-8'>37. Last Updated</h3>

<p>
These Terms and Conditions were last updated on June 27, 2026. TechCoding reserves the right to modify, update, or replace these Terms at any time. Updated versions will always be published on this page, and continued use of our website or services after such updates constitutes acceptance of the revised Terms.
</p>

        </section>
    </div>
  )
}
    
export default Page