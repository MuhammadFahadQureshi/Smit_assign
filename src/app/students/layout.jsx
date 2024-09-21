import NavBar from "./nav";

export default function RootLayout({ children }) {
    return (
        <div
        data-theme="night"
          className={` bg-white antialiased min-h-[100vh]`}
        >
            <NavBar />
          {children}
        </div>
    );
  }