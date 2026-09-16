"use client";

import { useState, useEffect } from "react";

export function useCredentials() {
  const [creds, setCreds] = useState({ user: "", password: "" });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCreds({
        user: localStorage.getItem("nust_user") || "",
        password: localStorage.getItem("nust_pass") || "",
      });
      setIsLoaded(true);
    }
  }, []);

  const saveCreds = (user: string, pass: string, remember: boolean = true) => {
    if (remember) {
      localStorage.setItem("nust_user", user);
      localStorage.setItem("nust_pass", pass);
    } else {
      sessionStorage.setItem("nust_user", user);
      sessionStorage.setItem("nust_pass", pass);
    }
    setCreds({ user, password: pass });
  };

  const clearCreds = () => {
    localStorage.removeItem("nust_user");
    localStorage.removeItem("nust_pass");
    sessionStorage.removeItem("nust_user");
    sessionStorage.removeItem("nust_pass");
    localStorage.removeItem("qalam_cache");
    localStorage.removeItem("lms_cache");
    setCreds({ user: "", password: "" });
  };

  return { creds, isLoaded, saveCreds, clearCreds };
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "";

export function useQalamData() {
  const { creds } = useCredentials();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!creds.user || !creds.password) return;

    const cached = localStorage.getItem("qalam_cache");
    if (cached) {
      try {
        setData(JSON.parse(cached));
      } catch (e) {
        localStorage.removeItem("qalam_cache");
      }
    } else {
      setLoading(true);
    }

    let isMounted = true;

    fetch(`${API_BASE}/sync_qalam?user=${encodeURIComponent(creds.user)}&password=${encodeURIComponent(creds.password)}`, { cache: 'no-store' })
      .then(res => res.json())
      .then(d => {
        if (!isMounted) return;
        if (d.error) setError(d.error);
        else {
          setData(d);
          localStorage.setItem("qalam_cache", JSON.stringify(d));
        }
      })
      .catch(e => {
        if (!isMounted) return;
        setError(e.message);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => { isMounted = false; };
  }, [creds.user, creds.password]);

  return { data, loading, error };
}

export function useLmsData() {
  const { creds } = useCredentials();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!creds.user || !creds.password) return;

    const cached = localStorage.getItem("lms_cache");
    if (cached) {
      try {
        setData(JSON.parse(cached));
      } catch (e) {
        localStorage.removeItem("lms_cache");
      }
    } else {
      setLoading(true);
    }

    let isMounted = true;

    fetch(`${API_BASE}/sync_lms?user=${encodeURIComponent(creds.user)}&password=${encodeURIComponent(creds.password)}`, { cache: 'no-store' })
      .then(res => res.json())
      .then(d => {
        if (!isMounted) return;
        if (d.error) setError(d.error);
        else {
          setData(d);
          localStorage.setItem("lms_cache", JSON.stringify(d));
        }
      })
      .catch(e => {
        if (!isMounted) return;
        setError(e.message);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => { isMounted = false; };
  }, [creds.user, creds.password]);

  return { data, loading, error };
}
