import * as React from "react";
import { motion } from "framer-motion";

//This code was insipired by the bounce example at:
//github.com/Darth-Knoppix/loading-animation/blob/master/src/BouncingBall.jsx
export const LogoBounce = () => {
    const transitionValues = {
        duration: 0.8,
        repeatType: "reverse",
        repeat: Infinity,
        ease: "easeOut"
    };

    const ballStyle = {
        display: "block",
        width: "5rem",
        height: "5rem",
        backgroundColor: "white",
        borderRadius: "5rem",
        marginRight: "auto",
        marginLeft: "auto"
    };

    return (
        <motion.span
            transition={{
                y: transitionValues,
                width: transitionValues,
                height: transitionValues
            }}
            animate={{
                y: ["2rem", "8rem", "10rem"],
                width: ["20rem", "20rem", "24rem"],
                height: ["20rem", "20rem", "16rem"]
            }}>
            <div>
                <svg version="1.1" viewBox="0 0 1280 1024" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(640 512)">
                        <rect x="-640" y="-512" width="1280" height="1024" rx="0" ry="0" fillOpacity="0" paintOrder="stroke" />
                    </g>
                    <g transform="matrix(1.9212 0 0 1.9212 641.55 736.19)">
                        <g paintOrder="stroke">
                            <g>
                                <path transform="translate(-166.55 28.875)" d="m-5.83-8.38v0q0-0.61 0.14-1.21 0.15-0.59 0.66-0.95v0q0.42-0.29 1.42-0.95t2.35-1.56q1.36-0.9 2.92-1.98t3.08-2.18v0l0.26-2.19q0.7-6.77 2.28-12.42 1.58-5.66 3.73-10.22 2.14-4.56 4.67-7.98 2.53-3.41 5.15-5.72 2.63-2.3 5.19-3.44 2.56-1.15 4.79-1.15v0q1.61 0 2.96 0.61 1.36 0.62 2.32 1.84 0.97 1.23 1.52 3.06 0.55 1.84 0.55 4.29v0q0 3-0.91 6.28-0.9 3.29-2.56 6.64t-3.98 6.69q-2.32 3.33-5.14 6.43-2.82 3.09-6.09 5.85-3.27 2.75-6.78 4.91v0q-0.07 1.97-0.12 3.11-0.04 1.15-0.06 1.74-0.02 0.6-0.02 0.82 0 0.23 0 0.36v0q0 0.29 0.12 0.53 0.11 0.24 0.45 0.39 0.34 0.14 0.92 0.22t1.54 0.08v0q1.45 0 3.9-0.71v0l10.8-3.09q0.26-0.06 0.51-0.1 0.26-0.03 0.49-0.03v0q0.8 0 1.38 0.31 0.58 0.3 0.97 0.82 0.39 0.51 0.58 1.19t0.19 1.39v0q0 0.64-0.19 1.25-0.19 0.62-0.58 1.15t-0.97 0.92q-0.58 0.38-1.35 0.51v0q-3.16 1.26-6.45 2.26v0q-1.41 0.42-2.98 0.82-1.56 0.4-3.19 0.71-1.62 0.3-3.28 0.5-1.66 0.19-3.21 0.19v0q-2.39 0-3.92-0.82t-2.41-2.22q-0.89-1.41-1.24-3.24-0.36-1.84-0.36-3.9v0q-2.77 2.03-4.7 3.22-1.94 1.19-2.48 1.19v0q-0.55 0-1.05-0.37t-0.92-0.98-0.66-1.37-0.24-1.5zm19.11-13.47v0q1.64-1.71 3.43-3.72 1.79-2.02 3.54-4.22 1.76-2.21 3.39-4.52 1.63-2.3 2.93-4.59 1.31-2.29 2.19-4.44 0.89-2.16 1.15-4.1v0q0.09-0.64 0.13-1.24 0.03-0.59 0.03-1.11v0q0-1.84-0.5-2.67-0.5-0.84-1.37-0.84v0q-1.03 0-2.42 1.08-1.38 1.08-2.9 3.07-1.51 2-3.06 4.84-1.55 2.83-2.87 6.31-1.32 3.49-2.3 7.58-0.99 4.09-1.37 8.57zm20.75 12.79v0q0-2.41 0.68-4.96 0.67-2.54 1.87-4.98 1.19-2.43 2.82-4.59 1.62-2.16 3.56-3.77 1.93-1.61 4.07-2.56 2.15-0.95 4.37-0.95v0q0.74 0 1.16 0.29t0.69 0.66q0.28 0.37 0.54 0.72 0.25 0.36 0.64 0.52v0q0.39 0.16 0.79 0.21t0.82 0.05v0q0.36 0 0.73-0.02t0.72-0.02v0q0.49 0 0.9 0.1 0.42 0.1 0.75 0.42 0.32 0.32 0.5 0.9 0.17 0.58 0.17 1.58v0q0 1.55-0.32 3.43-0.32 1.89-0.71 3.87t-0.71 3.96q-0.32 1.99-0.32 3.76v0q0 1.51 0.27 2.37 0.28 0.85 1.18 0.85v0q0.68 0 1.42-0.34t1.5-0.88q0.75-0.55 1.51-1.24 0.76-0.7 1.44-1.44v0q1.57-1.74 3.19-3.93v0l1.54 7.15q-0.74 1.04-1.98 2.42-1.24 1.39-2.79 2.64-1.54 1.26-3.32 2.13-1.77 0.87-3.54 0.87v0q-2.13 0-3.55-1.37-1.41-1.37-2.45-3.98v0q-0.77 0.9-1.9 1.84-1.12 0.93-2.46 1.69t-2.79 1.24-2.9 0.48v0q-1.55 0-3.01-0.62-1.47-0.63-2.6-1.81-1.13-1.17-1.8-2.87-0.68-1.69-0.68-3.82zm8.25-1.38v0q0 0.8 0.11 1.56 0.12 0.76 0.41 1.36 0.29 0.59 0.77 0.96t1.22 0.37v0q1.2 0 2.16-1.03 0.97-1.03 1.68-2.48t1.14-3q0.44-1.54 0.57-2.58v0l1.96-9.47q-1.32 0-2.57 0.66-1.26 0.66-2.37 1.79t-2.05 2.58q-0.93 1.45-1.61 3.04-0.68 1.6-1.05 3.21t-0.37 3.03zm41.28 9.7v0q0-0.48 0.21-1.27t0.65-1.53q0.43-0.75 1.09-1.29 0.66-0.55 1.6-0.55v0q1.06 0 2.24 0.35 1.17 0.36 2.43 0.79 1.26 0.44 2.58 0.79 1.32 0.36 2.67 0.36v0q1.07 0 2.07-0.86 1-0.85 1.88-2.35 0.89-1.5 1.69-3.51 0.81-2.02 1.52-4.35 0.71-2.34 1.32-4.89 0.61-2.54 1.13-5.09v0h-3.97q-0.54 0-1.35-0.13t-1.55-0.43q-0.74-0.31-1.25-0.82-0.52-0.52-0.52-1.29v0q0-0.55 0.29-1.03 0.29-0.49 0.97-0.71v0q1.8-0.39 3.16-0.68 1.35-0.29 2.4-0.5 1.04-0.21 1.85-0.37t1.48-0.26v0q0.78-3.45 1.23-5.99 0.45-2.55 0.77-4.63 0.32-2.07 0.61-3.91t0.68-3.9v0q-2.8 0.8-4.87 1.93-2.06 1.13-3.41 2.42-1.36 1.29-2 2.67-0.65 1.39-0.65 2.71v0q0 0.07-0.03 0.45-0.03 0.39-0.35 0.84t-1.05 0.81q-0.72 0.35-2.11 0.35v0q-1.87 0-2.92-0.21-1.04-0.21-1.54-0.58t-0.62-0.84q-0.11-0.46-0.11-0.95v0q0-4.8 2.42-8.23t6.78-5.62q4.37-2.2 10.48-3.23 6.1-1.03 13.48-1.03v0q4.9 0 10.27 0.32 5.36 0.33 11.07 1.13v0q1.64 0.45 2.27 1.29t0.63 1.77v0q0 0.62-0.18 1.29-0.18 0.68-0.53 1.26-0.36 0.58-0.95 0.95-0.6 0.37-1.4 0.37v0q-0.13 0-0.28-0.02-0.14-0.01-0.3-0.04v0q-2.1-0.36-4.55-0.63-2.45-0.28-5.12-0.45-2.68-0.18-5.53-0.26t-5.78-0.08v0q-0.87 0-2.08 0.09-1.21 0.1-2.34 0.23v0q-1.29 0.13-2.67 0.32v0q0 0.36-0.07 0.81-0.06 0.45-0.19 1.25-0.13 0.81-0.31 2.07-0.18 1.25-0.43 3.24-0.26 1.98-0.58 4.78-0.33 2.81-0.71 6.67v0h17.88q0.78 0 1.2 0.31 0.41 0.3 0.61 0.77 0.19 0.47 0.22 1 0.04 0.53 0.04 1.02v0q0 1.54-0.68 2.32-0.68 0.77-1.39 0.77v0q-0.22 0-1.48 0.05t-3.06 0.11q-1.81 0.07-3.96 0.15-2.16 0.08-4.18 0.14-2.01 0.07-3.67 0.11-1.66 0.05-2.5 0.05v0q-0.58 3.9-1.32 7.51t-1.85 6.75q-1.12 3.14-2.63 5.72t-3.61 4.42q-2.09 1.83-4.83 2.85t-6.29 1.02v0q-0.74 0-1.77-0.1t-2.16-0.32q-1.13-0.23-2.24-0.6t-1.98-0.92-1.42-1.27q-0.55-0.73-0.55-1.66zm43.32-18.02v0q0-2.86 0.41-6.23 0.42-3.37 1.23-6.95 0.81-3.57 1.92-7.18t2.51-6.93 3.05-6.21q1.64-2.88 3.44-5.02 1.81-2.15 3.77-3.37 1.97-1.23 4-1.23v0q1.39 0 2.29 0.63t1.42 1.66q0.51 1.03 0.72 2.34 0.21 1.3 0.21 2.66v0q0 3.03-0.69 6.17t-1.87 6.32q-1.18 3.17-2.72 6.36-1.55 3.19-3.23 6.33-1.67 3.15-3.36 6.19-1.7 3.05-3.18 5.95v0q-0.16 0.32-0.34 0.83-0.17 0.52-0.33 1.12-0.17 0.59-0.33 1.27t-0.26 1.32v0 0.45q0 0.84 0.18 1.63t0.44 1.42 0.55 1 0.54 0.37v0q0.62 0 1.4-0.26 0.79-0.26 1.68-0.69 0.89-0.44 1.82-1 0.94-0.57 1.81-1.15v0q2.03-1.35 4.25-3.12v0l2.64 6.76q-2.87 2.07-5.67 3.68v0q-1.22 0.68-2.53 1.34-1.3 0.66-2.63 1.17-1.32 0.52-2.57 0.82-1.26 0.31-2.36 0.31v0q-1.74 0-3.24-1.53-1.49-1.53-2.61-4.11-1.11-2.58-1.74-5.98-0.62-3.4-0.62-7.14zm8.25-7.02v0q1.45-2.58 3.07-5.8 1.63-3.22 3.08-6.64t2.51-6.82q1.07-3.4 1.36-6.33v0q0-0.93-0.05-1.59-0.05-0.67-0.31-0.67v0q-0.93 0-2.01 1.21t-2.16 3.27q-1.08 2.07-2.06 4.81t-1.76 5.83q-0.77 3.09-1.22 6.36t-0.45 6.37zm9.25 11.7v0q0-3.55 1.06-6.63 1.06-3.07 3.04-5.35 1.99-2.27 4.85-3.57 2.87-1.31 6.45-1.31v0q3.06 0 5.74 0.95 2.67 0.95 5.01 2.55 2.33 1.59 4.35 3.66 2.01 2.06 3.75 4.25v0l-0.61 4.54q-0.87-1.16-2.35-2.51-1.49-1.35-3.15-2.64-1.65-1.29-3.27-2.43-1.61-1.15-2.77-1.92v0l-0.26 0.35q0.94 1.87 1.41 3.95 0.46 2.08 0.46 3.98v0q0 1.9-0.42 3.83-0.41 1.94-1.2 3.74-0.79 1.81-1.94 3.39-1.14 1.58-2.61 2.74-1.46 1.16-3.2 1.83-1.74 0.68-3.71 0.68v0q-2.84 0-4.85-1.24t-3.3-3.24-1.89-4.51q-0.59-2.51-0.59-5.09zm7.21 1.32v0q0 1.35 0.26 2.54 0.26 1.2 0.81 2.08 0.55 0.89 1.45 1.42t2.16 0.53v0q1.09 0 2.12-1.11t1.81-2.8q0.77-1.69 1.24-3.74t0.47-3.92v0q0-1.48-0.23-2.75-0.22-1.28-0.68-2.21-0.45-0.93-1.16-1.48t-1.7-0.55v0q-1.33 0-2.52 1.13t-2.09 2.88q-0.9 1.76-1.42 3.89-0.52 2.12-0.52 4.09zm22.98 6.02v0q0-1.41 0.16-3.3 0.16-1.88 0.44-3.98 0.27-2.09 0.64-4.27 0.37-2.17 0.79-4.14t0.84-3.61 0.84-2.71v0q0.26-0.71 0.51-1.12 0.26-0.42 0.6-0.66 0.34-0.25 0.84-0.33t1.24-0.08v0q0.84 0 1.3 0.08 0.47 0.08 0.7 0.39 0.22 0.31 0.27 0.89t0.05 1.58v0q0 1.19 0 2.88t0.06 3.33v0h0.36q0.64-1.28 1.45-2.88 0.8-1.59 1.87-2.98 1.06-1.39 2.41-2.34 1.36-0.95 3.13-0.95v0q0.61 0 1.19 0.21t1.02 0.6q0.43 0.38 0.69 0.95 0.26 0.56 0.26 1.27v0q0 0.55-0.16 1.53-0.16 0.99-0.36 2.07-0.19 1.07-0.35 2.09-0.16 1.01-0.16 1.69v0q0 1.16 0.22 1.94 0.23 0.77 0.6 1.24 0.37 0.46 0.84 0.66 0.46 0.19 0.98 0.19v0q1.45 0 3-0.64 1.54-0.65 2.83-1.45v0q1.52-0.94 2.97-2.13v0l-0.49 7.54q-0.83 0.55-1.9 1.22-1.06 0.68-2.27 1.28-1.21 0.59-2.51 1-1.31 0.4-2.66 0.4v0q-2.42 0-3.9-0.98-1.48-0.99-2.35-2.58-0.87-1.6-1.29-3.58t-0.68-4.01v0h-0.52l-5.76 16.08q-0.46 1.26-0.86 2.08t-0.82 1.34q-0.42 0.51-0.9 0.72-0.49 0.21-1.07 0.21v0q-1.32 0-2.12-0.56-0.81-0.57-1.24-1.52-0.44-0.95-0.58-2.16-0.15-1.21-0.15-2.5zm25.78-2.32v0q0-2.41 0.68-4.96 0.68-2.54 1.87-4.98 1.19-2.43 2.82-4.59t3.56-3.77 4.08-2.56q2.14-0.95 4.36-0.95v0q0.74 0 1.16 0.29t0.7 0.66q0.27 0.37 0.53 0.72 0.26 0.36 0.64 0.52v0q0.39 0.16 0.79 0.21t0.82 0.05v0q0.36 0 0.73-0.02t0.72-0.02v0q0.49 0 0.91 0.1 0.41 0.1 0.74 0.42 0.32 0.32 0.5 0.9 0.17 0.58 0.17 1.58v0q0 1.55-0.32 3.43-0.32 1.89-0.71 3.87-0.38 1.98-0.71 3.96-0.32 1.99-0.32 3.76v0q0 1.51 0.28 2.37 0.27 0.85 1.17 0.85v0q0.68 0 1.42-0.34t1.5-0.88q0.76-0.55 1.51-1.24 0.76-0.7 1.44-1.44v0q1.58-1.74 3.19-3.93v0l1.54 7.15q-0.74 1.04-1.98 2.42-1.24 1.39-2.79 2.64-1.54 1.26-3.31 2.13-1.78 0.87-3.55 0.87v0q-2.13 0-3.54-1.37-1.42-1.37-2.45-3.98v0q-0.78 0.9-1.91 1.84-1.12 0.93-2.46 1.69t-2.79 1.24-2.9 0.48v0q-1.55 0-3.01-0.62-1.47-0.63-2.6-1.81-1.12-1.17-1.8-2.87-0.68-1.69-0.68-3.82zm8.25-1.38v0q0 0.8 0.12 1.56 0.11 0.76 0.4 1.36 0.29 0.59 0.77 0.96 0.49 0.37 1.23 0.37v0q1.19 0 2.16-1.03 0.96-1.03 1.67-2.48t1.15-3q0.43-1.54 0.56-2.58v0l1.97-9.47q-1.33 0-2.58 0.66-1.26 0.66-2.37 1.79t-2.05 2.58q-0.93 1.45-1.61 3.04-0.68 1.6-1.05 3.21t-0.37 3.03zm22.69 3.96v0q0-2.03 0.47-4.72 0.46-2.69 1.14-5.57 0.68-2.89 1.44-5.76 0.75-2.86 1.33-5.28v0q0.23-0.84 0.91-1.44 0.67-0.59 1.53-0.96 0.85-0.37 1.77-0.55t1.66-0.18v0q1.35 0 1.84 0.5 0.48 0.5 0.48 1.34v0q0 0.71-0.32 2.05-0.33 1.33-0.81 3.03-0.48 1.69-1.03 3.64t-1.03 3.9q-0.49 1.95-0.81 3.8t-0.32 3.33v0q0 1.45 0.32 2.31 0.32 0.85 1.32 0.85v0q1.16 0 2.58-0.8 1.42-0.81 2.87-1.95 1.45-1.15 2.84-2.37 1.38-1.23 2.45-2.1v0 6.55q-1.17 1.06-2.89 2.27t-3.72 2.22q-2 1.02-4.08 1.69-2.08 0.68-3.95 0.68v0q-1.67 0-2.82-0.47-1.14-0.46-1.85-1.3t-1.01-2.05q-0.31-1.21-0.31-2.66zm6.22-33.51v0q0-0.74 0.32-1.68 0.32-0.93 1.05-1.76 0.72-0.82 1.93-1.38 1.21-0.57 3.02-0.57v0q1.12 0 2.12 0.26t1.74 0.79 1.18 1.4q0.43 0.87 0.43 2.07v0q0 1.09-0.35 2.12t-1.13 1.84q-0.77 0.81-1.95 1.31-1.17 0.5-2.82 0.5v0q-2.83 0-4.19-1.34-1.35-1.34-1.35-3.56zm7.99 31.74v0q0-0.77 0.39-1.43t0.9-1.18q0.52-0.52 1.03-0.9 0.52-0.39 0.78-0.62v0q1.8-1.54 2.93-2.57t1.93-1.89q0.81-0.85 1.47-1.72t1.56-2.07q0.9-1.19 2.19-2.91 1.29-1.73 3.35-4.3v0q0.42-0.58 0.94-1.13 0.51-0.55 1.14-0.98 0.63-0.44 1.39-0.71 0.76-0.28 1.69-0.28v0q1.55 0 2.39 0.34 0.83 0.34 1.22 0.82 0.39 0.49 0.45 1.02 0.07 0.53 0.07 0.92v0q0 0.77-0.62 1.7-0.61 0.94-1.35 1.81t-1.4 1.59q-0.66 0.73-0.76 1.08v0q0 1 0.15 1.82 0.14 0.83 0.38 1.62t0.5 1.67q0.26 0.89 0.5 2.05t0.39 2.67q0.14 1.52 0.14 3.58v0q1.16-0.77 2.5-1.4t2.79-1.31q1.45-0.67 2.98-1.5 1.53-0.82 3.08-1.98v0l0.03 7.22q-2 1.55-4.63 2.9-2.62 1.36-5.51 2.39-2.88 1.03-5.83 1.62-2.95 0.6-5.59 0.6v0q-1.9 0-3.55-0.35-1.64-0.36-2.88-1.12-1.24-0.75-2.01-1.98-0.78-1.22-0.94-2.96v0q-0.45 0.09-0.88 0.13-0.44 0.03-0.86 0.03v0q-0.51 0-0.97-0.03-0.45-0.04-0.77-0.25t-0.51-0.67q-0.2-0.47-0.2-1.34zm15.5-8.25l-8.28 8.25q0.39 0 0.85 0.48 0.47 0.49 1.08 1.07 0.62 0.58 1.42 1.06 0.81 0.48 1.84 0.48v0q1.26 0 2.08-0.42 0.82-0.41 1.3-1.11 0.49-0.69 0.68-1.61t0.19-1.92v0q0-0.87-0.11-1.77t-0.29-1.72-0.39-1.55q-0.21-0.72-0.37-1.24v0zm14.44 2.42v0q0-3.55 1.06-6.63 1.07-3.07 3.05-5.35 1.98-2.27 4.85-3.57 2.87-1.31 6.44-1.31v0q3.07 0 5.74 0.95 2.68 0.95 5.01 2.55 2.34 1.59 4.35 3.66 2.02 2.06 3.76 4.25v0l-0.62 4.54q-0.87-1.16-2.35-2.51t-3.14-2.64-3.27-2.43q-1.61-1.15-2.77-1.92v0l-0.26 0.35q0.93 1.87 1.4 3.95t0.47 3.98v0q0 1.9-0.42 3.83-0.42 1.94-1.21 3.74-0.79 1.81-1.93 3.39-1.15 1.58-2.61 2.74-1.47 1.16-3.21 1.83-1.74 0.68-3.7 0.68v0q-2.84 0-4.85-1.24-2.02-1.24-3.31-3.24t-1.88-4.51q-0.6-2.51-0.6-5.09zm7.22 1.32v0q0 1.35 0.26 2.54 0.25 1.2 0.8 2.08 0.55 0.89 1.45 1.42 0.91 0.53 2.16 0.53v0q1.1 0 2.13-1.11t1.8-2.8q0.78-1.69 1.24-3.74 0.47-2.05 0.47-3.92v0q0-1.48-0.22-2.75-0.23-1.28-0.68-2.21t-1.16-1.48-1.71-0.55v0q-1.32 0-2.51 1.13t-2.1 2.88q-0.9 1.76-1.42 3.89-0.51 2.12-0.51 4.09zm22.98 6.02v0q0-2.12 0.25-4.91 0.26-2.79 0.65-5.67 0.39-2.89 0.87-5.56 0.48-2.68 0.93-4.58v0q0.36-1.48 1.37-2.48 1.02-1 2.76-1v0q1.74 0 2.42 1.07 0.67 1.06 0.67 2.83v0q0 0.49-0.09 1.31-0.1 0.82-0.25 1.8-0.14 0.98-0.3 2.03t-0.31 1.94q-0.14 0.88-0.24 1.54t-0.1 0.89v0h0.65q0.19-0.36 0.61-1.15 0.42-0.78 0.97-1.82 0.54-1.03 1.17-2.17 0.63-1.15 1.18-2.19 0.55-1.05 1-1.86 0.45-0.8 0.68-1.19v0q1.03-1.74 2.35-2.38 1.32-0.65 2.93-0.65v0q1.61 0 2.56 1.36 0.95 1.35 0.95 3.73v0q0 0.36-0.14 1.2-0.15 0.83-0.37 1.99-0.23 1.16-0.5 2.55-0.28 1.39-0.5 2.84-0.23 1.45-0.37 2.86-0.15 1.42-0.15 2.62v0q0 1.99 0.5 3.28t1.57 1.29v0q0.48 0 1.11-0.29t1.35-0.76q0.73-0.46 1.48-1.08 0.76-0.61 1.5-1.25v0q1.71-1.52 3.58-3.42v0l0.55 7.22-1.61 1.22q-1.33 1-2.7 2t-2.85 1.79-3.09 1.29-3.39 0.5v0q-1.77 0-2.98-2.56-1.2-2.56-1.2-7.49v0q0-1.94 0.25-4.18 0.26-2.24 0.65-4.82v0h-0.52l-8.44 16.76q-0.65 1.32-1.45 1.81-0.81 0.48-1.87 0.48v0q-1.32 0-2.13-0.56-0.8-0.57-1.24-1.52-0.43-0.95-0.58-2.16-0.14-1.21-0.14-2.5z" fill="#7c53f9" strokeLinecap="round" paintOrder="stroke" />
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(2.0723 0 0 2.0723 640 384.69)">
                        <g paintOrder="stroke">
                            <g transform="matrix(.21146 0 0 -.21146 7.7801 46.98)">
                                <path transform="translate(-687.63 -399.54)" d="m1096.2 582.41c-2.86-3.988-5.86-7.902-9.13-11.66l-12.74-59.891c16.25-12.484 34.5-34.824 34.5-48.867 0-64.797-188.56-117.32-421.15-117.32-232.59 0-421.15 52.523-421.15 117.32 0 11.035 14.786 30.598 25.008 40.723l-22.402 74.84c-74.488-37.063-128.05-92.918-128.05-144 0-119.77 244.72-216.87 546.6-216.87 301.88 0 546.59 97.097 546.59 216.87 0 53.344-57.56 111.09-138.07 148.86" fill="#8d68fd" strokeLinecap="round" paintOrder="stroke" />
                            </g>
                            <g transform="matrix(.21146 0 0 -.21146 7.7805 108.56)">
                                <path transform="translate(-687.63 -108.34)" d="m369.2 216.68c50.25-126.85 173.7-216.68 318.43-216.68s268.18 89.832 318.43 216.68c-89.685-25.559-199.58-40.649-318.43-40.649-118.85 0-228.75 15.09-318.43 40.649" fill="#7c53f9" strokeLinecap="round" paintOrder="stroke" />
                            </g>
                            <g transform="matrix(.21146 0 0 -.21146 5.3786 -54.74)">
                                <path transform="translate(-676.27 -880.58)" d="m456.22 588.6c27.855 0 54.347 4.199 78.39 11.742 35.657-25.215 84.321-40.774 138.01-40.774 55.195 0 105.09 16.434 140.99 42.914 26.829-26.007 69.461-42.914 117.63-42.914 81.228 0 147.08 47.852 147.08 106.88 0 15.555-4.67 30.285-12.89 43.617 17.98 17.727 29.88 39.582 28.73 63.262-9.45 194.55-284.81 246.08-284.81 246.08 23.984 127.3-163.52 182.19-163.52 182.19s5.578-99.06-67.656-138.64c-37.164-20.09-51.883-45.78-57.383-66.218-78.152-2.519-130.5-49.226-130.5-106.64 0-7.308 1.024-14.441 2.945-21.335-78.414-19.125-134.93-72.922-134.93-136.34 0-79.434 88.609-143.82 197.92-143.82" fill="#8d68fd" strokeLinecap="round" paintOrder="stroke" />
                            </g>
                            <g transform="matrix(.21146 0 0 -.21146 5.0912 29.493)">
                                <path transform="translate(-674.91 -482.24)" d="m1009.4 423.66l25.05 117.77c-26.55-19.016-62.971-30.778-103.2-30.778-48.176 0-90.804 16.907-117.63 42.918-35.898-26.48-85.793-42.918-140.99-42.918-53.687 0-102.35 15.559-138.01 40.778-24.039-7.547-50.535-11.746-78.39-11.746-55.133 0-104.96 16.41-140.84 42.839l47.254-157.87c77.242-26.078 194.15-42.703 325-42.703 129.11 0 244.5 16.223 321.76 41.707" fill="#7c53f9" strokeLinecap="round" paintOrder="stroke" />
                            </g>
                            <g transform="matrix(.21146 0 0 -.21146 -78.9 -103.49)">
                                <path transform="translate(-277.72 -1111.1)" d="m323.2 1107.2c-27.418-5.24-36.336-14.16-41.574-41.57-0.824-4.32-6.984-4.32-7.812 0-5.239 27.41-14.153 36.33-41.571 41.57-4.324 0.83-4.324 6.99 0 7.81 27.418 5.24 36.332 14.16 41.571 41.58 0.828 4.32 6.988 4.32 7.812 0 5.238-27.42 14.156-36.34 41.574-41.58 4.321-0.82 4.321-6.98 0-7.81" fill="#7c53f9" strokeLinecap="round" paintOrder="stroke" />
                            </g>
                            <g transform="matrix(.21146 0 0 -.21146 127.32 -17.605)">
                                <path transform="translate(-1252.9 -704.97)" d="m1298.4 701.06c-27.41-5.239-36.33-14.153-41.57-41.571-0.82-4.32-6.99-4.32-7.81 0-5.24 27.418-14.16 36.332-41.57 41.571-4.33 0.828-4.33 6.988 0 7.816 27.41 5.234 36.33 14.152 41.57 41.57 0.82 4.321 6.99 4.321 7.81 0 5.24-27.418 14.16-36.336 41.57-41.57 4.33-0.828 4.33-6.988 0-7.816" fill="#7c53f9" strokeLinecap="round" paintOrder="stroke" />
                            </g>
                            <g transform="matrix(.21146 0 0 -.21146 -119.54 -21.564)">
                                <path transform="translate(-85.516 -723.69)" d="m165.34 716.83c-48.125-9.191-63.778-24.844-72.969-72.969-1.4492-7.586-12.266-7.586-13.715 0-9.1954 48.125-24.844 63.778-72.969 72.969-7.5899 1.449-7.5899 12.266 0 13.715 48.125 9.195 63.773 24.844 72.969 72.973 1.4492 7.585 12.266 7.585 13.715 0 9.191-48.129 24.844-63.778 72.969-72.973 7.586-1.449 7.586-12.266 0-13.715" fill="#7c53f9" strokeLinecap="round" paintOrder="stroke" />
                            </g>
                            <g transform="matrix(.21146 0 0 -.21146 91.647 -113.38)">
                                <path transform="translate(-1084.2 -1157.9)" d="m1164.1 1151c-48.12-9.19-63.78-24.84-72.97-72.96-1.45-7.59-12.26-7.59-13.71 0-9.2 48.12-24.85 63.77-72.97 72.96-7.59 1.45-7.59 12.27 0 13.72 48.12 9.19 63.77 24.84 72.97 72.97 1.45 7.59 12.26 7.59 13.71 0 9.19-48.13 24.85-63.78 72.97-72.97 7.59-1.45 7.59-12.27 0-13.72" fill="#7c53f9" strokeLinecap="round" paintOrder="stroke" />
                            </g>
                        </g>
                    </g>
                </svg>

            </div>
        </motion.span>
    );
};