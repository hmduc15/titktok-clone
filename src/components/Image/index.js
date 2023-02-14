import { forwardRef, useState } from "react";
import avatar_error from "@/assets/images/avatar_user.png"
import React from "react";

const Image = forwardRef(({ src, ...props }, ref) => {
    const [fallback, setFallback] = useState();
    const handleError = () => {
        setFallback(avatar_error);
    }

    return <img ref={ref} {...props} src={fallback || src} onError={handleError} alt="" />
})

export default Image; 