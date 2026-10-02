import { ImageResponse } from "next/og";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default function HomeOG() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "#0B0B0C",
                    color: "#F5F3EE",
                    padding: 72,
                    fontFamily: "Arial, Helvetica, sans-serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                        fontSize: 26,
                        letterSpacing: 5,
                        color: "#8E8E93",
                    }}
                >
                    <div style={{ width: 18, height: 18, borderRadius: 9999, background: "#FF4D00" }} />
                    KBOUEB° — PORTFOLIO
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: 92, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2 }}>
                        Creative Developer
                    </div>
                    <div
                        style={{
                            fontSize: 92,
                            fontWeight: 800,
                            lineHeight: 1.02,
                            letterSpacing: -2,
                            color: "#FF4D00",
                            fontStyle: "italic",
                        }}
                    >
                        that ships.
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: 26,
                        color: "#8E8E93",
                    }}
                >
                    <span>Kani Bouebassihou — Dakar / Worldwide</span>
                    <span>Laravel · React · WordPress</span>
                </div>
            </div>
        ),
        { ...size }
    );
}