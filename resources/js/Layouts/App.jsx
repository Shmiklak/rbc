import {router, usePage} from "@inertiajs/react";
import AnimatedBackground from "@/Components/AnimatedBackground.jsx";
import PageHeader from "@/Components/PageHeader.jsx";
import PageFooter from "@/Components/PageFooter.jsx";
import {useState} from "react";

const App = ({children}) => {
    const { auth } = usePage().props;
    const [transitioning, setTransitioning] = useState(false)
    router.on('start', () => {
        setTransitioning(true)
    })

    router.on('finish', () => {
        setTransitioning(false)
    })
    return (
        <div className="App">
            <AnimatedBackground/>
            <PageHeader auth={auth}/>
            <main className={transitioning ? "router-animation on" : "router-animation"}>
                <div className="container">
                    {children}
                </div>
            </main>
            <PageFooter/>
        </div>
    )
}

export default App;
