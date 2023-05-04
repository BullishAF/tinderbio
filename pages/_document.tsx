import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate your next dating app bio in seconds."
          />
          <meta property="og:site_name" content="https://aidating.bio/" />
          <meta
            property="og:description"
            content="Generate your next dating app bio in seconds."
          />
          <meta property="og:title" content="AI Dating App Bio Generator" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="AI Dating App Bio Generator" />
          <meta
            name="twitter:description"
            content="Generate your next dating app bio in seconds."
          />
          <meta
            property="og:image"
            content="https://aidating.bio/og-image.png"
          />
          <meta
            name="twitter:image"
            content="https://aidating.bio/og-image.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
         {/* Global Site Tag (gtag.js) - Google Analytics */}
        {/* Necessary to prevent error: window.gtag is not defined for Next.js-hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
          }}
        />        
        </body>
      </Html>
    );
  }
}

export default MyDocument;
