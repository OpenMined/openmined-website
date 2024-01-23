import { useEffect, useState } from 'react';
import logo_img_loading from '../img/logo_om_main_transparent.png';

export default ({ hubspotFormId, formName }) => {
  const [loading, setLoading] = useState(true);

  async function handleFormSubmit() {
    console.log('Sending Plausible tracking event...');
    await plausibleTrackEvent();
    console.log('Form ready to submit');
  }

  function plausibleTrackEvent() {
    return new Promise((resolve) => {
      window.plausible('HubSpot Form Submitted', {
        props: {
          formId: hubspotFormId,
          formName: formName,
          pageUrl: window.location.href,
          referrer: document.referrer,
        },
      });
      resolve();
    });
  }

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
          onFormReady: function (form) {
            form.onBeforeFormSubmit = async function () {
              await handleFormSubmit();
              console.log('finished onbeforeformsubmit');
            };
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
