"use client";

import { SignedIn, useUser, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

function Header() {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between p-5">
      {user && (
        <h1 className="text-2xl font-bold">
          {user?.firstName}
          {`'s`} Space
        </h1>
      )}

      {/* Breadcrumbs */}
      <div>
        <SignedOut>
            <SignInButton />
        </SignedOut>

        <SignedIn>
            <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Header;
