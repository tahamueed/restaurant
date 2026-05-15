// app/demo/layout.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Demo - System',
  description: 'Dynamic restaurant demo platform',
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}