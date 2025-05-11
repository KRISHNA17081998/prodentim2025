import React, { useState } from 'react';

const PrivacyPage: React.FC = () => {
  const [glow, setGlow] = useState(false);

  const handleTitleClick = () => {
    setGlow(true);
    setTimeout(() => setGlow(false), 1000);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-black">
      {/* Header */}
      <div className="flex flex-col items-center justify-center px-6 pt-12">
        <h1
          onClick={handleTitleClick}
          className={`text-6xl font-bold underline decoration-blue-500 mb-8 cursor-pointer transition duration-300 ${
            glow ? 'drop-shadow-[0_0_10px_blue]' : ''
          }`}
        >
          Privacy Policy
        </h1>

        {/* Main Text */}
        <div className="max-w-4xl text-xl font-normal space-y-6 leading-relaxed mb-12">
          <p>
            Please note that the information we provide is not intended to replace consultation with a qualified medical professional.
            We encourage you to inform your physician of changes you make to your lifestyle and discuss these with him or her.
            For questions or concerns about any medical conditions you may have, please contact your doctor. Statements on this website
            have not been evaluated by the Food and Drug Administration. Products are not intended to diagnose, treat, cure or prevent
            any disease. If you are pregnant, nursing, taking medication, or have a medical condition, consult your physician before using
            our products. The website's content and the product for sale is based upon the author's opinion and is provided solely on an "AS IS"
            and "AS AVAILABLE" basis. You should do your own research and confirm the information with other sources when searching for
            information regarding health issues and always review the information carefully with your professional health care provider before
            using any of the protocols presented on this website and/or the product sold here.
          </p>

          <p>
            ClickBank is the retailer of products on this site. CLICKBANK® is a registered trademark of Click Sales, Inc., a Delaware corporation
            located at 1444 South Entertainment Ave, Suite 410, Boise, Idaho, 83709, USA and used by permission. ClickBank's role as retailer
            does not constitute an endorsement, approval or review of these products or any claim, statement or opinion used in promotion of
            these products. *For international shipping (outside of the United States), shipping fees will apply.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-blue-500 text-center py-6">
        {/* First Row */}
        <div className="flex justify-center space-x-6 text-lg font-semibold mb-2">
          <button
            onClick={handleRefresh}
            className="underline decoration-white hover:text-white transition duration-300"
          >
            Privacy Policy
          </button>
          <span className="underline decoration-white hover:text-white cursor-pointer transition duration-300">
            Disclaimer
          </span>
          <span className="underline decoration-white hover:text-white cursor-pointer transition duration-300">
            Terms
          </span>
        </div>

        {/* Second Row */}
        <div className="flex justify-center space-x-6 text-lg font-semibold">
          <span className="underline decoration-white hover:text-white cursor-pointer transition duration-300">
            © Copyright 2025 ProDentim.
          </span>
          <span className="underline decoration-white hover:text-white cursor-pointer transition duration-300">
            All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPage;
