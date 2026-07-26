export type Partner = {
  name: string;
  alt: string;
  src: string;
  url: string;
};

/** Partner logos sourced from the live canopux.org marquee. */
export const partners: Partner[] = [
  {
    name: "IEEE",
    alt: "IEEE partner logo",
    src: "/partners/ieee.jpeg",
    url: "https://www.indocrypt2025.in/",
  },
  {
    name: "IEEE InGARSS 2025",
    alt: "IEEE InGARSS 2025 partner logo",
    src: "/partners/ieee-ingarss-2025.jpeg",
    url: "https://www.ingarss-2025.in/",
  },
  {
    name: "IIIT Bhubaneswar",
    alt: "IIIT Bhubaneswar partner logo",
    src: "/partners/iiit-bhubaneswar.png",
    url: "https://www.indocrypt2025.in/",
  },
  {
    name: "JJ Institute of Science",
    alt: "JJ Institute of Science partner logo",
    src: "/partners/jj-institute.png",
    url: "https://www.jjinstitute.in/",
  },
  {
    name: "KKR Mahila Higher Secondary School",
    alt: "KKR Mahila Higher Secondary School partner logo",
    src: "/partners/kkr-mahila.png",
    url: "https://www.kkrmahilahsschool.in/",
  },
  {
    name: "Made in Cart",
    alt: "Made in Cart partner logo",
    src: "/partners/made-in-cart.png",
    url: "https://www.madeincart.in/",
  },
  {
    name: "MATH SUPERHIGHWAY",
    alt: "MATH SUPERHIGHWAY partner logo",
    src: "/partners/math-superhighway.png",
    url: "https://www.mathsuperhighway.com/",
  },
  {
    name: "New Darshan Jewellery",
    alt: "New Darshan Jewellery logo",
    src: "/partners/new-darshan-jewellery.png",
    url: "https://www.newdarshanjewellery.com/",
  },
  {
    name: "Priyaanshii Tasteworks Pvt. Ltd.",
    alt: "Priyaanshii Tasteworks Pvt. Ltd. partner logo",
    src: "/partners/priyaanshii-tasteworks.png",
    url: "https://www.priyaanshiitasteworks.in/",
  },
  {
    name: "Ship My Parcel",
    alt: "Ship My Parcel partner logo",
    src: "/partners/ship-my-parcel.png",
    url: "https://www.shipmyparcel.in/",
  },
  {
    name: "Sri Jagannath Traders",
    alt: "Sri Jagannath Traders logo",
    src: "/sri-jagannath-traders-logo-black.png",
    url: "https://www.srijagannathtraders.in/",
  },
].sort((a, b) => a.name.localeCompare(b.name));
