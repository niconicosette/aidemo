"use client";

import { useState } from "react";
import {
  Button,
  ButtonLink,
  Input,
  Textarea,
  Select,
  Checkbox,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/ui";
import styles from "./page.module.css";

export default function UIDemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    category: "",
    agree: false,
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const categories = [
    { value: "general", label: "General Inquiry" },
    { value: "support", label: "Technical Support" },
    { value: "feedback", label: "Feedback" },
    { value: "other", label: "Other" },
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>UI Components Demo</h1>
          <p className={styles.subtitle}>
            A showcase of reusable UI components built with TypeScript, CSS
            Modules, and Radix UI
          </p>
        </div>

        {/* Buttons Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Buttons</h2>
          <div className={styles.grid}>
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Variants</h3>
              <div className={styles.buttonGroup}>
                <Button>Default</Button>
                <Button variant='secondary'>Secondary</Button>
                <Button variant='outline'>Outline</Button>
                <Button variant='ghost'>Ghost</Button>
                <Button variant='link'>Link</Button>
                <Button variant='destructive'>Destructive</Button>
              </div>
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Sizes</h3>
              <div className={styles.buttonGroup}>
                <Button size='sm'>Small</Button>
                <Button size='default'>Default</Button>
                <Button size='lg'>Large</Button>
                <Button size='icon'>🚀</Button>
              </div>
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>States</h3>
              <div className={styles.buttonGroup}>
                <Button isLoading>Loading</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Button Links Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Button Links</h2>
          <div className={styles.buttonGroup}>
            <ButtonLink href='/'>Internal Link</ButtonLink>
            <ButtonLink href='https://nextjs.org' external>
              External Link
            </ButtonLink>
            <ButtonLink href='/' variant='outline'>
              Outline Link
            </ButtonLink>
          </div>
        </section>

        {/* Form Inputs Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Form Inputs</h2>

          <div className={styles.grid2Col}>
            {/* Basic Inputs */}
            <div className={styles.formGroup}>
              <h3 className={styles.subsectionTitle}>Text Inputs</h3>
              <div className={styles.formGroup}>
                <div className={styles.formField}>
                  <label className={styles.label}>Name</label>
                  <Input
                    placeholder='Enter your name'
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.label}>Email</label>
                  <Input
                    type='email'
                    placeholder='Enter your email'
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.label}>With Error</label>
                  <Input placeholder='This input has an error' error />
                </div>
              </div>
            </div>

            {/* Other Inputs */}
            <div className={styles.formGroup}>
              <h3 className={styles.subsectionTitle}>Other Inputs</h3>
              <div className={styles.formGroup}>
                <div className={styles.formField}>
                  <label className={styles.label}>Category</label>
                  <Select
                    options={categories}
                    value={formData.category}
                    onChange={(value) => handleInputChange("category", value)}
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.label}>Message</label>
                  <Textarea
                    placeholder='Enter your message'
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    rows={4}
                  />
                </div>
                <Checkbox
                  id='agree'
                  label='I agree to the terms and conditions'
                  checked={formData.agree}
                  onChange={(e) => handleInputChange("agree", e.target.checked)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dialog Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Dialog</h2>
          <div className={styles.buttonGroup}>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Example Dialog</DialogTitle>
                  <DialogDescription>
                    This is an example dialog built with Radix UI. It includes a
                    title, description, and footer with action buttons.
                  </DialogDescription>
                </DialogHeader>
                <div style={{ padding: "var(--spacing-4) 0" }}>
                  <p>
                    This is the dialog content. You can put any content here.
                  </p>
                </div>
                <DialogFooter>
                  <Button
                    variant='outline'
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button onClick={() => setIsDialogOpen(false)}>
                    Confirm
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Form Data Display */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Form Data</h2>
          <div className={styles.formData}>
            <pre className={styles.formDataPre}>
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}
