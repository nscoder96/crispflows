import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CrispFlows | Website & Marketing voor Hoveniers — 3× Meer Klanten",
  description:
    "CrispFlows helpt hoveniersbedrijven groeien met een converterende website, lokale SEO, Google Ads en AI-tools. Gemiddeld 3× meer aanvragen in 90 dagen. Maandelijks opzegbaar.",
  metadataBase: new URL("https://crispflows.nl"),
  alternates: { canonical: "/" },
  keywords: [
    "marketing voor hoveniers",
    "website hoveniersbedrijf",
    "Google Ads hovenier",
    "lokale SEO hovenier",
    "meer klanten hovenier",
    "CRM hoveniersbedrijf",
    "hoveniers groeisysteem",
    "online marketing hovenier Nederland",
  ],
  openGraph: {
    title: "CrispFlows | Website & Marketing voor Hoveniers",
    description:
      "Het complete groeisysteem voor hoveniers: converterende website, lokale SEO, Google Ads, CRM en AI-tools. Gemiddeld 3× meer aanvragen in 90 dagen.",
    url: "https://crispflows.nl",
    siteName: "CrispFlows",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CrispFlows | Marketing voor Hoveniers",
    description:
      "Meer klanten voor je hovenierbedrijf via een converterende website, lokale SEO en Google Ads. Gemiddeld 3× meer aanvragen in 90 dagen.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://crispflows.nl#organization",
  name: "CrispFlows",
  url: "https://crispflows.nl",
  email: "niek96spekreijse@gmail.com",
  description:
    "Het complete marketing- en groeisysteem voor hoveniersbedrijven: converterende website, lokale SEO, Google Ads, CRM en AI-tools.",
  areaServed: { "@type": "Country", name: "Nederland" },
  knowsAbout: [
    "Marketing voor hoveniers",
    "Website hoveniersbedrijf",
    "Lokale SEO hovenier",
    "Google Ads hovenier",
    "CRM voor hoveniersbedrijven",
    "AI-tools voor hoveniers",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://crispflows.nl#website",
  name: "CrispFlows",
  url: "https://crispflows.nl",
  inLanguage: "nl-NL",
  publisher: { "@id": "https://crispflows.nl#organization" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://crispflows.nl#service",
  name: "CrispFlows Complete — Marketing & Website voor Hoveniers",
  description:
    "Het complete groeisysteem voor hoveniersbedrijven: converterende website, lokale SEO, Google Ads campagnebeheer, CRM systeem en AI-tools in één pakket.",
  provider: { "@id": "https://crispflows.nl#organization" },
  serviceType: "Online Marketing voor Hoveniers",
  areaServed: { "@type": "Country", name: "Nederland" },
  offers: {
    "@type": "Offer",
    price: "997",
    priceCurrency: "EUR",
    description: "Maandelijks opzegbaar. Inclusief website, SEO, Google Ads, CRM en AI-tools.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${jakartaSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
