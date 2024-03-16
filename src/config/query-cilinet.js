import { QueryClient } from "react-query";

export const clinet = new QueryClient({
    defaultOptions:{queries:{refetchOnWindowFocus:false}}
})