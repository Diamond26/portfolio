"use client";

import {
    motion, useMotionValue, useSpring, useTransform,
    AnimatePresence, type MotionValue, type SpringOptions,
} from "motion/react";
import {
    Children, cloneElement, isValidElement,
    useEffect, useRef, useState, type ReactNode,
} from "react";

export interface DockItemData {
    icon: ReactNode;
    label: ReactNode;
    onClick: () => void;
    className?: string;
}

function DockItem({
    children, className = "", onClick,
    mouseX, spring, distance, magnification, baseItemSize,
}: {
    children: ReactNode; className?: string; onClick?: () => void;
    mouseX: MotionValue<number>; spring: SpringOptions;
    distance: number; baseItemSize: number; magnification: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isHovered = useMotionValue(0);

    const mouseDistance = useTransform(mouseX, val => {
        const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: baseItemSize };
        return val - rect.x - baseItemSize / 2;
    });

    const targetSize = useTransform(
        mouseDistance,
        [-distance, 0, distance],
        [baseItemSize, magnification, baseItemSize]
    );
    const size = useSpring(targetSize, spring);

    return (
        <motion.div
            ref={ref}
            style={{ width: size, height: size, flexShrink: 0 }}
            onHoverStart={() => isHovered.set(1)}
            onHoverEnd={() => isHovered.set(0)}
            onFocus={() => isHovered.set(1)}
            onBlur={() => isHovered.set(0)}
            onClick={onClick}
            className={`relative inline-flex items-center justify-center rounded-full cursor-none ${className}`}
            tabIndex={0}
            role="button"
        >
            {Children.map(children, child =>
                isValidElement(child)
                    ? cloneElement(child as React.ReactElement<{ isHovered?: MotionValue<number> }>, { isHovered })
                    : child
            )}
        </motion.div>
    );
}

function DockLabel({
    children, className = "", isHovered,
}: { children: ReactNode; className?: string; isHovered?: MotionValue<number> }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!isHovered) return;
        return isHovered.on("change", v => setVisible(v === 1));
    }, [isHovered]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className={`absolute -top-9 left-1/2 whitespace-pre rounded-lg border border-white/10
                                bg-[rgba(14,14,26,.95)] px-2.5 py-1 text-xs font-medium text-white
                                shadow-xl pointer-events-none z-50 ${className}`}
                    style={{ x: "-50%" }}
                    role="tooltip"
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function DockIcon({ children }: { children: ReactNode }) {
    return <div className="flex items-center justify-center w-full h-full">{children}</div>;
}

export { DockLabel, DockIcon };

export default function Dock({
    items,
    className = "",
    spring        = { mass: 0.1, stiffness: 180, damping: 14 },
    magnification = 64,
    distance      = 160,
    panelHeight   = 56,
    baseItemSize  = 44,
}: {
    items: DockItemData[];
    className?: string;
    spring?: SpringOptions;
    magnification?: number;
    distance?: number;
    panelHeight?: number;
    dockHeight?: number;
    baseItemSize?: number;
}) {
    const mouseX = useMotionValue(Infinity);

    return (
        /*
         * Wrapper a altezza fissa = magnification + buffer.
         * Non anima l'altezza — elimina il feedback loop
         * che causava freeze e scomparsa del dock.
         * overflow: visible permette agli item di crescere verso l'alto.
         */
        <div
            style={{
                height: magnification + 24,
                display: "flex",
                alignItems: "flex-end",
                overflow: "visible",
            }}
        >
            <motion.div
                onMouseMove={({ clientX }) => mouseX.set(clientX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                className={`flex items-end gap-3 rounded-2xl border border-white/10
                            bg-[rgba(12,12,22,.78)]
                            pb-2 px-4 shadow-2xl ${className}`}
                style={{
                    height: panelHeight,
                    overflow: "visible", /* item crescono fuori dal box */
                }}
                role="toolbar"
                aria-label="Navigazione"
            >
                {items.map((item, i) => (
                    <DockItem
                        key={i}
                        onClick={item.onClick}
                        className={item.className}
                        mouseX={mouseX}
                        spring={spring}
                        distance={distance}
                        magnification={magnification}
                        baseItemSize={baseItemSize}
                    >
                        <DockIcon>{item.icon}</DockIcon>
                        <DockLabel>{item.label}</DockLabel>
                    </DockItem>
                ))}
            </motion.div>
        </div>
    );
}
