export interface ProductData {
  id: string
  name: string
  category: string
  description: string
  img: string
  alt: string
  tags: string[]
  prices: { Standard: number; Deluxe: number; Premium: number }
  badge?: string
}

export const PRODUCTS: ProductData[] = [
  {
    id: '1',
    name: 'The Solstice Blend',
    category: 'Temporada',
    description: 'Una composición de temporada con flores frescas de la cosecha de esta semana, combinando colores cálidos y fragancias naturales del bosque.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYRn3IkwdMDncZ_Qspwq37vB42bNbQw-pce-ZtMPV2179BZtVJlxSvquaOpiec4rJGaZzeesd3aM7j4xRDnGPmud_YLyxpYFb7TuGuYM5OHfY9tcZnSBMDyNy_r57QVLgeZ77zW1hbwGTNiYmr_VKycU-Je5kVNYoLBokwibKCXJ3ogg_m3pjO_sdpPyFa9EaBNFTuriNMb3OnsXR18ADoSkzL1uhTf19yVX-f2PTU77BHuRIDs-Wqf2rWfxlpaAcCci4r0bmAzVo',
    alt: 'The Solstice Blend bouquet',
    tags: ['Temporada', 'Artesanal', 'Fresco'],
    prices: { Standard: 2750, Deluxe: 3500, Premium: 4200 },
  },
  {
    id: '2',
    name: 'Serene Grace',
    category: 'Condolencias',
    description: 'Lirios blancos y follaje suave para expresar condolencias con elegancia y respeto. Un arreglo discreto y eterno.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-0KEYDZ2ITewcJMkTl4JXtQ-MJFL54-bNyj0SqWfaeirT1bxRiBztiBlDr5WJc-P-ernSb1TtygBFXQXeOtd6hiPW6ZHbprUzg03q5H0zG6ZDYDOJYEIXvwVNBjMcKeOzvL7EVUgtgEExCaBkLTzoZbS5US1zVTLWNBWkcbTdqdibkNYbx2IBPIfkNQTyrT24b2IIq7vloNJqwT32Dw75drYdazNYFnX-nP92hBEUl25t0s_D1qbWTDLG6q28puHyz5OpDJ4IepM',
    alt: 'Serene Grace white lily arrangement',
    tags: ['Condolencias', 'Blanco', 'Follaje Premium'],
    prices: { Standard: 3900, Deluxe: 4800, Premium: 5900 },
  },
  {
    id: '3',
    name: 'Poppy Fields',
    category: 'Artesanal',
    description: 'Amapolas silvestres y hierbas aromáticas del campo, arregladas a mano con un estilo libre e improvisado.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsmsQuHJzKXJqE6PmkqMJame421vvl8LEAv67chVzmCBe3YfitfEo_pW_k6tAPsZgbuc0HqHBq42ZVTvADrPxmtI-Yy3qBdlk9kKQjb6BXF93WJ9n9cG6ALeXZYlJwqr8WcLQTUJxJZpzhc-Gn4HmcXpr08wLq_la5WN-dsGGTZw4j0UlLVDWgKZfvzUJwIILW41A3g79lqMirddzOWJlCeXYZtBZloMQ1zrfZ2plZoW9T1_dDbpNBPWSgQWOylIaQOdDntq9f28U',
    alt: 'Poppy Fields arrangement',
    tags: ['Artesanal', 'Silvestre', 'Primavera'],
    prices: { Standard: 3150, Deluxe: 4000, Premium: 4900 },
  },
  {
    id: '4',
    name: 'Eternal Harvest',
    category: 'Seco',
    description: 'Flores secas y preservadas de la cosecha de otoño. Un arreglo eterno que dura años sin perder su belleza natural.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDERbLiFlH15jpbsJu1gur0V1HMJKyBlmNqGzioDHz9ra7lOTTI3oJeY8g65CUNZVcxZ9ShkcvgXXoBA2XIva-TE5Def-oBi7ICzzvfQZ8Mpyp9shyRsafqIAz_3xapCnBTmUkpfEYyi4Gx-_5rwPCk5WtlaWi2r4t0vut1PNdBiPQthYNPPcaAl0Dy5F9rxxJhQ1sa5XlNNJeHbt6DItFFNYBi0RJ0f0mK1uSMXPwv8V5brpJ5wQtrK2Nfr6oe90D6A7YkJSKF4A0',
    alt: 'Eternal Harvest dried florals',
    tags: ['Seco', 'Eterno', 'Otoño'],
    prices: { Standard: 2200, Deluxe: 2900, Premium: 3600 },
  },
  {
    id: '5',
    name: 'Midnight Orchid',
    category: 'Aniversario',
    description: 'Orquídeas oscuras y follaje de lujo para celebrar aniversarios con una propuesta elegante y apasionada.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8oa-VzM8aywp1HkzdnMqKdS7OzrX4WrT8AwTX4P3pMC9n1CZhdz1qkRctn9-Lnajb9SX9RCfTkp_Zsv7wU8itdIsxJGTbZT4YVS3ETscPA7xniPTUfMVM_NSCMpTD_Qgqfyf9PtXQMSVpXtDxPdbrYQhYumLdg4OjvlZbS-RVOKiCNASNznn5Jy07KqTQld6S5u88n2GZowiPl2kq-iZ1Eidnhpp6BkK2Q0nmc3U3X4BhnQDgJfnbxVeicRde7RbMqMcUcIlJfLE',
    alt: 'Midnight Orchid arrangement',
    tags: ['Aniversario', 'Lujo', 'Orquídeas'],
    prices: { Standard: 4750, Deluxe: 5900, Premium: 7200 },
  },
  {
    id: '6',
    name: 'Desert Oasis',
    category: 'Vivo',
    description: 'Suculentas y cactus de diseño en maceta artesanal. Una pieza viva que decora por años con mínimo cuidado.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6F6bC90tnoNV7gB-bLyiDLFzXzJx3lTnYQIJ--zvjaK9dtBPqBPqLuyyEo35oJozQzPR573OF3k5Yw6uHtuulzeg1nlFGdYbosAfyi7dBYdNBIr0f4NMxcwnz4lGNhJLzCZV4rfUklTvdBQGGHIB8qWAjMvJ2fVcZyojXdxnKd_1nv51u97OZaEu0JzMZOKARiKZFcP0NVVM0vtT8OY2W3Zgl4qX5bfc3UEIIOEbxoccWL4p0hpiNeNIAFHIzlJclq5QH207oRVIUJvg',
    alt: 'Desert Oasis succulent garden',
    tags: ['Vivo', 'Suculentas', 'Moderno'],
    prices: { Standard: 1800, Deluxe: 2400, Premium: 3100 },
  },
  {
    id: 'verdant-solstice',
    name: 'Verdant Solstice',
    category: 'Temporada',
    badge: 'Limitado',
    description: 'Helechos de bosque, musgo y lirios combinados en una pieza artesanal que evoca los bosques del solsticio de verano.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbxKXeIVgWsAFSwx-TQFL6-E87FrlKk81aMO7tlzGClZeMTQSYrHM4gMbcex-F5AY-fSTosALcJh5K9Jcb3QznF1p5DYx9IBfaeuDM6ahdUScmYmtweRHUvI2ZyJxCxRBimgUrgCSlWAG_CTs3OQWeU6L6KrLrHTnt7k1msdlk0_hs9DkmcpBX4nu_bhylXE3pN85gXfLYFDZog2XKRAeZKmxX72ZbqE9HFq3v-tdBxouBofigm4HAKgnyApA_FuBImTi0CDd9JsE',
    alt: 'Arreglo de helechos y suculentas verdes en cerámica artesanal',
    tags: ['Temporada', 'Limitado', 'Follaje Premium'],
    prices: { Standard: 2800, Deluxe: 3600, Premium: 4500 },
  },
  {
    id: 'morning-mist',
    name: 'Morning Mist',
    category: 'Artesanal',
    description: 'Lirios blancos y eucalipto plateado en una composición serena que captura la tranquilidad de la mañana.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFLKbhQsxspz5ViKQgqQ9OTVnq0raLn7lMhGiqJcMIgN2J2Tn_ckE7eredkqVh90XFMLV9RQCNHjaLXlPZDgjXFK_tftmBIHZklx9dB2qTre-d5yVp4XxBLGTzF-rwj6LeHd5N4RiZX8riTvCEAD19FoX6b77MxYEVtrlxYNd7F8IMQuK2BNEluYGG-UtECP5knKrD3Q7hL0gY_JCGCGxpwDwvlnlX68tH80dtQqqtvOBz9YGW_fETCH1QmCXaEWrgE0_gF9JL9Ss',
    alt: 'Lirios blancos y eucalipto en florero de vidrio verde',
    tags: ['Artesanal', 'Blanco', 'Eucalipto'],
    prices: { Standard: 3900, Deluxe: 4800, Premium: 5800 },
  },
  {
    id: 'wild-moss',
    name: 'Wild Moss',
    category: 'Vivo',
    description: 'Suculentas sage y hiedra de bosque en un arreglo salvaje que trae la naturaleza a tu espacio interior.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjh3sODk1Mq1aMQ9aQrWmscTtis_xxWY4oI4SQ93NS0dNyXhOIV90EV0CpsR12bnB4f3Q97E79CRvGBNu3NUIpjrcYN5d620cwrrQ3C07JEY47jZXL7CBkxMzl_ieTYSS2mG-mA8AHvSuMQAxG5l-M1Cmk8dTO_kJ7jsBelGrgF0bY35J1dJ_fVtlzdbxBUUf3eiMmE-r1dOZiwvxizUv9YZT8R5bYFn7tCfCastct1muF4qbSj8ZzgU9Pq4IrCDJXMKxD-io',
    alt: 'Ramo artesanal de suculentas sage y hiedra en lino orgánico',
    tags: ['Vivo', 'Suculentas', 'Silvestre'],
    prices: { Standard: 3100, Deluxe: 3900, Premium: 4800 },
  },
]

export const findProduct = (id: string): ProductData =>
  PRODUCTS.find(p => p.id === id) ?? PRODUCTS[0]
