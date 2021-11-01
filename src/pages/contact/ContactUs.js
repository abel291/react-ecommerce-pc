import { LocationMarkerIcon, MailIcon, PhoneIcon } from "@heroicons/react/solid"
import BannerWithTitle from "../../components/BannerWithTitle"
import Button from "../../components/Button"
const ContactUs = () => {
    return (
        <div>
            <BannerWithTitle title="Contáctenos"  image="/img/banner-page1.jpg" />
            <div className="container ">
                
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-5/12 py-content my-8  lg:my-0 lg:mr-8">
                        <div className="lg:border border-gray-200 rounded-md lg:p-6 space-y-6 lg:text-sm">
                            <span className="font-bold text-2xl lg:text-lg ">Encuéntranos aquí</span>
                            <div className="flex items-stretch space-x-2 text-sm">
                                <div className="text-gray-600 border border-gray-200 rounded-md p-2 flex items-center h-10 w-10">
                                    <LocationMarkerIcon className="h-full w-full" />
                                </div>
                                <div className="">
                                    <div className="font-bold">Email</div>
                                    <div className=" font-light">example@example.com</div>
                                </div>
                            </div>
                            <div className="flex items-stretch space-x-2 text-sm">
                                <div className="text-gray-600 border border-gray-200 rounded-md p-2 flex items-center h-10 w-10">
                                    <MailIcon className="h-full w-full" />
                                </div>
                                <div className="">
                                    <div className="font-bold">Address</div>
                                    <div className=" font-light">PO Box 14122 Collins Street West.Victoria</div>
                                </div>
                            </div>
                            <div className="flex items-stretch space-x-2 text-sm">
                                <div className="text-gray-600 border border-gray-200 rounded-md p-2 flex items-center h-10 w-10">
                                    <PhoneIcon className="h-full w-full" />
                                </div>
                                <div className="">
                                    <div className="font-bold">Phone</div>
                                    <div className=" font-light">+57 311 9588 412</div>
                                </div>
                            </div>
                            <div>
                                <img src="/img/contact-us.png" alt="" className="rounded-md" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-7/12  py-content">
                        <div>
                            <h3 className="font-bold text-2xl mb-6 ">Ponerse en contacto</h3>
                            <div>
                                <form className="space-y-5" action="">
                                    <div className="flex  space-x-2">
                                        <div className="w-1/2 ">
                                            <label className="text-sm font-medium" htmlFor="name">
                                                Nombre (requerido)
                                            </label>
                                            <input
                                                type="text"
                                                className="mt-2 px-5 py-3 w-full text-sm border border-gray-100"
                                                placeholder="Ingrese su nombre"
                                                name="name"
                                            />
                                        </div>
                                        <div className="w-1/2">
                                            <label className="text-sm font-medium" htmlFor="email">
                                                Email (requerido)
                                            </label>
                                            <input
                                                type="text"
                                                className="mt-2 px-5 py-3 w-full text-sm border border-gray-100"
                                                placeholder="Ingrese su email"
                                                name="email"
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <label className="text-sm font-medium" htmlFor="subject">
                                            Asunto (requerido)
                                        </label>
                                        <input
                                            type="text"
                                            className="mt-2 px-5 py-3 w-full text-sm border border-gray-100"
                                            placeholder="Ingrese el asunto"
                                            name="subject"
                                        />
                                    </div>
                                    <div className="">
                                        <label className="text-sm font-medium block" htmlFor="message">
                                            Mensaje (requerido)
                                        </label>
                                        <textarea className="w-full mt-2 block" name="message" id="" rows="3"></textarea>
                                    </div>
                                    <Button >Enviar Mensaje</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
