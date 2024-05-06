interface SignInProps {
	setSignIn: () => {};
};

export default function SignIn({ setSignIn }: SignInProps) {
	return (
		<div className="max-w-md w-full mt-7 bg-white border border-gray-200 rounded-xl shadow-sm">
			<div className="p-4 sm:p-7">
				<div className="text-center">
					<h1 className="block text-2xl font-bold text-gray-800">
						Sign in
					</h1>
					<p className="mt-2 text-sm text-gray-600">
						{"Don't"} have an account yet?{" "}
						<a
							className="text-blue-600 decoration-2 hover:underline font-medium cursor-pointer"
							onClick={() => setSignIn(false)}
						>
							Sign up here
						</a>
					</p>
				</div>
				<div className="mt-12">
					{/* Form */}
					<form>
						<div className="grid gap-y-4">
							{/* Form Group */}
							<div>
								<label
									htmlFor="email"
									className="block text-sm mb-2"
								>
									Email address
								</label>
								<div className="relative">
									<input
										type="email"
										id="email"
										name="email"
										className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
										required=""
										aria-describedby="email-error"
									/>
									<div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
										<svg
											className="size-5 text-red-500"
											width={16}
											height={16}
											fill="currentColor"
											viewBox="0 0 16 16"
											aria-hidden="true"
										>
											<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
										</svg>
									</div>
								</div>
								<p
									className="hidden text-xs text-red-600 mt-2"
									id="email-error"
								>
									Please include a valid email address so we
									can get back to you
								</p>
							</div>
							{/* End Form Group */}
							{/* Form Group */}
							<div>
								<div className="flex justify-between items-center">
									<label
										htmlFor="password"
										className="block text-sm mb-2"
									>
										Password
									</label>
									<a
										className="text-sm text-blue-600 decoration-2 hover:underline font-medium"
										href="../examples/html/recover-account.html"
									>
										Forgot password?
									</a>
								</div>
								<div className="relative">
									<input
										type="password"
										id="password"
										name="password"
										className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
										required=""
										aria-describedby="password-error"
									/>
									<div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
										<svg
											className="size-5 text-red-500"
											width={16}
											height={16}
											fill="currentColor"
											viewBox="0 0 16 16"
											aria-hidden="true"
										>
											<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
										</svg>
									</div>
								</div>
								<p
									className="hidden text-xs text-red-600 mt-2"
									id="password-error"
								>
									8+ characters required
								</p>
							</div>
							{/* End Form Group */}
							<button
								type="submit"
								className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none mt-12"
							>
								Sign in
							</button>
						</div>
					</form>
					{/* End Form */}
				</div>
			</div>
		</div>
	);
}
