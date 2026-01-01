import { useMDXComponents as getThemeMDXComponents } from 'nextra-theme-docs'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useMDXComponents(components?: any): any {
  return getThemeMDXComponents(components)
}
