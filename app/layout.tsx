import './globals.css';
import '../src/share/fonts/font.css'

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body
            className="w-[393px] h-[852px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">{children}</body>
        </html>
    );
}
