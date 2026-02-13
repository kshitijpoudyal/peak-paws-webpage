import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * @typedef {Object} CardProps
 * @property {string} [className]
 */

/** @type {React.ForwardRefExoticComponent<CardProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>} */
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-xl border bg-card text-card-foreground shadow", className)}
    {...props} />
))
Card.displayName = "Card"

/**
 * @typedef {Object} CardHeaderProps
 * @property {string} [className]
 */

/** @type {React.ForwardRefExoticComponent<CardHeaderProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>} */
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props} />
))
CardHeader.displayName = "CardHeader"

/**
 * @typedef {Object} CardTitleProps
 * @property {string} [className]
 */

/** @type {React.ForwardRefExoticComponent<CardTitleProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>} */
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props} />
))
CardTitle.displayName = "CardTitle"

/**
 * @typedef {Object} CardDescriptionProps
 * @property {string} [className]
 */

/** @type {React.ForwardRefExoticComponent<CardDescriptionProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>} */
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props} />
))
CardDescription.displayName = "CardDescription"

/**
 * @typedef {Object} CardContentProps
 * @property {string} [className]
 */

/** @type {React.ForwardRefExoticComponent<CardContentProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>} */
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

/**
 * @typedef {Object} CardFooterProps
 * @property {string} [className]
 */

/** @type {React.ForwardRefExoticComponent<CardFooterProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>} */
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props} />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
