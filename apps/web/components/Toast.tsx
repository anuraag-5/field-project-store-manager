'use client';

import React from 'react';
import { toast as sonnerToast } from 'sonner';
import { neueFont } from 'app/fonts/fonts';

export default function toast(toast: Omit<ToastProps, 'id'>) {
  return sonnerToast.custom((id) => (
    <Toast
      id={id}
      title={toast.title}
      description={toast.description}
    />
  ));
}

function Toast(props: ToastProps) {
  const { title } = props;

  return (
    <div className="h-[60px] w-[270px] bg-[#FBBB3F] flex flex-col justify-center items-center rounded-full">
      <div className={`text-[#FFF8F1] ` + neueFont.className}>
        { title }
      </div>
    </div>
  );
}

interface ToastProps {
  id: string | number;
  title: string;
  description: string;
}