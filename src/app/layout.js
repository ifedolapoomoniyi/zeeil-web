import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	weight: ["100", "300", "400", "500", "600", "700", "900"],
	subsets: ["latin"],
});

export const metadata = {
	title: "Zeeil Africa",
	description: "Zeeil Africa",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${poppins.className} $antialiased`}>
				{children}
			</body>
		</html>
	);
}
