export default function Header() {
	return (
		<div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
			<div>
				<h2 className="text-xl font-semibold text-gray-800">
					Registered Students
				</h2>
				<p className="text-sm text-gray-600 my-1">
					Here is the list of all students registered on the platform.
				</p>
			</div>
			<div>
                <div className="inline-flex gap-x-2">
                  <a
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    href="/edit-profile"
                  >
                    Edit your details
                  </a>
                </div>
              </div>
		</div>
	);
}
