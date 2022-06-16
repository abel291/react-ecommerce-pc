import React from 'react'
import { LocationMarkerIcon, MailIcon, PhoneIcon } from "@heroicons/react/solid"
const ContactAddress = () => {
    return (
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
                <img src="/img/contact-us/map.png" alt="" className="rounded-md" />
            </div>
        </div>
    )
}

export default ContactAddress