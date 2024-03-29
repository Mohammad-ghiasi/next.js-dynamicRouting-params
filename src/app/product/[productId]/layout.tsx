import type { Metadata } from "next";
import ResponsiveAppBar from "@/components/Navbar";
import { Typography } from "@mui/material";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Typography variant="h5">Product page</Typography>
        {children}
    </>
  );
}
