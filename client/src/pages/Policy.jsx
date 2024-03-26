import Footer from "../components/Layout/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="bg-blue-300 -mt-4 -mb-4">
      <div className="m-4 p-2">
        <div className="my-3">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <h2 className="text-lg font-medium ">
            Last Updated on 30th June, 2019
          </h2>
        </div>
        <p className=" my-3">
          This privacy policy will explain how the personal data we collect from
          you is used when you use our website.
        </p>
        <div className="my-3">
          <h1 className="text-3xl font-bold">Information we collect</h1>
          <p className=" mt-2">
            We collect usage information including the Internet Protocol
            address, browser type, browser language, referring URL, files
            accessed, errors generated, time zone and operating system of
            visitors to our website. In case of products or services requiring
            payment, credit card or other payment account information are
            handled via a third party payment gateway. You can review their
            Privacy Policy here https://stripe.com/gb/privacy.
          </p>
        </div>
        <div className="my-3">
          <h1 className="text-3xl font-bold">How information is used</h1>
          <p className=" mt-2">
            Your payment information will not be stored by us and will be used
            solely for processing payments. Subject to your prior consent and
            where necessary for processing future payments, your financial
            information will be stored on servers of a third-party payment
            gateway service provider in accordance with their Privacy Policy.
          </p>
          <p className=" mt-2">
            We use Internet Protocol address, browser type, browser language,
            referring URL, files accessed, errors generated, time zone and
            operating system of visitors collected in our log files to analyze
            the trends, administer the website, track visitor’s movements and to
            improve our applications.
          </p>
          <p className=" mt-2">
            We do not sell or rent your personal information with third parties
            for marketing purposes. Your personal information is never shared
            outside of CrudCrud without your permission, except in cases where:
          </p>
          <ul className=" mt-2 list-disc ml-8">
            <li>we have your consent to share such information;</li>
            <li>
              sharing is necessary to provide services which you have requested;
            </li>
            <li>
              we are required by law to do so in connection with litigation to
              prevent a crime, including personal safety, public safety or our
              site;
            </li>
            <li>
              there is a sale or merger with another entity or should CrudCrud
              have its assets sold to another entity;
            </li>
            <li>there is a need to share non-personal information.</li>
          </ul>
        </div>
        <div className="my-3">
          <h1 className="text-3xl font-bold">Data retention</h1>
          <p className=" mt-2">
            CrudCrud will retain your personal data only for as long as is
            necessary for the purposes set out in this Privacy Policy. CrudCrud
            will also retain usage data for internal analysis purposes. Usage
            data is generally retained for a shorter period of time, except when
            this data is used to strengthen the security or to improve the
            functionality of our service.
          </p>
        </div>
        <div className="my-3">
          <h1 className="text-3xl font-bold">Cookies</h1>
          <p className=" mt-2">
            We use cookies to personally identify you. Most web browsers are set
            to accept cookies by default. If you prefer, you can usually choose
            to set your browser to remove or reject first- and third-party
            cookies. Please note that if you choose to remove or reject cookies,
            this could affect the availability and functionality of our
            services.
          </p>
        </div>
        <div className="my-3">
          <h1 className="text-3xl font-bold">Analytics Partners</h1>
          <p className=" mt-2">
            We use Google Analytics to help analyze usage and traffic for our
            website. As an example, we may use Google Analytics to analyze and
            measure, in the aggregate, the number of unique visitors to our
            services. You can refer to their Privacy Policy here
            https://policies.google.com/privacy.
          </p>
        </div>
        <div className="my-3">
          <h1 className="text-3xl font-bold">Changes to this Privacy Policy</h1>
          <p className=" mt-2">
            We reserve the right to modify this Privacy Policy at any time, and
            without prior notice, by posting an amended Privacy Policy that is
            always accessible by clicking on the Privacy Policy link on this
            sites footer. The date of the last modification is stated at the top
            of this document. Any modifications that might change how we deal
            with your data will be notified to all our registered users.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
