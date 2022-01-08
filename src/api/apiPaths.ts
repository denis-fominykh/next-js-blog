const API_PATHS = {
  PEOPLE: {
    _: '/people',
    BY_ID: (id: string) => `/people/${id}`,
  },
  PLANETS: {
    _: '/planets',
    BY_ID: (id: string) => `/planets/${id}`,
  },
  STARSHIPS: {
    _: '/starships',
    BY_ID: (id: string) => `/starships/${id}`,
  },
} as const;

export default API_PATHS;
