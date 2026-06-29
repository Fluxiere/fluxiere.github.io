SubComponents usage guide
=========================

This folder is for small reusable UI components that can be imported across the app.

How to use a component
----------------------
1. Create a component folder for the new UI element (for example: NewComponent/).
2. Add the component file, its SCSS module, and an index.ts export file.
3. Import it into the page or component where it is needed.

Suggested structure for future components
---------------------------------------
Each new component should follow this pattern:
- ComponentName.tsx
- ComponentName.module.scss
- index.ts

This keeps the folder consistent and makes future imports easier.

Notes
-----
- Keep subcomponents small and reusable.
- Use SCSS modules for styling.
- Add a short export entry in index.ts for each new component.





Catalog
-------

1. BlueDot :
    - What it does: Renders a small circular teal dot with a soft glow effect.
    - How to use it:
      import { BlueDot } from './components/SubComponents/BlueDot';
    
      <BlueDot size={10} />
    - Notes: You can pass a custom className and size when needed.







