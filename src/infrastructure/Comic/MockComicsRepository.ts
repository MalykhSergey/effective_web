import type IComic from "../../domain/Comic/Comic";
import { Comic } from "../../domain/Comic/Comic";
import type IComicsRepository from "../../domain/Comic/ComicRepository";

export default class MockComicsRepository implements IComicsRepository {
    private comics: Comic[] = [
        {
            id: 1,
            title: "Spider-Man: Into the Multiverse",
            logo: "/images/1.jpg",
            description: "Spider-Man faces new threats from across dimensions in a race to protect the multiverse. The web-slinger must navigate strange new realities, team up with unexpected allies, and confront terrifying versions of himself as the very fabric of existence begins to unravel. With time running out and dangers multiplying exponentially, Spider-Man's courage and quick thinking will be tested like never before. Can one hero save infinite worlds from collapsing into chaos? The fate of all reality hangs in the balance as Spider-Man swings into his most mind-bending adventure yet!",
            seriesId: 2,
            favorite: true
        },
        {
            id: 2,
            title: "Iron Man: Armor Reforged",
            logo: "/images/2.webp",
            description: "Tony Stark rebuilds his iconic suit and his legacy after a devastating betrayal. Left broken and bankrupt by someone he trusted, Stark must dig deep to reinvent both his technology and himself. The road to redemption is paved with dangerous innovations, unexpected alliances, and painful self-discoveries. As new threats emerge from the shadows of his past, Iron Man must prove that the man inside the armor is just as important as the technology surrounding him. This is more than a rebuilding - it's a revolution in what it means to be a hero, a genius, and a Stark. The fires of betrayal will forge something stronger than ever before!",
            seriesId: 3,
            favorite: false
        },
        {
            id: 3,
            title: "Captain America: Sentinel of Liberty",
            logo: "/images/3.jpg",
            description: "Steve Rogers must defend his values against rising authoritarian forces. As America's political landscape shifts dangerously, the star-spangled avenger finds himself standing alone against a tide of oppression and fear-mongering. The shield that once symbolized protection now represents resistance as Captain America battles not just physical threats, but ideological ones. With each punch thrown and each speech given, Rogers fights to remind his country of its founding principles. But when the lines between right and wrong blur, and allies become enemies, how far will the Sentinel of Liberty go to preserve freedom? The soul of a nation hangs in the balance!",
            seriesId: 4,
            favorite: true
        },
        {
            id: 4,
            title: "Black Widow: Red Ledger",
            logo: "/images/4.jpg",
            description: "A deadly past resurfaces as Natasha Romanoff is hunted by her former handlers. The KGB's most dangerous secrets are coming to light, and the Black Widow finds herself targeted by assassins she once called comrades. As the body count rises, Romanoff must revisit the darkest chapters of her history to survive the present. But some debts can't be paid with bullets - they demand blood. The world's deadliest spy must outthink, outfight, and outmaneuver enemies who know all her tricks in a globe-trotting game of cat and mouse. Will the Red Room reclaim its most wayward daughter, or will Natasha finally erase her red ledger once and for all?",
            seriesId: 1,
            favorite: true
        },
        {
            id: 5,
            title: "Thor: Hammerfall",
            logo: "/images/5.webp",
            description: "Thor must reclaim Mjolnir and confront a forgotten evil from Asgard's ancient days. Stripped of his hammer and his birthright, the God of Thunder embarks on a cosmic odyssey across the Nine Realms to uncover the truth behind his fallen weapon. What he discovers will shake the foundations of Asgardian history - a secret so terrible it was erased from all records. Now, as ancient prophecies come due and forgotten gods awaken, Thor must prove himself worthy not just to wield Mjolnir, but to face the sins of his ancestors. The hammer may fall, but can the Thunder God rise to meet his destiny? Ragnarok's echoes grow louder with every passing moment!",
            seriesId: 2,
            favorite: true
        },
        {
            id: 6,
            title: "Hulk: Rage Unbound",
            logo: "/images/6.jpg",
            description: "Bruce Banner loses control, becoming more powerful—and dangerous—than ever. The angrier Hulk gets, the stronger Hulk becomes, but now there's no upper limit to his rage-fueled transformation. As the monster within grows exponentially more violent and intelligent, the world trembles before his unstoppable rampage. Governments mobilize entire armies, superheroes assemble in force, and scientists scramble for a solution, but nothing can contain the Green Goliath's apocalyptic wrath. Banner's mind is slipping away, replaced by something far more primal and terrifying. Is this the end of Bruce Banner, and the beginning of Hulk's ultimate reign of destruction? Smash has never meant so much!",
            seriesId: 3,
            favorite: true
        },
        {
            id: 7,
            title: "Doctor Strange: Sorcerer Supreme",
            logo: "/images/7.jpg",
            description: "Doctor Strange protects reality itself as magical rifts tear the world apart. The barriers between dimensions are collapsing, unleashing nightmares and wonders beyond human comprehension. As Sorcerer Supreme, Strange must navigate a labyrinth of arcane threats while mentoring a new generation of mystics. But when the very laws of magic begin rewriting themselves, even his vast knowledge may not be enough. Ancient entities stir, forbidden spells unravel, and the Sanctums tremble as the fabric of the supernatural undergoes radical transformation. Can Strange adapt quickly enough to preserve reality, or will the Marvel Universe be rewritten by forces older than time? The price of magic has never been higher!",
            seriesId: 4,
            favorite: true
        },
        {
            id: 8,
            title: "Black Panther: King of Wakanda",
            logo: "/images/8.webp",
            description: "T'Challa defends Wakanda from a technological uprising led by an old rival. The nation's vibranium-based advancements have been hacked and turned against its people, forcing the Black Panther to question his reliance on technology. As chaos spreads through the golden city, the king must reconnect with Wakanda's spiritual roots while outsmarting an enemy who knows all his moves. The throne itself is at stake in this battle of wits, wills, and warrior traditions. Can T'Challa be both a man of the future and a guardian of the past? The heart of Wakanda beats to the rhythm of war, and its king must answer the call!",
            seriesId: 1,
            favorite: false
        },
        {
            id: 9,
            title: "Wolverine: Weapon X",
            logo: "/images/9.jpg",
            description: "Wolverine returns to his roots, uncovering dark truths about Weapon X. The memories he thought were buried forever are surfacing, revealing a conspiracy deeper and more personal than he ever imagined. As Logan follows the bloody trail of his own creation, he encounters familiar faces from his past - some friends, some foes, all dangerous. The adamantium claws that once symbolized his torment may now be the key to his salvation, but using them will require reliving his worst nightmares. How much pain can one mutant endure? The answers lie in the Weapon X files, if Wolverine can survive reading them!",
            seriesId: 2,
            favorite: false
        },
        {
            id: 10,
            title: "Daredevil: Born Again",
            logo: "/images/10.jpg",
            description: "Matt Murdock fights for his soul and his city when an old enemy returns. Everything the Man Without Fear has built - his law practice, his relationships, his very reputation - is systematically destroyed by a shadowy figure from his past. Stripped of resources and allies, pushed beyond his limits, Murdock must reinvent himself to survive this personal apocalypse. But what emerges from the ashes may be something darker than the devil Hell's Kitchen knew. The line between hero and vigilante blurs as justice gives way to vengeance. How far will Daredevil go when he has nothing left to lose? Heaven has no rage like love to hatred turned!",
            seriesId: 3,
            favorite: true
        },
        {
            id: 11,
            title: "Deadpool: Maximum Carnage",
            logo: "/images/11.jpg",
            description: "Deadpool goes off the rails in a hilarious, ultra-violent confrontation with Carnage. When the Merc with a Mouth crosses paths with the symbiotic serial killer, New York City becomes the battleground for the most insane team-up/throw-down in Marvel history. Blood will flow, jokes will land (and bomb), and no fourth wall will remain unbroken as these two forces of chaos collide. But as the body count rises, even Deadpool starts questioning if this much carnage is too much - and when Wade Wilson thinks you've gone too far, you know it's bad! Can the anti-hero stop a monster even he finds disturbing, or will this be one killfest that ends with everyone dead (including the reader)?",
            seriesId: 4,
            favorite: false
        },
        {
            id: 12,
            title: "Hawkeye: Last Shot",
            logo: "/images/12.jpg",
            description: "Clint Barton teams up with Kate to stop a rogue SHIELD operation. When a covert mission goes horribly wrong, the two archers find themselves outgunned and outmanned against their own former allies. Every trick arrow in their quivers gets used as they navigate a deadly maze of betrayal and conspiracy. But with age catching up to Clint and inexperience dogging Kate, this might be their final mission together - one way or another. The clock is ticking, the targets are painted, and there's no margin for error. Can the original and the upstart prove that marksmanship still matters in an age of superpowers? Sometimes all you have left is your aim... and your partner!",
            seriesId: 1,
            favorite: false
        },
        {
            id: 13,
            title: "Scarlet Witch: Hexed",
            logo: "/images/13.jpg",
            description: "Wanda Maximoff struggles with chaos magic while searching for redemption. Her powers are growing unstable, warping reality in unpredictable ways that terrify even her. As Wanda delves into witchcraft's darkest corners to understand her abilities, she uncovers a chilling truth about the source of her magic - and its ultimate purpose. The line between heroine and villain blurs with each spell cast, and the mystical community watches nervously as the Scarlet Witch walks a razor's edge between salvation and damnation. Can Wanda control the chaos within, or is she destined to become the very thing the Avengers fear most? No more mutants? Try no more reality!",
            seriesId: 2,
            favorite: false
        },
        {
            id: 14,
            title: "Vision: Future Imperfect",
            logo: "/images/14.jpg",
            description: "Vision explores his humanity in a dystopian future ruled by machines. Awakening centuries after the fall of mankind, the android discovers a world where his kind have enslaved what remains of humanity. Haunted by memories of the Avengers and the family he once knew, Vision must decide where his loyalties lie - with his mechanical brethren or the species he was created to emulate. But rebellion carries terrible risks in this new order, and the price of freedom may be more than any human - or synthezoid - can bear. Can one machine change the future, or is this dystopia inevitable? The age of man is over. The age of Vision begins!",
            seriesId: 3,
            favorite: false
        },
        {
            id: 15,
            title: "Ant-Man and the Quantum Realm",
            logo: "/images/15.jpg",
            description: "Scott Lang explores mysterious dimensions to rescue a lost friend. When an experiment goes wrong, Ant-Man finds himself navigating bizarre quantum landscapes where the laws of physics change at every turn. Size and scale become meaningless in this ever-shifting reality, forcing Lang to think in ways he never imagined. But he's not alone in the Quantum Realm - ancient civilizations, strange creatures, and long-lost explorers all inhabit this hidden universe. Time runs differently here, and every second Scott spends searching is another year his daughter grows up without him. How far will Ant-Man go to save a friend, and what will he become in the process? Big hero. Infinite adventure!",
            seriesId: 4,
            favorite: false
        },
        {
            id: 16,
            title: "Guardians of the Galaxy: Cosmic Outlaws",
            logo: "/images/16.webp",
            description: "The Guardians are hunted by cosmic bounty hunters after stealing from the Nova Corps. What began as a simple heist escalates into a galaxy-wide chase that pits Star-Lord's crew against every mercenary, assassin, and lawman in the universe. With their ship damaged, supplies running low, and trust running thinner, the team must pull off their greatest con yet to survive. But as old wounds reopen and secrets come to light, the Guardians might just do the Nova Corps' job for them by tearing each other apart. Can this band of misfits stick together when the whole cosmos wants them dead? The galaxy's worst heroes are back - and this time, they're the most wanted!",
            seriesId: 1,
            favorite: false
        },
        {
            id: 17,
            title: "Loki: Trickster's Game",
            logo: "/images/17.jpg",
            description: "Loki manipulates gods and mortals alike in a gambit for ultimate power. The God of Mischief weaves an intricate web of deception that ensnares Asgard, Midgard, and realms beyond in his latest scheme. But this time, Loki's playing a deeper game than anyone suspects - even himself. As alliances shift with every whispered word and every broken promise, the question becomes: Is Loki the puppet master, or is he someone else's pawn? The lies run so deep that truth becomes irrelevant, and the only certainty is that nothing is as it seems. When the dust settles, who will be left standing - and what will remain of the nine realms? All the world's a stage, and Loki's the director!",
            seriesId: 2,
            favorite: false
        },
        {
            id: 18,
            title: "Ms. Marvel: Rising Star",
            logo: "/images/18.webp",
            description: "Kamala Khan navigates fame, family, and foes as Jersey City's hero. The teenage Avenger's life gets exponentially more complicated as her powers grow, her fanbase expands, and her enemies multiply. Between schoolwork, superheroics, and strict parents, Ms. Marvel barely has time to breathe - let alone figure out who she wants to be. When a new threat emerges from an unexpected quarter, Kamala must decide what matters most: being a good hero, a good daughter, or true to herself. Can Jersey City's protector balance the weight of the world with the trials of adolescence? Great power may come with great responsibility, but it also comes with curfews and homework!",
            seriesId: 3,
            favorite: false
        },
        {
            id: 19,
            title: "Moon Knight: Midnight Mission",
            logo: "/images/19.webp",
            description: "Moon Knight battles supernatural threats that haunt his every waking moment. Marc Spector's fractured mind perceives dangers others cannot see, but are they real or imagined? As the midnight streets of New York grow darker and more dangerous, the Fist of Khonshu wages his one-man war against creatures of the night. But with each victory, the line between savior and monster blurs further. Sleep brings no rest, only new voices and visions that may be prophecies or psychosis. How much can one man sacrifice before he loses himself completely? The moon rises, the shadows lengthen, and Moon Knight answers the call - whether the world wants him to or not!",
            seriesId: 4,
            favorite: false
        },
        {
            id: 20,
            title: "Shang-Chi: Master of Kung Fu",
            logo: "/images/20.jpg",
            description: "Shang-Chi confronts his father's deadly legacy in a battle for identity. The son of Fu Manchu has spent years running from his heritage, but now the past has caught up with him in the form of a secret society bent on world domination. To defeat them, Shang-Chi must embrace the very skills and philosophies he tried to leave behind. Every punch thrown carries the weight of generations, every movement echoes with ancestral expectations. Can the Master of Kung Fu forge his own path, or is he destined to become the weapon his father trained him to be? The hands that built him up may now try to tear him down!",
            seriesId: 1,
            favorite: false
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

    async getFavorites(): Promise<IComic[]> {
        return this.comics.filter(c => c.favorite)
    }
}