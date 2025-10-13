import { useEffect, useState } from "react";
import "./WhatsAppFloating.css";

export default function WhatsAppFloating() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const onScroll = () => {
            // Oculta el botón si se desea en scroll hacia abajo (opcional)
            setShow(true);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        show && (
            <a
                href="https://api.whatsapp.com/send/?phone=5491156474793&text&type=phone_number&app_absent=0"
                className="whatsapp-floating d-flex align-items-center "
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chatear por WhatsApp"
            >
                <i className="bi bi-whatsapp fs-4"></i>
            </a>
        )
    );
}