import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login - Vikasa Portfolio",
  description: "Admin login portal for Vikasa Portfolio",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
