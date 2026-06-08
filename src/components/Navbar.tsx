import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "About", type: "section", sectionId: "about" },
    { name: "Technology", type: "section", sectionId: "technology" },
    { name: "Solution", type: "page", path: "/solution" },
    { name: "Team", type: "page", path: "/team" },
    { name: "Careers", type: "page", path: "/careers" },
  ];

  const handleMenuClick = async (item: (typeof menuItems)[0]) => {
    if (item.type === "section") {
      if (pathname !== "/") {
        await router.push("/");
        setTimeout(() => {
          if (item.sectionId) {
            if (item.sectionId) document.getElementById(item.sectionId)?.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        if (item.sectionId) document.getElementById(item.sectionId)?.scrollIntoView({ behavior: "smooth" });
      }
    } else if (item.path) {
      router.push(item.path);
    }
    setTimeout(() => setIsOpen(false), 300);
  };

  return (
    <nav className={`fixed left-0 right-0 top-0 z-[100] transition-colors duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}>
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <motion.div
          className="relative cursor-pointer flex items-center gap-2"
          onClick={() => router.push("/")}
        >
          <Image
            src="/logo.png"
            alt="Dashagriv Aerospace"
            width={120}
            height={30}
            className="filter grayscale brightness-200"
            priority
          />
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleMenuClick(item)}
              className={`text-xs tracking-[0.2em] uppercase font-display transition-colors ${
                item.type === "page" && pathname === item.path
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            onClick={() => (window.location.href = "tel:+916382497619")}
            className="ghost-btn"
          >
            Contact
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleMenuClick(item)}
                  className={`text-left text-sm uppercase tracking-widest font-display ${
                    item.type === "page" && pathname === item.path
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => (window.location.href = "tel:+916382497619")}
                className="ghost-btn w-max mt-4"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
