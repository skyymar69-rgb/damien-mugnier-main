export function WhatsappButton() {
  return (
    <a
      href="https://wa.me/33628453288?text=Bonjour%20Damien%2C%20je%20souhaite%20un%20devis."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Damien Mugnier sur WhatsApp"
      title="Discuter sur WhatsApp"
      className="fixed right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110 focus-visible:scale-110 md:h-14 md:w-14 bottom-[calc(env(safe-area-inset-bottom)+10rem)] md:bottom-6"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current md:h-7 md:w-7" aria-hidden>
        <path d="M20.52 3.48A11.88 11.88 0 0 0 12.07 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.14 1.6 5.95L0 24l6.32-1.66a11.9 11.9 0 0 0 5.74 1.46h.01c6.57 0 11.9-5.33 11.9-11.9a11.83 11.83 0 0 0-3.45-8.42ZM12.07 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.75.98 1-3.66-.23-.38a9.85 9.85 0 0 1-1.51-5.25c0-5.46 4.45-9.9 9.9-9.9 2.65 0 5.13 1.03 7 2.9a9.84 9.84 0 0 1 2.9 7c0 5.46-4.44 9.9-9.91 9.9Zm5.43-7.41c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48a9.04 9.04 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01a1.1 1.1 0 0 0-.8.37c-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.11 4.51.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}
