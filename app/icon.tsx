import { ImageResponse } from "next/og";

export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: 192,
                    height: 192,
                    borderRadius: "50%",
                    background: "#0a0a0f",
                    border: "3px solid rgba(255,255,255,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <span
                    style={{
                        fontSize: 80,
                        fontWeight: 700,
                        color: "#ffffff",
                        letterSpacing: "-4px",
                        fontFamily: "serif",
                    }}
                >
                    DS
                </span>
            </div>
        ),
        { ...size }
    );
}
