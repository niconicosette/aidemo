# UI Components

A collection of reusable UI components built with TypeScript, CSS Modules, and Radix UI.

## Components

### Button

A versatile button component with multiple variants, sizes, and states.

```tsx
import { Button } from '@/ui';

// Basic usage
<Button>Click me</Button>

// Variants
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🚀</Button>

// States
<Button isLoading>Loading</Button>
<Button disabled>Disabled</Button>

// As child (for use with Next.js Link)
<Button asChild>
  <Link href="/page">Navigate</Link>
</Button>
```

### ButtonLink

A button that renders as a link, supporting both internal and external links.

```tsx
import { ButtonLink } from '@/ui';

// Internal link
<ButtonLink href="/page">Internal Link</ButtonLink>

// External link
<ButtonLink href="https://example.com" external>
  External Link
</ButtonLink>

// With variants
<ButtonLink href="/page" variant="outline">
  Outline Link
</ButtonLink>
```

### Input

A form input component with support for icons and error states.

```tsx
import { Input } from '@/ui';

// Basic input
<Input placeholder="Enter text" />

// With type
<Input type="email" placeholder="Enter email" />

// With error state
<Input placeholder="Error input" error />

// With icons
<Input
  leftIcon={<SearchIcon />}
  rightIcon={<ClearIcon />}
  placeholder="Search..."
/>
```

### Textarea

A multi-line text input component.

```tsx
import { Textarea } from '@/ui';

// Basic textarea
<Textarea placeholder="Enter message" />

// With rows
<Textarea placeholder="Enter message" rows={4} />

// With error state
<Textarea placeholder="Error textarea" error />
```

### Select

A dropdown select component.

```tsx
import { Select } from "@/ui";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

<Select options={options} value={selectedValue} onChange={handleChange} />;
```

### Checkbox

A checkbox input component with label support.

```tsx
import { Checkbox } from '@/ui';

// With label
<Checkbox
  id="agree"
  label="I agree to terms"
  checked={isChecked}
  onChange={handleChange}
/>

// Without label
<Checkbox
  checked={isChecked}
  onChange={handleChange}
/>
```

### Dialog

A modal dialog component built with Radix UI.

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/ui";

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description goes here.</DialogDescription>
    </DialogHeader>
    <div>Dialog content goes here.</div>
    <DialogFooter>
      <Button variant='outline'>Cancel</Button>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>;
```

## Design System

The components use a consistent design system with CSS custom properties for theming:

- **Colors**: Primary, secondary, destructive, muted, accent
- **Spacing**: Consistent padding and margins using CSS custom properties
- **Typography**: Standardized font sizes and weights
- **Borders**: Consistent border radius and colors
- **Focus**: Accessible focus indicators

## Styling Approach

This project uses **CSS Modules** for component styling:

- **Scoped Styles**: Each component has its own CSS module file (e.g., `button.module.css`)
- **CSS Custom Properties**: Design tokens are defined in `globals.css` for consistent theming
- **No External Dependencies**: Pure CSS without utility frameworks
- **Type Safety**: CSS module classes are typed through TypeScript

### CSS Module Structure

```css
/* button.module.css */
.button {
  /* Base styles */
}

.variant {
  /* Variant-specific styles */
}

.size {
  /* Size-specific styles */
}
```

```tsx
// button.tsx
import styles from "./button.module.css";

<button className={styles.button}>Click me</button>;
```

## Accessibility

All components are built with accessibility in mind:

- Proper ARIA attributes
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- High contrast support

## Dependencies

- React 19+
- TypeScript
- CSS Modules (built into Next.js)
- Radix UI (for Dialog component)
