import { createContext, useState, ReactNode } from "react";


export const SessionContext = createContext<{ sessionId: string | null; setSessionID: (id: string) => void } | null>(null);
export function SessionProvider({ children }: { children: ReactNode }) {
    const [sessionId, setSessionID] = useState<string | null>(null);

return (
    <>
        <SessionContext.Provider value={{ sessionId, setSessionID }}>
        {children}
        </SessionContext.Provider>
    </>
)

}

