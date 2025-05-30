import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef((props, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity animate-in fade-in"
    {...props}
  />
));
DialogOverlay.displayName = 'DialogOverlay';

const DialogContent = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={`fixed left-1/2 top-1/2 z-50 grid w-full max-w-md translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white shadow-lg duration-200 rounded-xl ${className || ''}`}
      {...props}
    />
  </DialogPortal>
));
DialogContent.displayName = 'DialogContent';

const DialogHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col space-y-1.5 text-left px-6 pt-6 ${className || ''}`}
    {...props}
  />
));
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 px-6 pb-6 ${className || ''}`}
    {...props}
  />
));
DialogFooter.displayName = 'DialogFooter';

const DialogClose = DialogPrimitive.Close;

const DialogTitle = DialogPrimitive.Title;
const DialogDescription = DialogPrimitive.Description;

export { 
  Dialog, 
  DialogTrigger, 
  DialogContent, 
  DialogHeader,
  DialogFooter,
  DialogTitle, 
  DialogDescription,
  DialogClose
};
