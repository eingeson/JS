const prefix = import.meta.env.VITE_API_URL + "/api";

const Api = Object.freeze({
  faqs: prefix + "/faq",
  testimonials: prefix + "/testimonials",
});

export default Api;
