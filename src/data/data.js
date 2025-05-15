import browncircle from "/browncircle.svg";
import greencircle from "/green.svg";
import purplecircle from "/purple.svg";

const colors = [
  { name: "brown", image: browncircle },
  { name: "green", image: greencircle },
  { name: "purple", image: purplecircle },
];
export const products = [
  {
    id: 1,
    image: "/blacktee.png",
    title: "T-shirt with Tape Details",
    rating: 4.5,
    price: "$120",
  },
  {
    id: 2,
    image: "/skinnyjeans.svg",
    title: "Skinny Fit Jeans",
    rating: 3.5,
    price: "$240",
    originalPrice: "$260",
    discount: "-20%",
  },
  {
    id: 3,
    image: "/klechati.svg",
    title: "Checkered Shirt",
    rating: 4.5,
    price: "$180",
  },
  {
    id: 4,
    image: "/baseballtee.svg",
    title: "Sleeve Striped T-Shirt",
    rating: 4.5,
    price: "$130",
    originalPrice: "$160",
    discount: "-30%",
  },
  {
    id: 5,
    image: "/orangetshirt.png",
    title: "COURAGE GRAPHIC T-SHIRT",
    rating: 4,
    price: "$130",
  },
  {
    id: 6,
    image: "/browntshirt.png",
    title: "One Life Graphic T-shirt",
    rating: 4.5,
    price: "$260",
    originalPrice: "$300",
    discount: "-40%",
  },
  {
    id: 7,
    image: "/polo.png",
    title: "Polo with Contrast Trims",
    rating: 4.0,
    price: "$212",
    originalPrice: "$242",
    discount: "-20%",
  },
  {
    id: 8,
    image: "/graphic.png",
    title: "Gradient Graphic T-shirt",
    rating: 3.5,
    price: "$145",
  },
];
export const brands = [
  {
    src: "./versace.svg",
    alt: "Versace",
    w: 166,
    h: 33,
    mobileScale: 1.8,
  },
  { src: "./zara.svg", alt: "Zara", w: 91, h: 38, mobileScale: 1.8 },
  {
    src: "./gucci.svg",
    alt: "Gucci",
    w: 156,
    h: 36,
    mobileScale: 1.8,
  },

  {
    src: "./prada.svg",
    alt: "Prada",
    w: 194,
    h: 32,
    mobileScale: 1.8,
  },

  { src: "./prada.svg", alt: "prada", w: 91, h: 38, mobileScale: 1.8 },
  {
    src: "./versace.svg",
    alt: "Versace",
    w: 166,
    h: 33,
    mobileScale: 1.8,
  },
];

export const testimonials = [
  {
    rating: "./5.svg",
    title: "5 stars",
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    rating: "./5.svg",
    title: "5 stars",
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    rating: "./5.svg",
    title: "5 stars",
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    rating: "./4.svg",
    title: "4 stars",
    name: "simon L.",
    text: "good fashion. would buy and recommend 100%, it is a way to the fashion",
  },
  {
    rating: "./3.5.svg",
    title: "3.5 stars",
    name: "M. A.",
    text: "WHO MADE THIS SITE",
  },
  {
    rating: "./5.svg",
    title: "5 stars",
    name: "Carmelo A.",
    text: "too bad ive never won a ring, but i gave my all .",
  },
];
