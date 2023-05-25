import PartSelection from "./components/PartSelection/PartSelection";
import Part1 from "./parts/part1/Part1";
import Part2 from "./parts/part2/Part2";
import { Route, Routes } from "react-router-dom";
import Part3 from "./parts/part3/Part3";
import Part4 from "./parts/part4/Part4";
import Part5 from "./parts/part5/Part5";
import Part6 from "./parts/part6/part6";

export enum Path {
    Home = "/",
    Part1 = "/part1",
    Part2 = "/part2",
    Part3 = "/part3",
    Part4 = "/part4",
    Part5 = "/part5",
    Part6 = "/part6",
}

function App() {
    const getRoute = (path: Path) => {
        switch (path) {
            case Path.Home:
            case Path.Part1:
            case Path.Part2:
                return path.toString();
            case Path.Part3:
            case Path.Part4:
            case Path.Part5:
            case Path.Part6:
                return `${path.toString()}/:treeItemId?`;
        }
    };

    return (
        <div>
            <Routes>
                <Route path={getRoute(Path.Home)} element={<PartSelection />} />
                <Route path={getRoute(Path.Part1)} element={<Part1 />} />
                <Route path={getRoute(Path.Part2)} element={<Part2 />} />
                <Route path={getRoute(Path.Part3)} element={<Part3 />} />
                <Route path={getRoute(Path.Part4)} element={<Part4 />} />
                <Route path={getRoute(Path.Part5)} element={<Part5 />} />
                <Route path={getRoute(Path.Part6)} element={<Part6 />} />
            </Routes>
        </div>
    );
}

export default App;
