/**
 * Prefix a site-internal path with the configured base (GitHub Pages sub-path).
 * Page paths get a trailing slash to match the directory build and avoid redirects.
 */
export function href(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  let clean = path.startsWith('/') ? path : `/${path}`;
  const last = clean.split('/').pop() ?? '';
  if (!clean.endsWith('/') && !last.includes('.')) clean += '/';
  return `${base}${clean}`;
}

/** Path without the base prefix and without a trailing slash (except root). */
export function stripBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  let p = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  if (!p.startsWith('/')) p = `/${p}`;
  if (p.length > 1) p = p.replace(/\/+$/, '');
  return p;
}
