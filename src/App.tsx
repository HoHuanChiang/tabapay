import PartSelection from "./components/PartSelection/PartSelection";
import Part1 from "./parts/part1/Part1";
import Part2 from "./parts/part2/Part2";
import { Route, Routes } from "react-router-dom";
import Part3 from "./parts/part3/Part3";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<PartSelection />} />
                <Route path="/part1" element={<Part1 />} />
                <Route path="/part2" element={<Part2 />} />
                <Route path="/part3/:treeItemId?" element={<Part3 />} />
            </Routes>
        </div>
    );
}

export default App;
