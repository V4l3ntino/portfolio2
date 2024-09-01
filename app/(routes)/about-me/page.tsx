import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import VisibleNotvisible from "@/components/visible-notvisible";

const About = () => {
    return ( 
        <main className="flex min-h-screen  flex-col items-center justify-between p-12 max-w-screen-2xl mx-auto ">
            <CounterServices />
            <div className="text-white absolute w-[100%] max-w-[1024px] -translate-y-11 translate-x-11 md:-translate-y-32 md:-translate-x-1">
                <VisibleNotvisible
                    text="TRAYECTORIA"
                    inputTime={3000}
                    outputTime={1000}
                />
            </div>
            <div className="bg-gradient-to-b from-slate-50/15 p-3 mb-96 to-transparent  flex-crow w-[100%] max-w-[1024px] rounded z-10 h-[600px] relative backdrop-blur-lg ">
                <TimeLine />
            </div>
        </main>
     );
}
 
export default About;