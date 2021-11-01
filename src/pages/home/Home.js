import ListCardProducts from "../../components/ListCardProducts"
import CarouselBanners from "../../components/CarouselBanners"
import usePage from "../../hooks/usePage"
import CarouselHome from "./CarouselHome"
import OnLoadingPage from "../../components/OnLoadingPage"
import { useData } from "../../hooks/useData"
import PageError from "../../components/PageError"
import BannerSection from "../../components/BannerSection"
// import Payment from "./Payment"

const Home = () => {
    const { isLoading, error, data: home } = usePage("home")
    const {data} = useData()

    if (isLoading) return <OnLoadingPage />

    if (error) return <PageError />

    return (
        <>
            <div className="container">
                <div className="py-content grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 ">
                    <div className="col-span-1 md:col-span-2 ">
                        <CarouselBanners images={home.banners} path="/img/home/" />
                    </div>

                    <div>
                        <img
                            className="h-full mx-auto object-cover w-full rounded-lg overflow-hidden"
                            src="/img/home/banner-home-9.jpg"
                            alt="carousel banner-home-9"
                        />
                    </div>
                    <div>
                        <img
                            className="h-full mx-auto object-cover w-full rounded-lg overflow-hidden"
                            src="/img/home/banner-home-10.jpg"
                            alt="carousel banner-home-10"
                        />
                    </div>
                </div>
                {/* <div className="py-content">
                    <Payment/>
                </div> */}

                <div className="py-content space-y-4">
                    <h2 className="font-semibold text-2xl">Destacados</h2>
                    <div className="">
                        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-6 ">
                            {home.featured.map((product) => (
                                <ListCardProducts key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="py-content ">
                    <BannerSection img="/img/home/banner-seccion-1.jpg" />
                </div>

                <div className="py-content space-y-4">
                    <h2 className="font-semibold text-2xl">Categorias</h2>
                    <CarouselHome items={data.categories} typeItem="categories" />
                </div>

                <div className="py-content space-y-4">
                    <h2 className="font-semibold text-2xl">Los recién llegados</h2>
                    <div className=" py-2 relative">
                        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6 ">
                            {home.new.map((item) => (
                                <ListCardProducts key={item.id} product={item} productNew={true} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="py-content ">
                    <BannerSection img="/img/home/banner-seccion-2.jpg" />
                </div>

                <div className="py-content space-y-4">
                    <h2 className="font-semibold text-2xl">Top marcas</h2>
                    <CarouselHome items={data.brands} typeItem="brands" />
                </div>
            </div>
        </>
    )
}

export default Home
