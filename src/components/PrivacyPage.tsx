// src/components/PrivacyPage.tsx
import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-500 text-white px-6 py-12">
      <h1 className="text-5xl font-bold text-black underline decoration-white mb-12 hover:text-black hover:shadow-xl hover:shadow-white transition-all duration-300">
        Privacy Policy
      </h1>

      <div className="max-w-4xl text-2xl font-bold space-y-8 leading-relaxed">
        <p className="text-black hover:text-black hover:shadow-xl hover:shadow-white transition-all duration-300">
          Please note that the information we provide is not intended to replace consultation with a qualified medical professional. We encourage you to inform your physician of changes you make to your lifestyle and discuss these with him or her.
        </p>
        <p className="text-black hover:text-black hover:shadow-xl hover:shadow-white transition-all duration-300">
          For questions or concerns about any medical conditions you may have, please contact your doctor. Statements on this website have not been evaluated by the Food and Drug Administration. Products are not intended to diagnose, treat, cure or prevent any disease. If you are pregnant, nursing, taking medication, or have a medical condition, consult your physician before using our products. The website's content and the product for sale is based upon the author's opinion and is provided solely on an "AS IS" and "AS AVAILABLE" basis. You should do your own research and confirm the information with other sources when searching for information regarding health issues and always review the information carefully with your professional health care provider before using any of the protocols presented on this website and/or the product sold here.
        </p>
        <p className="text-black hover:text-black hover:shadow-xl hover:shadow-white transition-all duration-300">
          ClickBank is the retailer of products on this site. CLICKBANK® is a registered trademark of Click Sales, Inc., a Delaware corporation located at 1444 South Entertainment Ave, Suite 410, Boise, Idaho, 83709, USA and used by permission. ClickBank's role as retailer does not constitute an endorsement, approval or review of these products or any claim, statement or opinion used in promotion of these products. *For international shipping (outside of the United States), shipping fees will apply.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage;
