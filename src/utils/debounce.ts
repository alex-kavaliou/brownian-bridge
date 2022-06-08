export function debounce<T extends Function>(func: T, wait = 20) {
  let h = 0;
  let callable = (...args: any) => {
      if (h) return

      func(...args)
      h = setTimeout(() => h = 0, wait) as unknown as number;
  };
  return <T>(<any>callable);
}