export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080a09] py-12 text-xs text-zinc-500">
      <div className="mx-auto max-w-7xl px-6 flex flex-col items-center justify-between gap-6 sm:flex-row lg:px-10">
        <p>© 2026 BulkLab. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#home" className="hover:text-white">Privacy</a>
          <a href="#home" className="hover:text-white">Terms</a>
          <a href="#home" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}