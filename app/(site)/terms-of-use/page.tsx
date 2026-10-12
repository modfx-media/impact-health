import { CMSRoute } from "@/components/cms/CMSRoute";
import { cmsMetadata } from "@/lib/cms/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/page/PageLayout";

const fallbackMetadata: Metadata = {
  title: "Terms of Use | Impact Health & Wellness in Westerville, OH",
  description:
    "Understand Impact Health & Wellness' Terms of Use. Learn about our commitment to protect your data and respect your privacy while providing expert healthcare.",
  alternates: { canonical: "/terms-of-use/" },
};

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata("/terms-of-use", fallbackMetadata);
}

// Yoast schema graph captured from the live Terms of Use page, preserved as-is.
const schema = [
  {
    "@type": "WebPage",
    "@id": "https://impacthealthoh.com/terms-of-use/",
    url: "https://impacthealthoh.com/terms-of-use/",
    name: "Terms of Use | Impact Health & Wellness in Westerville, OH",
    isPartOf: { "@id": "https://impacthealthoh.com/#website" },
    datePublished: "2024-02-13T20:13:53+00:00",
    dateModified: "2026-05-20T07:59:51+00:00",
    description:
      "Understand Impact Health & Wellness' Terms of Use. Learn about our commitment to protect your data and respect your privacy while providing expert healthcare.",
    breadcrumb: { "@id": "https://impacthealthoh.com/terms-of-use/#breadcrumb" },
    inLanguage: "en-US",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: ["https://impacthealthoh.com/terms-of-use/"],
      },
    ],
  },
  {
    "@type": "BreadcrumbList",
    "@id": "https://impacthealthoh.com/terms-of-use/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://impacthealthoh.com/",
      },
      { "@type": "ListItem", position: 2, name: "Terms of Use" },
    ],
  },
  {
    "@type": "WebSite",
    "@id": "https://impacthealthoh.com/#website",
    url: "https://impacthealthoh.com/",
    name: "Impact Health & Wellness",
    description: "",
    publisher: { "@id": "https://impacthealthoh.com/#organization" },
    alternateName: "Impact Health",
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://impacthealthoh.com/?s={search_term_string}",
        },
        "query-input": {
          "@type": "PropertyValueSpecification",
          valueRequired: true,
          valueName: "search_term_string",
        },
      },
    ],
    inLanguage: "en-US",
  },
  {
    "@type": "Organization",
    "@id": "https://impacthealthoh.com/#organization",
    name: "Impact Health & Wellness",
    alternateName: "Impact Health",
    url: "https://impacthealthoh.com/",
    logo: {
      "@type": "ImageObject",
      inLanguage: "en-US",
      "@id": "https://impacthealthoh.com/#/schema/logo/image/",
      url: "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
      contentUrl:
        "https://impacthealthoh.com/wp-content/uploads/2024/02/impact-logo-horizonal-rgb.png",
      width: 620,
      height: 199,
      caption: "Impact Health & Wellness",
    },
    image: { "@id": "https://impacthealthoh.com/#/schema/logo/image/" },
    sameAs: [
      "https://www.facebook.com/impacthealthandwellness/",
      "https://www.instagram.com/impacthealthandwellness/",
      "https://www.linkedin.com/company/impacthealthandwellness",
    ],
  },
];

async function TermsOfUsePage() {
  return (
    <PageLayout
      title="Terms of Use"
      breadcrumbs={[{ label: "Terms of Use" }]}
      schema={schema}
      showSidebar={false}
    >
      <p key={1}>
        <strong>Last revised December 20, 2023</strong>
      </p>
      <p key={2}>
        Welcome to the website of www.impacthealthoh.com. This Site is owned
        by Impact Health &amp; Wellness, of Westerville, Ohio. Your compliance
        with these Terms of Use / Online Privacy (&ldquo;Terms of
        Use&rdquo;) is a condition to your use of the Site. If you do not
        agree to be bound by the Terms of Use, promptly exit this Site.
      </p>
      <p key={3}>
        Please consult the Online Privacy portion of these Terms of Use for
        information regarding our practices with respect to collection, use
        and sharing of personal information through this Site. Please consult
        our{" "}
        <Link href="/privacy-policy/">Notice of Privacy Practices</Link> for
        information on how we use patient information and your rights
        regarding your patient information.
      </p>
      <h3 id="h-ownership-of-the-site">
        <strong>Ownership Of the Site</strong>
      </h3>
      <p key={5}>
        All pages within this site and any material made available for
        download are owned or licensed by the Impact Health &amp; Wellness.
        The site is protected by United States and international copyright
        and trademark laws. The contents of the site, including without
        limitation the files, documents, text, photographs, images, audio,
        and video, and any materials accessed through or made available for
        use or download through this site (&ldquo;Content&rdquo;) may not be
        copied, distributed, modified, reproduced, published or used, in
        whole or in part, except for purposes authorized or approved by
        Impact, including the provision of services or products to Impact, or
        in connection with a business relationship with Impact. You may not
        frame or utilize framing techniques to enclose, or deep linking to,
        any name, trademarks, service marks, logo, content or other
        proprietary information (including; images, text, page layout, or
        form) of Impact without our express written consent. If you have
        questions about the site or any materials or would like more
        information or to request written consent please{" "}
        <Link href="/contact-us/">Contact Us</Link>.
      </p>
      <h3 id="h-site-security">
        <strong>Site Security</strong>
      </h3>
      <p key={7}>
        You are prohibited from violating or attempting to violate the
        security of the site, including, without limitation, (a) accessing
        data not intended for such user or logging onto a server or an
        account which the user is not authorized to access; (b) attempting to
        probe, scan or test the vulnerability of a system or network or to
        breach security or authentication measures without proper
        authorization; or (c) accessing or using the site or any portion
        thereof without authorization, in violation of these Terms of Use or
        in violation of applicable law. Violations of system or network
        security may result in civil or criminal liability. Impact will
        investigate occurrences that may involve such violations and may
        involve, and cooperate with, law enforcement authorities in
        prosecuting users who are involved in such violations. You agree not
        to use any device, software or routine to interfere or attempt to
        interfere with the proper working of this site or any activity being
        conducted on this site.
      </p>
      <h3 id="h-access-to-site-indemnification">
        <strong>Access to Site; Indemnification</strong>
      </h3>
      <p key={9}>
        In the event access to the site or a portion thereof is limited
        requiring a user ID and password (&ldquo;Protected Areas&rdquo;), you
        agree to access Protected Areas using only your user ID and password
        as provided to you by Impact. You agree to protect the
        confidentiality of your user ID and password, and not to share or
        disclose your user ID or password to any third party. You agree that
        you are fully responsible for all activity occurring under your user
        ID. Your access to the site may be revoked by Impact at any time with
        or without cause. You agree to defend, indemnify and hold Impact
        harmless from and against all third-party claims, damages and
        expenses (including reasonable attorney&rsquo;s fees) against or
        incurred by Impact arising out of your use or access of the site, or
        access by anyone accessing the site using your user ID and password.
      </p>
      <h3 id="h-accuracy-and-integrity-of-information">
        <strong>Accuracy and Integrity of Information</strong>
      </h3>
      <p key={11}>
        Although Impact attempts to ensure the integrity and accurateness of
        the site, it makes no representations, warranties or guarantees
        whatsoever as to the correctness or accuracy of the site and content
        therein. It is possible that the site could include typographical
        errors, inaccuracies or other errors, and that unauthorized
        additions, deletions and alterations could be made to the site by
        third parties. In the event that an inaccuracy arises, please inform
        Impact so that it can be corrected. Information contained on the site
        may be changed or updated without notice. Additionally, Impact shall
        have no responsibility or liability for information or content posted
        to the site from any non-Impact affiliated third party.
      </p>
      <h3 id="h-online-transactions-payment-of-bills">
        <strong>Online Transactions &ndash; Payment of Bills</strong>
      </h3>
      <p key={13}>
        Individuals are able to pay their bills and charges online. Our
        financial services provider manages and operates the online bill
        payment feature, including the processing of credit cards and debit
        cards.
      </p>
      <p key={14}>
        Visitors to our site may be able to register or purchase products
        online. We reserve the right to refuse or cancel any order. Some
        situations that may result in your order being refused or canceled
        include limitations on quantities available for purchase,
        inaccuracies or errors in product or pricing information, or problems
        identified by our credit and fraud avoidance department. We may also
        require additional verifications or information before accepting any
        order. We will contact you if all or any portion of your order is
        canceled or if additional information is required to accept your
        order. If your order is canceled after your credit card (or other
        payment account) has been charged, we will issue a credit to your
        credit card (or other applicable payment account) in the amount of
        the charge.
      </p>
      <p key={15}>
        If a credit card account is being used for a transaction, Impact may
        obtain preapproval for an amount up to the amount of the payment. You
        represent and warrant that if you are making online payments that (i)
        any credit card, debit card and bank account information you supply
        is true, correct and complete, (ii) charges incurred by you will be
        honored by your credit/debit card company or bank, (iii) you will pay
        the charges incurred by you in the amounts posted, including any
        applicable taxes, and (iv) you are the person in whose name the card
        was issued and you are authorized to make a purchase or other
        transaction with the relevant card and card information.
      </p>
      <h3 id="h-typographical-errors-and-incorrect-pricing">
        <strong>Typographical Errors and Incorrect Pricing</strong>
      </h3>
      <p key={17}>
        In the event a product or service is listed at an incorrect price due
        to typographical error or error in pricing information received from
        our suppliers, we shall have the right to refuse or cancel any orders
        placed for product / service listed at the incorrect price. We shall
        have the right to refuse or cancel any such orders whether or not the
        order has been confirmed and your credit or debit card charged. If
        your credit or debit card has already been charged for the purchase
        and your order is canceled, we shall immediately issue a credit to
        your credit or debit card account in the amount of the incorrect
        price.
      </p>
      <h3 id="h-medical-advice-disclaimer">
        <strong>MEDICAL ADVICE DISCLAIMER</strong>
      </h3>
      <p key={19}>
        THE CONTENT OF THE SITE, INCLUDING WITHOUT LIMITATION, TEXT, COPY,
        AUDIO, VIDEO, PHOTOGRAPHS, ILLUSTRATIONS, GRAPHICS AND OTHER VISUALS,
        IS FOR INFORMATIONAL PURPOSES ONLY AND DOES NOT CONSTITUTE
        PROFESSIONAL MEDICAL ADVICE, DIAGNOSIS, TREATMENT OR RECOMMENDATIONS
        OF ANY KIND. YOU SHOULD ALWAYS SEEK THE ADVICE OF YOUR QUALIFIED
        HEATH CARE PROFESSIONALS WITH ANY QUESTIONS OR CONCERNS YOU MAY HAVE
        REGARDING YOUR INDIVIDUAL NEEDS AND ANY MEDICAL CONDITIONS. RELIANCE
        ON ANY INFORMATION APPEARING ON THE SITE, WHETHER PROVIDED BY
        COMPANY, ITS CONTENT PROVIDERS, ITS CLIENTS, VISITORS TO THE SITE OR
        OTHERS, IS SOLELY AT YOUR OWN RISK.
      </p>
      <h3 id="h-general-warranty-disclaimer">
        <strong>GENERAL WARRANTY DISCLAIMER</strong>
      </h3>
      <p key={21}>
        IMPACT DOES NOT WARRANT THAT ACCESS TO OR USE OF THE SITE WILL BE
        UNINTERRUPTED OR ERROR-FREE OR THAT DEFECTS IN THE SITE WILL BE
        CORRECTED. THIS SITE, INCLUDING ANY CONTENT OR INFORMATION CONTAINED
        WITHIN IT OR ANY SITE-RELATED SERVICE, IS PROVIDED &ldquo;AS
        IS,&rdquo; WITH ALL FAULTS, WITH NO REPRESENTATIONS OR WARRANTIES OF
        ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
        THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
        PURPOSE, QUALITY OF INFORMATION, QUIET ENJOYMENT, AND
        TITLE/NON-INFRINGEMENT. IMPACT SPECIFICALLY DISCLAIMS ALL LIABILITY
        FOR ERRORS OR OMISSIONS IN, OR THE MISUSE OR MISINTERPRETATION OF,
        ANY INFORMATION OBTAINED THROUGH THE SITE. COMPANY DOES NOT WARRANT
        THE ACCURACY, COMPLETENESS OR TIMELINESS OF THE INFORMATION OBTAINED
        THROUGH THE SITE.
      </p>
      <p key={22}>
        YOU ASSUME TOTAL RESPONSIBILITY AND RISK FOR YOUR USE OF THIS SITE,
        SITE-RELATED SERVICES, AND LINKED WEBSITES. IMPACT DOES NOT WARRANT
        THAT FILES AVAILABLE FOR DOWNLOAD WILL BE FREE OF VIRUSES, WORMS,
        TROJAN HORSES OR OTHER DESTRUCTIVE PROGRAMMING. YOU ARE RESPONSIBLE
        FOR IMPLEMENTING PROCEDURES SUFFICIENT TO SATISFY YOUR NEEDS FOR DATA
        BACK UP AND SECURITY. YOU AGREE THAT COMPANY SHALL NOT BE LIABLE FOR
        ANY COST OR DAMAGE ARISING DIRECTLY OF INDIRECTLY FROM ANY SUCH CODE.
        YOU ASSUME TOTAL RESPONSIBILITY AND RISK FOR YOUR USE OF THE SITE AND
        OF THE INTERNET.
      </p>
      <h3 id="h-limitation-of-liability-regarding-use-of-site">
        <strong>LIMITATION OF LIABILITY REGARDING USE OF SITE</strong>
      </h3>
      <p key={24}>
        IMPACT AND ANY THIRD PARTIES MENTIONED ON THIS SITE ARE NEITHER
        RESPONSIBLE NOR LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
        CONSEQUENTIAL, SPECIAL, EXEMPLARY, PUNITIVE, OR OTHER DAMAGES
        WHATSOEVER (INCLUDING, WITHOUT LIMITATION, THOSE RESULTING FROM LOST
        PROFITS, LOST DATA, OR BUSINESS INTERRUPTION) ARISING OUT OF OR
        RELATING IN ANY WAY TO THE SITE, SITE-RELATED SERVICES, CONTENT OR
        INFORMATION CONTAINED WITHIN THE SITE, AND/OR ANY LINKED WEBSITE,
        WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY
        AND WHETHER OR NOT ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. YOUR
        SOLE REMEDY FOR DISSATISFACTION WITH THE SITE, SITE-RELATED SERVICES,
        AND/OR LINKED WEBSITES IS TO STOP USING THE SITE AND/OR THOSE
        SERVICES.
      </p>
      <h3 id="h-external-sites">
        <strong>External Sites</strong>
      </h3>
      <p key={26}>
        Impact makes no representations whatsoever about any other website
        that you may access through this site. When you access a non-Impact
        site, please understand that it is independent from Impact, and that
        Impact has no control over the content on that website. In addition,
        a link to a non-Impact website does not mean that Impact endorses or
        accepts any responsibility for the content, or the use, of the linked
        site. It is up to you to take precautions to ensure that whatever you
        select for your use or download is free of such items as viruses,
        worms, Trojan horses, and other items of a destructive nature. If you
        decide to access any of the third-party sites linked to this site,
        you do this entirely at your own risk.
      </p>
      <h2 id="h-online-privacy">
        <strong>ONLINE PRIVACY</strong>
      </h2>
      <h3 id="h-scope">
        <strong>Scope</strong>
      </h3>
      <p key={29}>
        This section describes how we use and share personal information
        collected through this site. Our site also contains links to
        third-party sites that are not owned or controlled by Impact. Please
        be aware that we are not responsible for the privacy practices of
        such other sites. We encourage you to be aware when you leave our
        site and to read the privacy statements of each and every website
        that collects personal information. For information about how we
        collect, use and share your health and medical information, please
        refer to our Notice of Privacy Practices.
      </p>
      <h3 id="h-information-you-provide-to-us">
        Information You Provide To Us
      </h3>
      <p key={31}>
        You can provide information to us on our site through various means,
        such as contacting us through our site, filling out feedback forms,
        paying your bills online or purchasing products online from our
        store. Depending on which feature you are using, you may be asked
        provide personal information such as, name, address, telephone
        number, email address, credit or debit card information, bank
        account information, etc.
      </p>
      <h3 id="h-no-information-from-children-under-age-13">
        No Information From Children Under Age 13
      </h3>
      <p key={33}>
        If you are under the age of 13, please do not attempt to register
        with us at this site or provide any personal information about
        yourself to us via this Site.
      </p>
      <p key={34}>
        If we learn that we have collected personal information from a child
        under the age of 13, we will promptly delete that information. If
        you believe we might have any information from a child under the age
        of 13 collected via this site, please Contact Us.
      </p>
      <h3 id="h-information-we-collect-automatically">
        Information We Collect Automatically
      </h3>
      <p key={36}>
        We collect certain information automatically as you use our site,
        such as IP address, browser type, computer or device type, the
        website from where you navigated to our site, and the pages on our
        site that you view.
      </p>
      <h3 id="h-cookies">Cookies</h3>
      <p key={38}>
        We use common Internet technologies, such as cookies and other
        tracking technology, to optimize the performance of our website and
        other digital properties such as social media sites, email
        campaigns, and online advertising.
      </p>
      <p key={39}>
        Cookies, beacons, tags, log files and other technologies may be used
        to collect information about visitors to our website, use of our
        online services, and interactions with our email campaigns,
        advertisements and other marketing content. Collected information
        may include, but not be limited to, computer / mobile browser type,
        computer / mobile operating system and IP address. This data may be
        merged with your online interactions &ndash; pages viewed, links
        clicked, or content viewed. This information, and the analyses
        performed after collection, helps us to provide for a more customized
        and personalized experience for you and future visitors.
      </p>
      <p key={40}>
        We may collaborate with advertisers and marketing research firms as
        part of our marketing activities. These advertisers and research
        firms also may use cookies and tags to track the effectiveness of
        marketing campaigns on our behalf. The information they collect does
        not contain personally identifiable information.
      </p>
      <p key={41}>
        You can reset your browser to refuse all cookies or to indicate when
        a cookie is being sent. However, some website features or services
        may not function properly without cookies.
      </p>
      <h3 id="h-how-we-use-and-share-your-information">
        How We Use and Share Your Information.
      </h3>
      <ul key={43}>
        <li key={44}>
          <strong>To Provide Products, Services, and Information.</strong>We
          collect personal information from you so that we can provide
          products and services that you purchase using the site, and
          information that you request from us. We use your personal
          information to contact you about your orders, process credit card
          / debit card transactions, and ship products to you. We may
          provide information to third party service providers that help us
          bring you the services we offer. For example, we use third parties
          to help host and maintain our Site, and to process payments.
        </li>
        <li key={45}>
          <strong>Communications from Us.</strong>We respect and are
          committed to protecting your privacy. We may collect personally
          identifiable information, including your email address, when you
          visit our site. We also automatically receive and record
          information on our server logs from your browser including your IP
          address, cookie information and the page(s) you visited. We will
          use the information to contact you about products, services and
          information and to provide relevant advertising to you. We will
          not sell your personally identifiable information, but we may
          provide your email address to third parties who will contact you
          about our products and services or whose products or services
          would be of interest to you.
        </li>
        <li key={46}>
          <strong>Legal Requests or Requirements and to Prevent Harm.</strong>
          We will share personal information with third party companies,
          organizations or individuals outside of Impact if we have a
          good-faith belief that access, use, preservation or disclosure of
          the information is reasonably necessary to:
          <ul>
            <li>
              Meet any applicable law, regulation, subpoena, legal process or
              enforceable governmental request.
            </li>
            <li>
              Enforce applicable Terms of Use, including investigation of
              potential violations.
            </li>
            <li>
              Detect, prevent, or otherwise address fraud, security or
              technical issues.
            </li>
            <li>
              Protect against harm to the rights, property or safety of
              Impact, our users, customers or the public as required or
              permitted by law.
            </li>
          </ul>
        </li>
        <li key={52}>
          <strong>Transfer in the Event of Sale or Change of Control.</strong>
          If the ownership of all or substantially all of our business
          changes or we otherwise transfer assets relating to our business or
          the Site to a third party, such as by merger, acquisition,
          bankruptcy proceeding or otherwise, we may transfer or sell your
          personal information to the new owner. In such a case, unless
          permitted otherwise by applicable law, your information would
          remain subject to the promises made in the applicable privacy
          statement unless you agree differently.
        </li>
      </ul>
      <h3 id="h-access-to-your-information-and-choices">
        Access To Your Information and Choices
      </h3>
      <p key={54}>
        You can access and update certain information we have relating to
        your online account by visiting the portal. If you have questions
        about personal information we have about you or need to update your
        information, you can <Link href="/contact-us/">Contact Us</Link>.
      </p>
      <h3 id="h-security-of-your-information">
        Security Of Your Information
      </h3>
      <p key={56}>
        In order to help secure your personal information, access to your
        data on our site is password-protected, and sensitive data (such as a
        credit card number) is protected by encryption when it is exchanged
        between your web browser and our site. To protect any data you store
        on our servers, we also regularly audit our system for possible
        vulnerabilities and attacks, and we use a tier-one secured-access
        data center. However, since the Internet is not a 100% secure
        environment, we cannot guarantee, ensure, or warrant the security of
        any information you transmit to us. There is no guarantee that
        information may not be accessed, disclosed, altered, or destroyed by
        breach of any of our physical, technical, or managerial safeguards.
        It is your responsibility to protect the security of your login
        information. Please note that e-mails you send to us through our
        site are not encrypted, and we strongly advise you not to
        communicate any confidential information through these means.{" "}
        <em>
          Our Secure Sockets Layer (SSL) software is the industry standard
          and among the best software available today for secure commerce
          transactions. It encrypts all of your personal information,
          including credit card number, name, and address, so that it cannot
          be read over the internet.
        </em>
      </p>
      <h3 id="h-revisions-to-terms-of-use-privacy-general-terms">
        Revisions To Terms Of Use / Privacy; General Terms
      </h3>
      <p key={58}>
        Impact reserves the right, in its sole discretion, to terminate your
        access to all or part of this site, with or without cause, and with
        or without notice. In the event that any of the Terms of Use are held
        by a court or other tribunal of competent jurisdiction to be
        unenforceable, such provisions shall be limited or eliminated to the
        minimum extent necessary so that these Terms of Use shall otherwise
        remain in full force and effect. These Terms of Use constitute the
        entire agreement between Impact and you pertaining to the subject
        matter hereof. In its sole discretion, Impact may from time-to-time
        revise these Terms of Use by updating this posting. You should,
        therefore, periodically visit this page to review the current Terms
        of Use, so you are aware of any such revisions to which you are
        bound. Certain provisions of these Terms of Use may be superseded by
        expressly designated legal notices or terms located on particular
        pages within this site. In the event of any dispute or claim relating
        to the Site or these Terms of Use, you agree to resolution of such
        dispute in the state or federal courts located in Ohio, in accordance
        with Ohio law.
      </p>
      <p key={59}>Terms and Conditions for SMS Text Message Notifications</p>
      <ul key={60}>
        <li key={61}>
          These terms and conditions apply to SMS text messages sent by
          Impact Health &amp; Wellness. These messages can be recurring or
          one-time.
        </li>
        <li key={62}>
          Text messages can only be sent to mobile phones. You may opt-out of
          these communications at any time. To receive Impact Health &amp;
          Wellness text messages, you must be a resident of the United
          States and at least 18 years of age.
        </li>
        <li key={63}>
          Impact Health &amp; Wellness does not have a separate charge for
          this service; however, <strong>message and data rates may apply</strong>
          from your mobile carrier. Subject to the terms and conditions of
          your mobile carrier, you may receive text messages sent to your
          mobile phone. Impact does not warrant that your mobile carrier will
          enable your participation in this service.
        </li>
        <li key={64}>
          By providing your consent to participate in this program, you
          approve any charges from your mobile carrier relating to text
          messages to or from Impact Health &amp; Wellness. Charges for text
          messages may appear on your mobile phone bill or be deducted from
          your prepaid balance.
        </li>
        <li key={65}>
          Impact reserves the right to terminate this text service, in whole
          or in part, at any time without notice. The information in any
          message may be subject to certain time lags and/or delays. You are
          responsible for managing the types of texts you receive.
        </li>
        <li key={66}>
          You must be 18 years old to be eligible to use the service. By
          opting-in to receive SMS from Impact Health &amp; Wellness by text
          you are representing that you are at least 18 years of age.
        </li>
        <li key={67}>
          Impact will not be liable for any delays in the receipt of any text
          messages. Delivery is subject to effective transmission from your
          network operator.
        </li>
        <li key={68}>
          Following United States Carriers that offer a messaging capability
          will deliver the messages &ndash; AT&amp;T, T-Mobile, Verizon
          Wireless, Sprint, Boost, Alltel, U.S. Cellular, Cellular One,
          MetroPCS, ACS/Alaska, Bluegrass Cellular, Cellular One of East
          Central Illinois, Centennial Wireless, Cox Communications,
          EKN/Appalachian Wireless, GCI, Illinois Valley Cellular,
          Immix/Keystone Wireless, Inland Cellular, Nex-Tech Wireless, Rural
          Cellular Corporation, Thumb Cellular, United Wireless, West Central
          (WCC), Cellcom, Cellsouth, Cricket, Cincinnati Bell and Virgin
          Mobile. * Carrier is not liable for delayed or undelivered
          messages.
        </li>
      </ul>
    </PageLayout>
  );
}

export default async function CmsWrappedPage() {
  return (
    <CMSRoute path="/terms-of-use">
      <TermsOfUsePage />
    </CMSRoute>
  );
}
