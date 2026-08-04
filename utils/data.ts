export type TeamMember = {
    name: string
    role: string
    image: string
    bio: string
}

export const team: TeamMember[] = [
    {
        name: 'Luz',
        role: 'Owner',
        image: '/images/luz.jpeg',
        bio: 'A master hair colorist with over 20 years of experience in the beauty industry. I started my career in 2000 after graduating from the Academia de Belleza Juanito in Tuluá, Colombia. I specialize in balayage, color correction, and haircuts, with a passion for enhancing my clients’ natural beauty. I hold a cosmetology license and stay updated on the latest trends to deliver exceptional results. After moving to the U.S. nine years ago, I’ve continued building my reputation as a skilled stylist. For the past two years, I’ve proudly owned my own salon, where I provide personalized services tailored to every client’s needs.',
    },
    {
        name: 'Kimberly',
        role: 'Stylist',
        image: '/images/kim.jpeg',
        bio: 'After moving to Florida in 2019 I was versed in the world of fashion and beauty. I decided to attend Florida academy and pursue my passion for it. It’s vital to me to stay educated on today’s trend in order to give each client their desired look. I truly believe in educating my clients on products and maintenance for their hair care needs in order for them to maintain the achieved look from the chair to their home. Outside of work quality time with my family and friends is one of my favorite ways to spend my free time. I also love shopping, beaching, and traveling! Most of all i’m more than excited to get to know you in my chair!',
    },
    {
        name: 'Lizbeth',
        role: 'Junior Stylist',
        image: '/images/asis.jpeg',
        bio: 'My name is Lizbeth Polanco. I’ve been a hairstylist for a few months. I graduated from Fort Myers Technical College at the beginning of 2024, and since then, I’ve been doing blowouts, hair washing, and continuing to learn and grow in my craft. The reason I wanted to become a hairstylist is that, as a kid, I always had a passion for hair and loved the idea of creating fun colors for clients.',
    },
    {
        name: 'Gabby',
        role: 'Stylist',
        image: '/images/gabby.jpeg',
        bio: 'Hi, I’m Gabrielle! I’m a beginner stylist and proud graduate of the Aveda Institute in Fort Myers, excited to continue growing behind the chair and building my career in the beauty industry. I’m passionate about all things blonde, dimensional, and bold — from bright blondes to lived-in color transformations that help my clients feel confident and beautiful.',
    },
]

export const data = {
    services: [
        { id: 1, name: 'Bangs', price: '$10', isOpen: false },
        { id: 2, name: "Women's haircur", price: '$50', isOpen: false },
        { id: 3, name: "Women's haircut & Blow-Dry", price: '$65', isOpen: false },
        { id: 4, name: "Men's Haircut", price: '$35', isOpen: false },
        { id: 5, name: "Blow-Out and style", price: '$40', isOpen: false },
        { id: 6, name: "Child's (under 10) Haircut and Style", price: '$35', isOpen: false },
        { id: 7, name: 'Iron Service', price: '$25', isOpen: false },
        { id: 8, name: 'Special Occasions / Up-Dos', price: '$75', isOpen: false },
        { id: 9, name: 'Tinsel', price: 'Starting at $3', isOpen: false },
        { id: 10, name: 'Braid', price: '$15', isOpen: false },
        { id: 11, name: 'Conditioning Treatment', price: '$40', isOpen: false },
        { id: 12, name: 'Vegan Treament minerals out', price: '$45', isOpen: false }
    ],
    cc: [
        { id: 18, name: 'Extra Bowl', price: '$35', isOpen: false },
        { id: 19, name: 'Mens Color', price: '$70', isOpen: false },
        { id: 20, name: 'Full Color', price: 'Starting at $100', isOpen: false },
        { id: 21, name: 'Touch up Color', price: 'Starting at $75', isOpen: false },
        { id: 22, name: 'Express Color', price: '$40', isOpen: false },
        { id: 23, name: 'Color Correction', price: 'Starting at $120', isOpen: false },
        { id: 24, name: 'Lowlights', price: '$90', isOpen: false },
        { id: 25, name: 'Relaxer - Full', price: '$120', isOpen: false },
        { id: 26, name: 'Extra Time', price: '$25.00', isOpen: false },
        { id: 27, name: 'Bleach and Tone', price: 'Starting at $140', isOpen: false },
        { id: 28, name: 'Toner', price: 'Starting at $40', isOpen: false },
        { id: 29, name: 'full highlights', price: '$170', isOpen: false },
        { id: 30, name: 'Partial Highlights', price: 'Starting at $130', isOpen: false },
        { id: 31, name: 'Individual Foil (5 Foils)', price: '$50', isOpen: false },
        { id: 32, name: 'Perm', price: '$130', isOpen: false },
        { id: 33, name: 'Balayage', price: 'Starting at $300', isOpen: false },
        { id: 34, name: 'Extensions - Implementation', price: '$180', isOpen: false }
    ],
    waxs: [
        { id: 35, name: 'Makeup - Application', price: '$50', isOpen: false },
        { id: 36, name: 'Makeup - Wedding', price: '$55', isOpen: false },
        { id: 37, name: 'Makeup - Analysis and Instruction', price: '$45', isOpen: false },
        { id: 38, name: 'Waxing - Brow Shaping', price: '$18', isOpen: false },
        { id: 39, name: 'Waxing - Full Face', price: '$40', isOpen: false },
        { id: 40, name: 'Waxing - Lips', price: '$10', isOpen: false },
        { id: 41, name: 'Waxing - Ears', price: '$10', isOpen: false },
        { id: 42, name: 'Waxing - Lip and Chin', price: '$20', isOpen: false },
        { id: 43, name: 'Waxing - Half Arms', price: '$30', isOpen: false }
    ],
    treatments: [
        { id: 13, name: 'Brazilian Blowout', price: '$350', isOpen: false },
        { id: 14, name: 'Botox', price: '$270', isOpen: false },
        { id: 15, name: 'Keratin Express', price: '$160', isOpen: false },
        { id: 16, name: 'Keratin Smooth', price: '$270', isOpen: false },
        { id: 17, name: 'Keratin Maximum', price: '$350', isOpen: false }
    ],
}