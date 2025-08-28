import { cva, VariantProps } from "class-variance-authority";
import { FC, forwardRef } from "react";
import { Slot } from "radix-ui";

const button = cva(
  "inline-flex gap-2 font-medium text-sm text-gray-300 rounded-md hover:bg-opacity-30",
  {
    variants: {
      intent: {
        primary: ["bg-gray-800", "border-transparent", "hover:bg-gray-700"],
        secondary: ["bg-gray-700", "hover:bg-gray-600"],
      },
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-4"],
      },
      disabled: {
        false: null,
        true: ["opacity-50", "cursor-not-allowed"],
      },
    },
    defaultVariants: {
      disabled: false,
      intent: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof button> {
  asChild?: boolean;
}

export const Button: FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, intent, size, disabled, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      className={button({ intent, size, disabled, className })}
      disabled={disabled || undefined}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";
