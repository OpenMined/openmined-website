import { useEffect, useState } from 'react';
import logo_img_loading from '../img/logo_om_main_transparent.png';

export default ({ hubspotFormId }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Create script element
    const script = document.createElement('script');

    // Set script attributes
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.async = true;
    script.charset = 'utf-8';

    // Append script to the body
    document.body.appendChild(script);

    // Load form script
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '6487402',
          formId: hubspotFormId,
          target: '#form',
          onFormReady: function () {
            setLoading(false);
          },
        });
      }
    };

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="flex flex-col px-6 max-w-[1152px] mx-auto mb-6">
      {loading && (
        <div className="flex flex-grow items-center justify-center">
          <img
            src={logo_img_loading}
            className="animate-spin max-h-[80%] max-w-[80%] transition duration-300"
          />
        </div>
      )}
      <div id="form" className="" />
    </section>
  );
};
