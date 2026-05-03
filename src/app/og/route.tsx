import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
 const { searchParams } = new URL(req.url);
 const title = searchParams.get("title") ?? "Author. Philosopher. Visionary.";
 const sub = searchParams.get("sub") ?? "Blueprint Theory";

 return new ImageResponse(
 (
 <div
 style={{
 width: "1200px",
 height: "630px",
 background: "#000000",
 display: "flex",
 flexDirection: "column",
 alignItems: "flex-start",
 justifyContent: "flex-end",
 padding: "72px 80px",
 fontFamily: "sans-serif",
 position: "relative",
 }}
 >
 {/* Background glow */}
 <div
 style={{
 position: "absolute",
 top: "80px",
 right: "120px",
 width: "400px",
 height: "400px",
 borderRadius: "50%",
 background: "radial-gradient(circle, rgba(0,229,255,0.12) 0%, transparent 70%)",
 }}
 />
 {/* Grid lines */}
 <div
 style={{
 position: "absolute",
 inset: 0,
 backgroundImage:
 "linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px)",
 backgroundSize: "60px 60px",
 }}
 />
 {/* Top label */}
 <div
 style={{
 position: "absolute",
 top: "56px",
 left: "80px",
 display: "flex",
 alignItems: "center",
 gap: "16px",
 }}
 >
 <div
 style={{
 width: "8px",
 height: "8px",
 borderRadius: "50%",
 background: "#00e5ff",
 boxShadow: "0 0 12px #00e5ff",
 }}
 />
 <span
 style={{
 color: "#00e5ff",
 fontSize: "13px",
 letterSpacing: "0.35em",
 textTransform: "uppercase",
 opacity: 0.7,
 }}
 >
 babbalkhehra.com
 </span>
 </div>

 {/* Cyan accent line */}
 <div
 style={{
 width: "48px",
 height: "2px",
 background: "#00e5ff",
 marginBottom: "24px",
 boxShadow: "0 0 12px #00e5ff",
 }}
 />

 {/* Sub label */}
 <div
 style={{
 color: "#00e5ff",
 fontSize: "14px",
 letterSpacing: "0.4em",
 textTransform: "uppercase",
 marginBottom: "20px",
 opacity: 0.7,
 }}
 >
 {sub}
 </div>

 {/* Main title */}
 <div
 style={{
 color: "#ffffff",
 fontSize: title.length > 40 ? "48px" : "64px",
 fontWeight: 300,
 lineHeight: 1.15,
 letterSpacing: "-0.02em",
 maxWidth: "800px",
 marginBottom: "40px",
 }}
 >
 {title}
 </div>

 {/* Author name */}
 <div
 style={{
 color: "#6b6b8a",
 fontSize: "16px",
 letterSpacing: "0.3em",
 textTransform: "uppercase",
 }}
 >
 Babbal Khehra
 </div>

 </div>
 ),
 { width: 1200, height: 630 }
 );
}
