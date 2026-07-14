import "./globals.css";

export const metadata = {
  title: {
    default: "Fence Services Central Florida | Repair & Installation",
    template: "%s | Fence Services Central Florida",
  },
  description:
    "Expert fence repair and installation from Jacksonville to Tampa. Strong fences built for Florida weather. Free quotes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
