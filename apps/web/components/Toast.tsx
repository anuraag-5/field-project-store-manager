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
    <div className="h-[60px] w-[270px] bg-[#50E5FF] flex flex-col justify-center items-center rounded-full">
      <div className={`text-[#000000] text-[13px]` + neueFont.className}>
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