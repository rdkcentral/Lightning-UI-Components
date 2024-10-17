import lng from '@lightningjs/core';

// Utility function to check class inheritance
declare function isSubclass(Subclass: any, Superclass: any): boolean;

// Define the function that takes a base class and returns a new class
export default function withTextMagnifier<T extends lng.Application>(
  Base: T
): T & {
  textMagnifierEnabled: boolean;
};

// TextMagnifier Component Definition (optional if it's already defined elsewhere)
export interface TextMagnifier {
  location: 'top' | 'bottom';
  content: string
}
