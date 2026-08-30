import { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

export function useSafeReducedMotion() {
    const [mounted, setMounted] = useState(false);
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        setMounted(true);
    }, []);

    return mounted ? !!reduceMotion : false;
}
