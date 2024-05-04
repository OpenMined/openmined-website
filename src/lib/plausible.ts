type PlausibleArgs = {
  formId: string;
  formName: string;
  url: string;
  referrer: string;
};

export function plausibleTrackFormEvent({ formId, formName, url, referrer }: PlausibleArgs) {
  if (!window.plausible) {
    console.error('Plausible not found');
    return;
  }

  return new Promise((resolve) => {
    window.plausible('HubSpot Form Submitted', {
      props: {
        formId,
        formName,
        referrer,
        pageUrl: url
      }
    });

    resolve('Event sent to Plausible.');
  });
}
