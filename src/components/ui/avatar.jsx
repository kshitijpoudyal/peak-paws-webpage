"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

/**
 * @typedef {Object} AvatarProps
 * @property {string} [className]
 */

/** @type {React.ForwardRefExoticComponent<AvatarProps & React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & React.RefAttributes<React.ElementRef<typeof AvatarPrimitive.Root>>>} */
const Avatar = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props} />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

/**
 * @typedef {Object} AvatarImageProps
 * @property {string} [className]
 */

/** @type {React.ForwardRefExoticComponent<AvatarImageProps & React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> & React.RefAttributes<React.ElementRef<typeof AvatarPrimitive.Image>>>} */
const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props} />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

/**
 * @typedef {Object} AvatarFallbackProps
 * @property {string} [className]
 */

/** @type {React.ForwardRefExoticComponent<AvatarFallbackProps & React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> & React.RefAttributes<React.ElementRef<typeof AvatarPrimitive.Fallback>>>} */
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props} />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
