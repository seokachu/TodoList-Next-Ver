import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const notoSansKr = Noto_Sans_KR({
  weight: ["500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Todo List",
  description: "투두리스트 작성하기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>
        {children}

        <Toaster
          position="top-left"
          toastOptions={{
            duration: 1000,
          }}
          containerStyle={{
            fontSize: 14,
          }}
        />
      </body>
    </html>
  );
}
