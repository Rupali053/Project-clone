"use client";

import {
  Toast,
  ToastProvider,
  ToastViewport,
} from "@radix-ui/react-toast";
import { useToast, Toast as ToastType } from "@/components/ui/use-toast";

export function Toaster() {
  const { toasts, removeToast } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action }: ToastType) => (
        <Toast key={id} onOpenChange={() => removeToast(id)}>
          <div className="grid gap-1">
            {title && <div className="font-semibold">{title}</div>}
            {description && (
              <div className="text-sm text-gray-600">{description}</div>
            )}
          </div>
          {action}
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}
