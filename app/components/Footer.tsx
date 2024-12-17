import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111622] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Image
              src="/logonobg.png"
              alt="Sheet Music Africa Logo"
              width={64}
              height={64}
              className="rounded-full"
            />
            <div>
              <p className="text-[#ee9418] font-semibold text-lg">
                Sheet Music Africa
              </p>
              <p className="text-sm text-gray-400">
                Connecting African Music to the World
              </p>
            </div>
          </div>
          <div className="flex space-x-6">
            <Link href="/about" className="text-gray-400 hover:text-[#ee9418]">
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-[#ee9418]"
            >
              Contact
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-[#ee9418]">
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-[#ee9418]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; 2024 Sheet Music Africa. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
