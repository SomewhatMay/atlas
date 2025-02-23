export default function getDefaultLogo(name: string) {
  return `${name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")}`.toUpperCase();
}
