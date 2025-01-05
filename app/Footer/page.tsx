import React from "react";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto text-center space-y-4">
                {/* Branding */}
                <div className="text-lg font-semibold">
                    &copy; {new Date().getFullYear()} Saidimu Stephen. All rights reserved.
                </div>

                {/* Contact Information */}
                <div className="text-sm space-y-2">
                    <p>Email: <a href="mailto:stevensaidimu@gmail.com" className="text-blue-400 hover:underline">stevensaidimu@gmail.com</a></p>
                    <p>Phone 1: <a href="tel:+254115391213" className="hover:underline">+254115391213</a></p>
                    <p>Phone 2: <a href="tel:+254769029838" className="hover:underline">+254769029838</a></p>
                    <p>Location: Nairobi, Kenya</p>
                </div>

                {/* WhatsApp Link */}
                <div>
                    <a
                        href="https://wa.me/254115391213" // WhatsApp API: Replace the number with your WhatsApp number in international format
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-full inline-flex items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 mr-2"
                        >
                            <path d="M16.98 15.82c-.23-.12-1.37-.67-1.58-.75-.21-.07-.37-.12-.53.12-.15.24-.61.75-.75.9-.14.15-.28.17-.52.05-.24-.12-1.02-.38-1.94-1.21-.72-.64-1.21-1.42-1.36-1.66-.15-.24-.02-.37.1-.5.1-.1.24-.28.36-.42.12-.14.17-.24.26-.4.09-.16.05-.3-.02-.42-.07-.12-.53-1.27-.72-1.73-.19-.45-.37-.4-.53-.4-.14 0-.3-.01-.45-.01-.15 0-.4.05-.61.3-.21.24-.8.77-.8 1.88s.82 2.18.93 2.33c.12.15 1.61 2.46 3.9 3.45 1.38.59 1.92.64 2.58.54.42-.06 1.37-.56 1.57-1.1.2-.53.2-.99.14-1.1-.06-.11-.21-.17-.44-.29ZM12.04 0C5.41 0 0 5.41 0 12.05c0 2.12.56 4.19 1.61 6.01L.05 24l5.96-1.56A12.01 12.01 0 0 0 12.04 24c6.63 0 12.05-5.42 12.05-12.05C24.09 5.42 18.67 0 12.04 0Zm0 22.03c-1.94 0-3.84-.52-5.49-1.5l-.39-.23-3.55.93.95-3.46-.25-.36A9.94 9.94 0 0 1 2.02 12C2.02 6.5 6.54 2 12.04 2c5.49 0 9.97 4.5 9.97 10.03 0 5.52-4.48 10-9.97 10Z" />
                        </svg>
                        Chat on WhatsApp
                    </a>
                </div>

                {/* Social Links (Optional) */}
                <div className="flex justify-center space-x-4">
                    <a
                        href="https://www.linkedin.com/in/saidimu-stephen-687903192/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/Saidimu-Stephen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
