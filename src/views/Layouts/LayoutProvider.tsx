import { Outlet, Link } from 'react-router-dom';

const STYLES = {
  // Outer container with responsive padding and background color that differs from inner container
  // Uses flex layout to center inner container both vertically and horizontally
  OuterContainer: 'min-h-screen w-full bg-slate-100 flex items-center justify-center p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8 2xl:p-10',

  // Inner container with max width for large screens, white background and rounded corners
  // Uses flex column layout to stack header, main and footer
  InnerContainer: 'w-full max-w-[1920px] h-screen flex flex-col bg-white rounded-xl shadow-xl overflow-hidden',

  // Header fixed at top with responsive padding and font sizes
  Header: 'w-full bg-gray-200 px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 flex items-center justify-between',

  // Main content area that fills remaining space between header and footer
  // Has overflow scroll when content is too large
  Main: 'flex-1 w-full overflow-y-auto px-2 sm:px-4 md:px-6 lg:px-8 py-4',

  // Footer fixed at bottom with responsive sizing
  Footer: 'w-full mt-auto bg-base-200',

  // Navigation bar inside footer with responsive spacing
  Navbar: 'navbar justify-between px-2 sm:px-4 md:px-6 lg:px-8',
  NavbarCenter: 'navbar-center mx-auto',

  // Navigation items with responsive text and padding sizes
  // Added hover effects for better interactivity
  NavbarItem:
    'btn btn-ghost text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl px-1 sm:px-2 md:px-3 lg:px-4 py-1 sm:py-2 hover:bg-base-300 transition-colors',
};

export const LayoutProvider = () => {
  return (
    <div className={STYLES.OuterContainer}>
      <div className={STYLES.InnerContainer}>
        {/* TODO: Add Banner Container */}

        <header className={STYLES.Header}>
          <h1>Ari Health</h1>
          <button className="btn btn-sm">Login</button>
        </header>

        <main className={STYLES.Main}>
          {/* TODO: Add ToastContainer */}
          <Outlet />
        </main>

        <footer className={STYLES.Footer} role="navigation">
          <div className={STYLES.Navbar}>
            <div className={STYLES.NavbarCenter}>
              <Link to="/" className={STYLES.NavbarItem}>
                Home
              </Link>
              <Link to="/wallet" className={STYLES.NavbarItem}>
                Wallet
              </Link>
              <Link to="/profile" className={STYLES.NavbarItem}>
                Profile
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
