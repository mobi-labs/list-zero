import {AppStatus} from "@/widget/layout";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <div className="w-full h-full border-[1px] border-grey-scale-grey-05 border-solid">
            <AppStatus/>
            {children}
        </div>
    );
}