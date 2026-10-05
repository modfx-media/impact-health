type EmptyToNullArgs = {
  value?: unknown;
};

export function emptyToNull({ value }: EmptyToNullArgs): unknown {
  if (value === "") return null;
  return value;
}
