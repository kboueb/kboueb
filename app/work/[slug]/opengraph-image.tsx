import { ImageResponse } from "next/og";
import { PROJECTS } from "@/lib/projects";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function WorkOG({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);

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
                    KBOUEB° — SELECTED WORK
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
                        {project?.title ?? "Project"}
                    </div>
                    <div
                        style={{
                            fontSize: 40,
                            fontWeight: 400,
                            color: "#FF4D00",
                            fontStyle: "italic",
                            marginTop: 12,
                        }}
                    >
                        {project?.category ?? ""}
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
                    <span>Kani Bouebassihou</span>
                    <span>kboueb.vercel.app</span>
                </div>
            </div>
        ),
        { ...size }
    );
}