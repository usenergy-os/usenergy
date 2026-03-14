export const G_TAG_ID = process.env.NEXT_PUBLIC_GA_ID;

// Log the pageview with their URL
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', G_TAG_ID, {
      page_path: url,
    });
  }
};

// Log specific events (The "Meaningful Conversions" for the Ad Grant)
export const logEvent = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

/* 
  Example "Meaningful Conversions" to track for Ad Grant Compliance:
  
  logEvent({
    action: 'submit_innovator_application',
    category: 'CatalynQ_Marketplace',
    label: 'Innovator Registration',
  });

  logEvent({
    action: 'join_finance_circle',
    category: 'Investor_Relations',
    label: 'Strategic Finance Intake',
  });
*/
