import { Route, Routes } from "react-router-dom"
import { Test } from "./Test"

export const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/asd' element={<Test />} />
            </Routes>
        </>
    )
}
