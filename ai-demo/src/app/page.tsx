import Link from "next/link";
import { Button } from "@/ui";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Welcome to AI Demo</h1>
          <p className={styles.subtitle}>
            A Next.js application showcasing reusable UI components built with
            TypeScript, CSS Modules, and Radix UI.
          </p>

          <div className={styles.buttonGroup}>
            <Button asChild>
              <Link href='/ui-demo'>View UI Components</Link>
            </Button>
            <Button variant='outline' asChild>
              <Link href='https://nextjs.org/docs' target='_blank'>
                Next.js Docs
              </Link>
            </Button>
          </div>
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.icon}>
              <svg fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>TypeScript</h3>
            <p className={styles.featureDescription}>
              Built with TypeScript for type safety and better developer
              experience.
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.icon}>
              <svg fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
                />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>CSS Modules</h3>
            <p className={styles.featureDescription}>
              Styled with CSS Modules for scoped styling and better
              maintainability.
            </p>
          </div>

          <div className={styles.feature}>
            <div className={styles.icon}>
              <svg fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Radix UI</h3>
            <p className={styles.featureDescription}>
              Accessible components built on top of Radix UI primitives.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
