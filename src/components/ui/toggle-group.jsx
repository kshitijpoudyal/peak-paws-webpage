"use client";
import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext({
  size: "default",
  variant: "default",
})

/**
 * @typedef {Object} ToggleGroupProps
 * @property {string} [className]
 * @property {'default' | 'outline'} [variant]
 * @property {'default' | 'sm' | 'lg'} [size]
 * @property {React.ReactNode} [children]
 */

/** @type {React.ForwardRefExoticComponent<ToggleGroupProps & React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & React.RefAttributes<React.ElementRef<typeof ToggleGroupPrimitive.Root>>>} */
const ToggleGroup = React.forwardRef(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}>
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

/**
 * @typedef {Object} ToggleGroupItemProps
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 * @property {'default' | 'outline'} [variant]
 * @property {'default' | 'sm' | 'lg'} [size]
 */

/** @type {React.ForwardRefExoticComponent<ToggleGroupItemProps & React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & React.RefAttributes<React.ElementRef<typeof ToggleGroupPrimitive.Item>>>} */
const ToggleGroupItem = React.forwardRef(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext)

  return (
    (<ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(toggleVariants({
        variant: context.variant || variant,
        size: context.size || size,
      }), className)}
      {...props}>
      {children}
    </ToggleGroupPrimitive.Item>)
  );
})

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ToggleGroup, ToggleGroupItem }
