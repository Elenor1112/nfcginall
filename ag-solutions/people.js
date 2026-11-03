/* ════════════════════════════════════════════════════════════════
   AG SOLUTIONS CARDS — one entry per person.
   The key is the end of their URL:  id.elenor-host.com/ag-solutions/mohamed
   Leave a field as "" (or leave it out) to hide that row / icon.
   ════════════════════════════════════════════════════════════════ */
window.DEFAULT_PERSON = "mohamed";   // shown at /ag-solutions
window.ORG = "جمعية العاملين بالعقارات بالسادات";   // saved as the company in "Save Contact"

window.PEOPLE = {
  mohamed: {
    name: "محمد مجدي الصاوي السيد صلاح",
    nameLines: ["محمد مجدي الصاوي", "السيد صلاح"],   // how the name breaks on the card
    title: "رئيس مجلس الإدارة",
    avatar: "assets/mohamed.webp",             // portrait image (4:5)
    phone: "+201000000000",                    // TODO: real number — used for the call link
    phoneLabel: "+20 100 000 0000",            // TODO: real number — shown on the card
    whatsapp: "+201000000000",                 // TODO: real number — WhatsApp chat icon
    email: "",                                 // e.g. "name@example.com"
    website: "",                               // e.g. "https://example.com/"
    websiteLabel: "",                          // e.g. "example.com"
    facebook: "",                              // e.g. "https://www.facebook.com/page"
    instagram: "",
  },
};
