import Contact from '@/Components/pages/Contact'
import Image from 'next/image';
import React from 'react'
import ContactImage from '@/public/Images/contact.png'
import icon1 from '@/public/Images/icon-1.png'
import {FaAngleDoubleRight} from 'react-icons/fa';

export const metadata = {
  title: "Privacy Policy | TechCoding",
  description: "Learn about TechCoding's privacy policy and how we protect your personal information.",
  openGraph: {
    title: "Privacy Policy | TechCoding",
    description: "Learn about TechCoding's privacy policy and how we protect your personal information.",
    url: "https://techcoding.in/privacy-policy",
    siteName: "TechCoding",
    images: [
      {
        url: "/images/og-privacy.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy | TechCoding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | TechCoding",
    description: "Learn about TechCoding's privacy policy and how we protect your personal information.",
    images: ["/images/og-privacy.png"],
  },
};

const Page = () => {
  return (
    <div>
        <section className='relative min-h-[80vh] overflow-hidden border w-full flex justify-center bg-[#171616e3]'>
            <Image src={icon1} alt="Privacy Policy" className="absolute left-0 z-0" />
            <Image src={ContactImage} alt="Privacy Policy" className="w-full max-h-[100%] -z-10 scaleAnimate" />
                    {/* <Image src={icon2} alt="Privacy Policy" className="absolute right-0 bottom-0 z-10" /> */}
        
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-center">
                <h1 className="text-7xl font-bold border-b-4 border-[#b91202] w-fit mx-auto">Privacy Policy</h1>
                <p className="text-2xl mt-2 flex items-center gap-2">Home <FaAngleDoubleRight className='text-[#b91202]'/> Privacy Policy</p>
            </div>
        </section>
        <section className='w-full max-w-[1200px] mx-auto px-4 py-10'>
            <h3 className='text-3xl font-bold mt-10'>Privacy Policy</h3>
            <p>We value the trust you place in us. That's why we insist upon the highest standards for secure transactions and customer information privacy. Please read the following statement to learn about our information gathering and dissemination practices.</p>
            <p>Note: Our privacy policy is subject to change at any time without notice. To make sure you are aware of any changes, please review this policy periodically.

                By visiting this Website you agree to be bound by the terms and conditions of this Privacy Policy. If you do not agree please do not use or access our Website.

                By mere use of the Website, you expressly consent to our use and disclosure of your personal information in accordance with this Privacy Policy. This Privacy Policy is incorporated into and subject to the Terms of Use.</p>

            <h3 className='text-3xl font-bold mt-10'>Collection of Personally Identifiable Information and other Information</h3>
            <p>When you use our Website, we collect and store your personal information which is provided by you from time to time. Our primary goal in doing so is to provide you a safe, efficient, smooth and customized experience. This allows us to provide services and features that most likely meet your needs, and to customize our Website to make your experience safer and easier. More importantly, while doing so we collect personal information from you that we consider necessary for achieving this purpose.
           </p>
            <p>In general, you can browse the Website without telling us who you are or revealing any personal information about yourself. Once you give us your personal information, you are not anonymous to us. Where possible, we indicate which fields are required and which fields are optional. You always have the option to not provide information by choosing not to use a particular service or feature on the Website. We may automatically track certain information about you based upon your behaviour on our Website. We use this information to do internal research on our users' demographics, interests, and behaviour to better understand, protect and serve our users. This information is compiled and analysed on an aggregated basis. This information may include the URL that you just came from (whether this URL is on our Website or not), which URL you next go to (whether this URL is on our Website or not), your computer browser information, and your IP address.</p>
            <p>We use data collection devices such as "cookies" on certain pages of the Website to help analyse our web page flow, measure promotional effectiveness, and promote trust and safety. "Cookies" are small files placed on your hard drive that assist us in providing our services. We offer certain features that are only available through the use of a "cookie".</p>
            <p>We also use cookies to allow you to enter your password less frequently during a session. Cookies can also help us provide information that is targeted to your interests. Most cookies are "session cookies," meaning that they are automatically deleted from your hard drive at the end of a session. You are always free to decline our cookies if your browser permits, although in that case you may not be able to use certain features on the Website and you may be required to re-enter your password more frequently during a session.</p>
            <p>Additionally, you may encounter "cookies" or other similar devices on certain pages of the Website that are placed by third parties. We do not control the use of cookies by third parties.</p>
            <p>If you choose to buy on the Website, we collect information about your buying behaviour.</p>
            <p>If you transact with us, we collect some additional information, such as a billing address, a credit / debit card number and a credit / debit card expiration date and/ or other payment instrument details and tracking information from cheques or money orders.</p>
            <p>If you choose to post messages on our message boards, chat rooms or other message areas or leave feedback, we will collect that information you provide to us. We retain this information as necessary to resolve disputes, provide customer support and troubleshoot problems as permitted by law.</p>
            <p>If you send us personal correspondence, such as emails or letters, or if other users or third parties send us correspondence about your activities or postings on the Website, we may collect such information into a file specific to you.</p>
            <p>We collect personally identifiable information (email address, name, phone number, credit card / debit card / other payment instrument details, etc.) from you when you set up a free account with us. While you can browse some sections of our Website without being a registered member, certain activities (such as placing an order) do require registration. We do use your contact information to send you offers based on your previous orders and your interests. We may also contact you for after-sale services, to understand how your experience with us was, which would help us to improve ourself.</p>
            <h3 className='text-3xl font-bold mt-10'>Use of Demographic / Profile Data / Your Information</h3>

            <p>We use personal information to provide the services you request. To the extent we use your personal information to market to you, we will provide you the ability to opt-out of such uses. We use your personal information to resolve disputes; troubleshoot problems; help promote a safe service; collect money; measure consumer interest in our products and services; inform you about online and offline offers, products, services, and updates; customize your experience; detect and protect us against error, fraud and other criminal activity; enforce our Terms and Conditions; and as otherwise described to you at the time of collection.
            </p>

            <p>
              In our efforts to continually improve our product and service offerings, we collect and analyze demographic and profile data about our users' activity on our Website.
              We identify and use your IP address to help diagnose problems with our server and to administer our Website. Your IP address is also used to help identify you and to gather broad demographic information.
            </p>

            <p>
              We will occasionally ask you to complete optional online surveys. These surveys may ask you for contact information and demographic information (such as ZIP code, age, or income level). We use this data to tailor your experience on our Website by providing content that we think you may be interested in and displaying content according to your preferences.
            </p>

            <p>Cookies</p>

            <p>
              A "cookie" is a small piece of information stored by a web server on a web browser so it can be later read back from that browser. Cookies help the browser remember information specific to a given user. We place both permanent and temporary cookies on your computer's hard drive. These cookies do not contain any personally identifiable information.
            </p>

            <h3 className='text-3xl font-bold mt-10'>Sharing of Personal Information</h3>

            <p>
              We may share personal information with our corporate entities and affiliates to help detect and prevent identity theft, fraud, and other potentially illegal acts; correlate related or multiple accounts to prevent abuse of our services; and facilitate joint or co-branded services that you request where such services are provided by more than one corporate entity. These entities and affiliates will not use your information for marketing purposes unless you explicitly opt-in.
            </p>

            <p>
              We may disclose personal information if required to do so by law or if we believe such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal processes. We may also disclose personal information to law enforcement authorities, third-party rights owners, or others when necessary to enforce our Terms or Privacy Policy, respond to claims of rights violations, or protect the rights, property, or safety of our users and the general public.
            </p>

            <p>
                We and our affiliates will share / sell some or all of your personal information with another business entity should we (or our assets) plan to merge with, or be acquired by that business entity, or re-organization, amalgamation, restructuring of business. Should such a transaction occur that other business entity (or the new combined entity) will be required to follow this privacy policy with respect to your personal information.
            </p>

            <h3 className='text-3xl font-bold mt-10'>Links to Other Sites</h3>

            <p>
              Our Website may contain links to third-party websites that collect personally identifiable information. We are not responsible for the privacy practices or the content of these external websites.
            </p>

            <h3 className='text-3xl font-bold mt-10'>Security Precautions</h3>

            <p>
              Our Website has strict security measures in place to protect against the loss, misuse, and alteration of the information under our control. Whenever you access or modify your account information, we use a secure server. Once your information is in our possession, we follow strict security practices to safeguard it from unauthorized access.
            </p>

            <h3 className='text-3xl font-bold mt-10'>Choice / Opt-Out</h3>

            <p>
              We provide all users with the opportunity to opt out of receiving non-essential promotional or marketing communications from us or our partners after creating an account.
            </p>

            <p>
              If you wish to remove your contact information from all mailing lists and newsletters, please visit the unsubscribe page.
            </p>

            <h3 className='text-3xl font-bold mt-10'>Your Consent</h3>

            <p>
              By using this Website and/or providing your personal information, you consent to the collection, use, and sharing of your information in accordance with this Privacy Policy.
            </p>

            <p>
              If we make changes to this Privacy Policy, those changes will be posted on this page so that you are always informed about what information we collect, how we use it, and under what circumstances we disclose it.
            </p>

            <p><strong>Grievance Officer</strong></p>

            <p>
              In accordance with the Information Technology Act, 2000 and the applicable rules, the details of the Grievance Officer are provided below:
            </p>

            <p>
            <strong>TechCoding</strong><br />
             Rajiv Chowk,<br />
             Gurugram, Haryana – 122005
            </p>

            <p>
            <strong>Phone:</strong> +91 7678621443<br />
            <strong>Email:</strong> contact@techcoding.in<br />
            <strong>Working Hours:</strong> Monday to Saturday (9:00 AM – 7:00 PM)
            </p>

            <h3>Questions?</h3>

            <p>
            If you have any questions regarding this Privacy Policy or our privacy practices, please feel free to contact us.
            </p>    
        </section>
    </div>
  )
}

export default Page