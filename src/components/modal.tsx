"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const router = useRouter();

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({
        top: 0,
      });
    }
  }, []);
  return createPortal(
    <dialog
      onClose={() => router.back()}
      onClick={(e) => {
        if ((e.target as any).nodeName === "DIALOG") {
          router.back();
        }
      }}
      ref={dialogRef}
      className="w-full max-w-m sm:max-w-3xl max-h-[90vh] 
           rounded-xl backdrop:bg-black/50 bg-white dark:bg-gray-900 
           p-4 sm:p-6 shadow-lg animate-fade-in overflow-auto animate-fade-scale-in 
           top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      {children}
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
}
