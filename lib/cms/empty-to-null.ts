type EmptyToNullArgs = {
  value?: unknown;
};

/** Unique text fields must not store `''` — blank create forms crash otherwise. */
export function emptyToNull({ value }: EmptyToNullArgs): unknown {
  if (value === "" || value === undefined) return null;
  return value;
}
