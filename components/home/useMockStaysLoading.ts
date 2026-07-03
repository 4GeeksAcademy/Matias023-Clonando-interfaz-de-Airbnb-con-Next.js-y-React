"use client";

import { useEffect, useState } from "react";
import type { Accommodation } from "@/types";
import { featuredStaysMock } from "@/data/mocks";

export function useMockStaysLoading(delayMs = 700) {
  const [stays, setStays] = useState<Accommodation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStays(featuredStaysMock);
      setIsLoading(false);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs]);

  return { stays, isLoading };
}