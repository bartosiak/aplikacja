import { TopBar } from "../components/TopBar/TopBar";
import { MainContent } from "../components/MainContent/MainContent";

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
