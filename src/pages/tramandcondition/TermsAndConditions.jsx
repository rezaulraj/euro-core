import React from "react";
import {
  FaBuilding,
  FaUserTie,
  FaHandshake,
  FaLock,
  FaShieldAlt,
  FaFileContract,
} from "react-icons/fa";
import { MdPrivacyTip, MdGavel } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-blue-100 p-3 rounded-full mb-4">
            <HiOutlineDocumentText className="text-blue-600 text-3xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600">Last updated: June 15, 2023</p>
        </div>

        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          {/* Introduction */}
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Welcome to Euro Core Recruitment
            </h2>
            <p className="text-gray-600 mb-4">
              These Terms and Conditions govern your use of our recruitment
              services. By accessing or using our services, you agree to be
              bound by these Terms.
            </p>
            <div className="flex items-center text-sm text-blue-600">
              <FaLock className="mr-2" />
              <span>
                Your privacy is important to us. Please review our Privacy
                Policy.
              </span>
            </div>
          </div>

          {/* General Terms */}
          <div className="p-8 border-b border-gray-200">
            <div className="flex items-start mb-6">
              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                <MdGavel className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  General Terms
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    All users must be at least 18 years of age to use our
                    services
                  </li>
                  <li>Information provided must be accurate and truthful</li>
                  <li>
                    We reserve the right to terminate accounts for violations
                  </li>
                  <li>Service fees apply for certain premium features</li>
                  <li>
                    All communications through our platform are monitored for
                    quality assurance
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Employer Zone */}
          <div className="p-8 border-b border-gray-200 bg-blue-50">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                <FaBuilding className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Employer Terms
                </h3>
                <p className="text-gray-600 mb-4">
                  By using our recruitment services as an employer, you agree
                  to:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Provide accurate job descriptions and requirements</li>
                  <li>Comply with all applicable labor laws and regulations</li>
                  <li>Not discriminate based on protected characteristics</li>
                  <li>Pay any agreed fees within the specified timeframe</li>
                  <li>Maintain confidentiality of candidate information</li>
                  <li>
                    Provide feedback on candidates within 14 days of interview
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Employer fees are non-refundable once
                    a candidate has been introduced, except as specified in our
                    service agreement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Candidate Zone */}
          <div className="p-8 border-b border-gray-200">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                <FaUserTie className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Candidate Terms
                </h3>
                <p className="text-gray-600 mb-4">
                  As a job seeker using our services, you agree to:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    Provide accurate and current information in your profile
                  </li>
                  <li>Not misrepresent your qualifications or experience</li>
                  <li>
                    Attend scheduled interviews unless proper notice is given
                  </li>
                  <li>
                    Notify us of any job offers received through our service
                  </li>
                  <li>Not share confidential employer information</li>
                  <li>
                    Respond to communications within a reasonable timeframe
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> We never charge candidates for basic
                    placement services. Any fees will be clearly disclosed in
                    advance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Partner Zone */}
          <div className="p-8 border-b border-gray-200 bg-blue-50">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                <FaHandshake className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Partner Terms
                </h3>
                <p className="text-gray-600 mb-4">
                  Our recruitment partners agree to:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>
                    Maintain high ethical standards in all recruitment
                    activities
                  </li>
                  <li>
                    Only submit candidates who meet the specified requirements
                  </li>
                  <li>Adhere to our commission and fee structures</li>
                  <li>Protect the confidentiality of all shared information</li>
                  <li>
                    Comply with all applicable data protection regulations
                  </li>
                  <li>Represent our brand professionally at all times</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Partner agreements are governed by
                    separate contracts which supersede these general terms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Protection */}
          <div className="p-8 border-b border-gray-200">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                <FaShieldAlt className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Data Protection
                </h3>
                <p className="text-gray-600 mb-4">
                  We are committed to protecting your personal data in
                  accordance with GDPR and other applicable laws:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>We collect only necessary personal information</li>
                  <li>
                    Data is stored securely and accessed only by authorized
                    personnel
                  </li>
                  <li>You may request access to or deletion of your data</li>
                  <li>
                    Candidate data is shared with employers only with consent
                  </li>
                  <li>
                    We retain data only as long as necessary for business
                    purposes
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Liability */}
          <div className="p-8">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                <FaFileContract className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Limitation of Liability
                </h3>
                <p className="text-gray-600 mb-4">
                  Euro Core Recruitment shall not be liable for:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Any employment decisions made by employers</li>
                  <li>The accuracy of information provided by candidates</li>
                  <li>Job offers that are withdrawn or changed</li>
                  <li>Any indirect, incidental, or consequential damages</li>
                  <li>Events beyond our reasonable control (force majeure)</li>
                </ul>
                <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    These Terms may be updated periodically. Continued use of
                    our services after changes constitutes acceptance of the new
                    Terms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Acceptance */}
          <div className="bg-gray-800 text-white p-6">
            <div className="flex items-center">
              <MdPrivacyTip className="text-2xl mr-3 text-blue-300" />
              <div>
                <h3 className="font-semibold mb-1">Acceptance of Terms</h3>
                <p className="text-sm text-gray-300">
                  By using our services, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms and
                  Conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
