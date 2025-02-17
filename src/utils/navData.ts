const navItems = [
  {
    id: 1,
    title: "INTERNATIONAL",
    path: "/international",
    isActive: true,
    subMenu: [
      { id: 101, title: "Asia", path: "/international/asia" },
      { id: 102, title: "Europe", path: "/international/europe" },
      { id: 103, title: "Americas", path: "/international/americas" },
    ],
  },
  {
    id: 2,
    title: "NATIONAL",
    path: "/national",
    isActive: false,
    subMenu: [
      { id: 201, title: "Politics", path: "/national/politics" },
      { id: 202, title: "Economy", path: "/national/economy" },
      { id: 203, title: "Society", path: "/national/society" },
    ],
  },
  {
    id: 3,
    title: "SPORTS",
    path: "/sports",
    isActive: false,
    subMenu: [
      { id: 301, title: "Cricket", path: "/sports/cricket" },
      { id: 302, title: "Football", path: "/sports/football" },
      { id: 303, title: "Tennis", path: "/sports/tennis" },
    ],
  },
  {
    id: 4,
    title: "ENTERTAINMENT",
    path: "/entertainment",
    isActive: false,
    subMenu: [
      { id: 401, title: "Movies", path: "/entertainment/movies" },
      { id: 402, title: "Music", path: "/entertainment/music" },
      { id: 403, title: "Television", path: "/entertainment/tv" },
    ],
  },
  {
    id: 5,
    title: "FASHION",
    path: "/fashion",
    isActive: false,
    subMenu: [
      { id: 501, title: "Trends", path: "/fashion/trends" },
      { id: 502, title: "Designers", path: "/fashion/designers" },
      { id: 503, title: "Lifestyle", path: "/fashion/lifestyle" },
    ],
  },
  {
    id: 6,
    title: "CORPORATE",
    path: "/corporate",
    isActive: false,
    subMenu: [
      { id: 601, title: "Business", path: "/corporate/business" },
      { id: 602, title: "Markets", path: "/corporate/markets" },
      { id: 603, title: "Economy", path: "/corporate/economy" },
    ],
  },
  {
    id: 7,
    title: "TECHNOLOGY",
    path: "/technology",
    isActive: false,
    subMenu: [
      { id: 701, title: "Gadgets", path: "/technology/gadgets" },
      { id: 702, title: "Apps", path: "/technology/apps" },
      { id: 703, title: "Reviews", path: "/technology/reviews" },
    ],
  },
  {
    id: 8,
    title: "TRAVEL",
    path: "/travel",
    isActive: false,
    subMenu: [
      { id: 801, title: "Destinations", path: "/travel/destinations" },
      { id: 802, title: "Guides", path: "/travel/guides" },
      { id: 803, title: "Reviews", path: "/travel/reviews" },
    ],
  },
  {
    id: 9,
    title: "DIPLOMACY",
    path: "/diplomacy",
    isActive: false,
    subMenu: [
      { id: 901, title: "Foreign Affairs", path: "/diplomacy/foreign-affairs" },
      { id: 902, title: "Treaties", path: "/diplomacy/treaties" },
      { id: 903, title: "Relations", path: "/diplomacy/relations" },
    ],
  },
  {
    id: 10,
    title: "FINANCE",
    path: "/finance",
    isActive: false,
    subMenu: [
      { id: 1001, title: "Markets", path: "/finance/markets" },
      { id: 1002, title: "Stocks", path: "/finance/stocks" },
      { id: 1003, title: "Banking", path: "/finance/banking" },
    ],
  },
];

export default navItems;
