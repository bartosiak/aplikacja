import { TopBar } from "../TopBar/TopBar";
import { MainContent } from "../MainContent/MainContent";

export function Layout({ children }) {
    return (
        <>
            <MainContent>
                <TopBar />
                {children}
            </MainContent>
        </>
    );
}
