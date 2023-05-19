import { StyledAppContainer } from "./App.styled";
import PartSelection from "./components/PartSelection/PartSelection";
import Part1 from "./parts/part1/Part1";
import Part2 from "./parts/part2/Part2";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <StyledAppContainer>
            <Routes>
                <Route path="/" element={<PartSelection />} />
                <Route path="/part1" element={<Part1 />} />
                <Route path="/part2" element={<Part2 />} />
            </Routes>
        </StyledAppContainer>
    );
}

export default App;
