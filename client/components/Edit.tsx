export default function Edit() {
	return (
		<div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<a
				href="/dashboard"
				class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 mb-4"
			>
				Go back
			</a>
			{/* Card */}
			<div className="bg-white rounded-xl shadow p-4 sm:p-7">
				<form>
					{/* Section */}
					<div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
						<div class="text-center mb-8 col-span-12 mb-12">
							<h2 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-neutral-200">
								Update Profile
							</h2>
							<p class="text-sm text-gray-600 dark:text-neutral-400">
								Fill in your details. The same would be
								displayed on the dashboard.
							</p>
						</div>
						{/* End Col */}
						<div className="sm:col-span-3">
							<label
								htmlFor="firstName"
								className="inline-block text-sm font-medium text-gray-500 mt-2.5"
							>
								Full name
							</label>
						</div>
						{/* End Col */}
						<div className="sm:col-span-9">
							<div className="sm:flex">
								<input
									id="firstName"
									name="firstName"
									type="text"
									className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
									placeholder="Ashish"
								/>
								<input
									id="lastName"
									name="lastName"
									type="text"
									placeholder="Khare"
									className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
								/>
							</div>
						</div>
						{/* End Col */}
						<div className="sm:col-span-3">
							<label
								htmlFor="email"
								className="inline-block text-sm font-medium text-gray-500 mt-2.5"
							>
								Email
							</label>
						</div>
						{/* End Col */}
						<div className="sm:col-span-9">
							<input
								id="email"
								name="email"
								placeholder="ashish.21218@knit.ac.in"
								type="email"
								className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
							/>
						</div>

						<div className="sm:col-span-3">
							<div className="inline-block">
								<label
									htmlFor="rollno"
									className="inline-block text-sm font-medium text-gray-500 mt-2.5"
								>
									Roll Number
								</label>
							</div>
						</div>
						{/* End Col */}
						<div className="sm:col-span-9">
							<input
								id="rollno"
								name="rollno"
								placeholder="21218"
								type="text"
								className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
							/>
						</div>
						{/* End Col */}

						<div className="sm:col-span-3">
							<div className="inline-block">
								<label
									htmlFor="branch"
									className="inline-block text-sm font-medium text-gray-500 mt-2.5"
								>
									Branch
								</label>
							</div>
						</div>
						{/* End Col */}
						<div className="sm:col-span-9">
							<input
								id="branch"
								name="branch"
								placeholder="Computer Science and Engineering"
								type="text"
								className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
							/>
						</div>
						{/* End Col */}
					</div>
					{/* End Section */}

					<button
						type="button"
						className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none mt-12"
					>
						Update Profile
					</button>
				</form>
			</div>
			{/* End Card */}
		</div>
	);
}
