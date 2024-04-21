"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function ({ children }: { children: any }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient} s>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
