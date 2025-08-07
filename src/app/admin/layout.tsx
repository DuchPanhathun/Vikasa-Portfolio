import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard - Vikasa Portfolio",
  description: "Admin dashboard for Vikasa Portfolio content management",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
