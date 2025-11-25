// import React from "react";
import { motion } from "framer-motion";

/**
 * ThankYouPage
 * A responsive, accessible, Tailwind-styled React component (single-file) that
 * shows a friendly thank you / success screen with a call-to-action.
 *
 * Usage:
 *  - Ensure Tailwind CSS is configured in your project
 *  - Install framer-motion: `npm i framer-motion` or `yarn add framer-motion`
 *  - Import and use: `import ThankYouPage from './ThankYouPage'`
 *
 * Props:
 *  - title (string): main headline
 *  - subtitle (string): smaller description below the headline
 *  - ctaLabel (string): CTA button text
 *  - onCta (fn): click handler for the CTA button
 *  - secondaryLabel (string): label for secondary action
 *  - onSecondary (fn): click handler for the secondary action
 */

const Checkmark = () => (
    <svg
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
        className={"w-20 h-20"}
    >
        <circle cx="60" cy="60" r="56" stroke="none" fill="currentColor" />
        <path
            d="M36 62l14 14 34-38"
            stroke="#fff"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
    </svg>
);

const ThankYouPage = () => {
    const data = {
        title: "Thank you!",
        subtitle: "We received your submission and will get back to you shortly.",
        ctaLabel: "Back to Dashboard",
        onCta: null,
        secondaryLabel: "View receipt",
        onSecondary: null,
    };
    return (
        <main className="min-h-screen bg-gradient-to-br from-sky-50 to-white dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-6">
            <motion.section
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                role="region"
                aria-label="Thank you"
                className="max-w-xl w-full bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-8 sm:p-10 border border-transparent dark:border-slate-700"
            >
                <div className="flex flex-col items-center text-center gap-6">
                    <div className="rounded-full bg-emerald-500/90 p-1.5 shadow-lg">
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 380, damping: 22 }}
                            className="rounded-full bg-emerald-500 flex items-center justify-center p-4"
                        >
                            <Checkmark className="w-16 h-16 text-white" />
                        </motion.div>
                    </div>

                    <h1 className="text-2xl sm:text-3xl font-semibold leading-tight text-(--primary)">
                        {data.title}
                    </h1>

                    <p
                        className="text-sm sm:text-base text-(--primary) dark:text-slate-300 max-w-prose"
                        aria-live="polite"
                    >
                        {data.subtitle}
                    </p>

                    <div className="mt-2 w-full flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center">
                        <button
                            onClick={data.onCta}
                            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-lg font-medium shadow focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 bg-emerald-600 text-white hover:bg-emerald-700"
                        >
                            {data.ctaLabel}
                        </button>


                    </div>


                </div>
            </motion.section>
        </main>
    );
};

export default ThankYouPage;
