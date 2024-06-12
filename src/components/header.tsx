import Link from "next/link";

export default function Header() {
  return (
    <div className="container p-6 sticky top-0">
      <div className="flex justify-between h-16 w-full ">
        <div className="flex items-center">
          <Link href="/userslist" className="flex items-center gap-2">
            <svg
              className="h-8 w-8 text-gray-800 dark:text-gray-100"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.371 0 0 5.373 0 12c0 6.627 5.371 12 12 12s12-5.373 12-12c0-6.627-5.371-12-12-12zm0 3c1.66 0 3 1.342 3 3s-1.34 3-3 3-3-1.342-3-3 1.34-3 3-3zm0 16.8c-3.184 0-6.083-1.469-8-3.765.038-2.496 5-3.861 8-3.861 2.998 0 7.962 1.365 8 3.861-1.916 2.296-4.816 3.765-8 3.765z" />
            </svg>

            <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
              User App
            </span>
          </Link>
        </div>

        <div className="flex items-center  gap-4">
          <Link
            href="/useradd"
            className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm shadow hover:bg-gray-700 dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-200 transition-colors"
          >
            Add User
          </Link>
        </div>
      </div>
    </div>
  );
}
