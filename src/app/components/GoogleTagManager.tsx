import Script from "next/script";

const GA_ADS_ID = process.env.NEXT_PUBLIC_GA_ADS_ID;

export default function GoogleTagManager() {
  if (!GA_ADS_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-ads-gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ADS_ID}');
          `,
        }}
      />
    </>
  );
}
