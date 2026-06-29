import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
title: "ProofSetu Protocol",
description:
"Open-source verifiable workflow proof infrastructure for documents, milestones, invoices, and AI-assisted decisions, built on Stellar/Soroban.",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return ( <html lang="en"> <body>{children}</body> </html>
);
}
