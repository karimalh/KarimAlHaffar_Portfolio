export function asset(path: string) {
  // Removes any leading slashes so "/lovable-uploads/x.png" becomes "lovable-uploads/x.png"
  const clean = path.replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${clean}`;
}
