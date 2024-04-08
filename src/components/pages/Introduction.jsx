import BarChart from "../Chart/BarChart"
import PieChart from "../Chart/Doughnut"

const Introduction = () => {
    return (
        <div className="flex flex-wrap justify-center ">
            <p className="italic text-3xl mb-28">
                Catat terus pengeluaranmu, demi tujuan keuanganmu
            </p>
            <BarChart />
            <PieChart />
        </div>
    )
}

export default Introduction