export type Role = "client" | "admin" | "partner";
export function hasAccess(role: Role, allowed: Role[]) {
  return allowed.includes(role);
}
