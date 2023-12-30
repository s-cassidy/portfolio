import { Links } from "./header/Links";
import { Logo } from "./header/Logo";
import { Navbar } from "./header/Navbar";

export function Header() {
  return (
    <div className="flex justify-between">
      <Logo />
      <Navbar />
    </div>
  )
}
