// import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../pages/Account/UserContext";

const FooterWhite = () => {
    const { user } = useUser();
    const sections = [
        {
            title: "Destination Cities",
            items: [
                {
                    subtitle: "Asia",
                    links: [
                        "Bali Packages", "Bangkok Packages", "Boracay Island Packages", "Cebu Packages",
                        "Chiang Mai Packages", "Hanoi Packages", "Ho Chi Minh City Packages", "Tokyo Packages"
                    ],
                },
                {
                    subtitle: "Europe",
                    links: ["London Packages", "Paris Packages"],
                },
                {
                    subtitle: "Middle East",
                    links: ["Dubai Packages"],
                },
            ],
        },
        {
            title: "Countries & Territories",
            items: [
                {
                    subtitle: "Africa",
                    links: ["Morocco Packages", "South Africa Packages"],
                },
                {
                    subtitle: "Americas",
                    links: ["Brazil Packages", "United States Packages", "Mexico Packages"],
                },
                {
                    subtitle: "Asia",
                    links: ["China Packages", "India Packages", "Japan Packages", "Vietnam Packages"],
                },
                {
                    subtitle: "Europe",
                    links: ["France Packages", "Germany Packages", "Spain Packages"],
                },
            ],
        },
        {
            title: "Destination Guides",
            items: [
                {
                    subtitle: "Asia",
                    links: ["Bali Guide", "Bangkok Guide", "Tokyo Guide"],
                },
                {
                    subtitle: "Europe",
                    links: ["Paris Guide"],
                },
                {
                    subtitle: "Middle East",
                    links: ["Dubai Guide"],
                },
            ],
        },
        {
            title: "Support & Policies",
            items: [
                {
                    subtitle: "Policies",
                    links: [
                        <Link key="privacy" to="/policy/privacy-policy">Privacy Policy</Link>,
                        <Link key="terms" to="/policy/terms-conditions">Terms & Conditions</Link>,
                    ],
                },
                {
                    subtitle: "Support",
                    links: [
                        <Link key="contact" to="/contact">Support</Link>,
                    ],
                },
                {
                    subtitle: "Contact Info",
                    links: [
                        <div key="address" className='inline-block mb-3 capitalize  text-sm'>
                            <span className="text-primary font-bold ">
                                Address :
                            </span>
                            {user?.admin?.address_1?.toLowerCase()} {user?.admin?.address_2?.toLowerCase()} {user?.admin?.city} {user?.admin?.pincode}
                        </div>,
                        <div key="mobile" className='inline-flex mb-3 items-center gap-1  text-sm'>
                            <span className="text-primary font-bold">
                                Phone :
                            </span>
                            {user?.admin?.mobile}
                        </div>,
                        <div key="email" className='inline-flex gap-1 items-center  text-sm'>
                            <span className="text-primary font-bold">
                                Email :
                            </span>
                            {user?.admin?.email}
                        </div>,
                    ],
                },
            ],
        },
    ];

    return (
        <footer className="bg-[#e6e6e6] text-gray-700 py-10 border-t border-gray-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 px-6">
                {sections.map((section, idx) => (
                    <div key={idx}>
                        <h2 className="font-semibold text-[var(--primary)] border-b-2 border-[var(--primary)] inline-block text-lg mb-4">
                            {section.title}
                        </h2>
                        {section.items.map((item, subIdx) => (
                            <div key={subIdx} className="mb-4">
                                <h3 className="text-sm font-medium text-gray-600 mb-1">{item.subtitle}</h3>
                                <ul className="space-y-1">
                                    {item.links.map((link, linkIdx) => (
                                        <li key={linkIdx} className="*:text-sm">
                                            {typeof link === "string" ? (
                                                <a
                                                    href="#"
                                                    className="text-sm text-gray-500 hover:text-[var(--primary)] transition-colors"
                                                >
                                                    {link}
                                                </a>
                                            ) : (
                                                link
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default FooterWhite;
