export type AppTheme = "light" | "dark" | "nust-exclusive";

export const THEME_STORAGE_KEY = "campus-concierge-theme";
export const NUST_THEME_CLASS = "theme-nust-exclusive";

export function getInitialTheme(): AppTheme {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as AppTheme | null;

  if (storedTheme === "light" || storedTheme === "dark" || storedTheme === "nust-exclusive") {
    return storedTheme;
  }

  if (document.documentElement.classList.contains(NUST_THEME_CLASS)) {
    return "nust-exclusive";
  }

  if (document.documentElement.classList.contains("dark")) {
    return "dark";
  }

  return "light";
}

export function applyTheme(theme: AppTheme) {
  if (typeof window === "undefined") {
    return;
  }

  const root = document.documentElement;
  root.classList.remove("dark", NUST_THEME_CLASS);
  root.dataset.theme = theme;

  if (theme === "dark") {
    root.classList.add("dark");
  } else if (theme === "nust-exclusive") {
    root.classList.add(NUST_THEME_CLASS);
  }

  localStorage.setItem(THEME_STORAGE_KEY, theme);
}
