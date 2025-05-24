import type IComic from "../../domain/Comic/Comic";
import { Comic } from "../../domain/Comic/Comic";
import type IComicsRepository from "../../domain/Comic/ComicRepository";

export default class MockComicsRepository implements IComicsRepository {
    private comics: Comic[] = [
        {
            id: 1,
            title: "Spider-Man: Into the Multiverse",
            logo: "/images/1.jpg",
            description: "Spider-Man faces new threats from across dimensions in a race to protect the multiverse.",
            seriesId: 2
        },
        {
            id: 2,
            title: "Iron Man: Armor Reforged",
            logo: "/images/2.webp",
            description: "Tony Stark rebuilds his iconic suit and his legacy after a devastating betrayal.",
            seriesId: 3
        },
        {
            id: 3,
            title: "Captain America: Sentinel of Liberty",
            logo: "/images/3.jpg",
            description: "Steve Rogers must defend his values against rising authoritarian forces.",
            seriesId: 4
        },
        {
            id: 4,
            title: "Black Widow: Red Ledger",
            logo: "/images/4.jpg",
            description: "A deadly past resurfaces as Natasha Romanoff is hunted by her former handlers.",
            seriesId: 1
        },
        {
            id: 5,
            title: "Thor: Hammerfall",
            logo: "/images/5.webp",
            description: "Thor must reclaim Mjolnir and confront a forgotten evil from Asgard's ancient days.",
            seriesId: 2
        },
        {
            id: 6,
            title: "Hulk: Rage Unbound",
            logo: "/images/6.jpg",
            description: "Bruce Banner loses control, becoming more powerful—and dangerous—than ever.",
            seriesId: 3
        },
        {
            id: 7,
            title: "Doctor Strange: Sorcerer Supreme",
            logo: "/images/7.jpg",
            description: "Doctor Strange protects reality itself as magical rifts tear the world apart.",
            seriesId: 4
        },
        {
            id: 8,
            title: "Black Panther: King of Wakanda",
            logo: "/images/8.webp",
            description: "T'Challa defends Wakanda from a technological uprising led by an old rival.",
            seriesId: 1
        },
        {
            id: 9,
            title: "Wolverine: Weapon X",
            logo: "/images/9.jpg",
            description: "Wolverine returns to his roots, uncovering dark truths about Weapon X.",
            seriesId: 2
        },
        {
            id: 10,
            title: "Daredevil: Born Again",
            logo: "/images/10.jpg",
            description: "Matt Murdock fights for his soul and his city when an old enemy returns.",
            seriesId: 3
        },
        {
            id: 11,
            title: "Deadpool: Maximum Carnage",
            logo: "/images/11.jpg",
            description: "Deadpool goes off the rails in a hilarious, ultra-violent confrontation with Carnage.",
            seriesId: 4
        },
        {
            id: 12,
            title: "Hawkeye: Last Shot",
            logo: "/images/12.jpg",
            description: "Clint Barton teams up with Kate to stop a rogue SHIELD operation.",
            seriesId: 1
        },
        {
            id: 13,
            title: "Scarlet Witch: Hexed",
            logo: "/images/13.jpg",
            description: "Wanda Maximoff struggles with chaos magic while searching for redemption.",
            seriesId: 2
        },
        {
            id: 14,
            title: "Vision: Future Imperfect",
            logo: "/images/14.jpg",
            description: "Vision explores his humanity in a dystopian future ruled by machines.",
            seriesId: 3
        },
        {
            id: 15,
            title: "Ant-Man and the Quantum Realm",
            logo: "/images/15.jpg",
            description: "Scott Lang explores mysterious dimensions to rescue a lost friend.",
            seriesId: 4
        },
        {
            id: 16,
            title: "Guardians of the Galaxy: Cosmic Outlaws",
            logo: "/images/16.webp",
            description: "The Guardians are hunted by cosmic bounty hunters after stealing from the Nova Corps.",
            seriesId: 1
        },
        {
            id: 17,
            title: "Loki: Trickster's Game",
            logo: "/images/17.jpg",
            description: "Loki manipulates gods and mortals alike in a gambit for ultimate power.",
            seriesId: 2
        },
        {
            id: 18,
            title: "Ms. Marvel: Rising Star",
            logo: "/images/18.webp",
            description: "Kamala Khan navigates fame, family, and foes as Jersey City's hero.",
            seriesId: 3
        },
        {
            id: 19,
            title: "Moon Knight: Midnight Mission",
            logo: "/images/19.webp",
            description: "Moon Knight battles supernatural threats that haunt his every waking moment.",
            seriesId: 4
        },
        {
            id: 20,
            title: "Shang-Chi: Master of Kung Fu",
            logo: "/images/20.jpg",
            description: "Shang-Chi confronts his father's deadly legacy in a battle for identity.",
            seriesId: 1
        }
    ];

    async getList(page: number): Promise<IComic[]> {
        const pageSize = 10;
        const start = (page - 1) * pageSize;
        return this.comics.slice(start, start + pageSize);
    }

    async getById(id: number): Promise<IComic> {
        const comic = this.comics.find(c => c.id === id);
        if (!comic) {
            throw new Error(`Comic with id ${id} not found`);
        }
        return comic;
    }

    async getSeries(seriesId: number): Promise<IComic[]> {
        return this.comics.filter(c => c.seriesId === seriesId);
    }
}