import React, { useEffect } from 'react';

const MyComponent = () => {
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
          region: "na1",
          portalId: "6487402",
          formId: "ec26dd85-6c2d-4c04-827e-cb217f296bab",
          target: "#form"
        });
      }
    };

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="flex flex-col px-6 max-w-[1152px] mx-auto mb-16 md:mb-[144px]">
      <a href="/careers/software-engineer">back</a>
      <div id="form"></div>
    </section>
  );
};

export default MyComponent;
