import { ExternalLink } from "lucide-react";

export const TomatoanusNames = () => {
  const entries = [
    {
      url: "https://www.youtube.com/watch?v=eO9Nm7zfpKw",
      title: "How speedrunners beat RollerCoaster Tycoon 2 in 18 minutes (SPEEDRUN EXPLAINED)",
      name: "The janky joystick"
    },
    {
      url: "https://www.youtube.com/watch?v=cS4sz_UcqKg",
      title: "How speedrunners beat every boss in Dark Souls in under an hour (SPEEDRUN EXPLAINED - All Bosses)",
      name: "The overcooked French fry"
    },
    {
      url: "https://www.youtube.com/watch?v=EQbBHg-lfHw",
      title: "All \"Romances\" + Any% in Fallout: New Vegas by tomatoanus in 40:02 - AGDQ 2025",
      name: "tomatoangus - the G is silent",
      duplicate: "Duplicate of Fallout Anthology by tomatoanus in 2:16:21 - AGDQ2020"
    },
    {
      url: "https://www.youtube.com/watch?v=EvKach-Y7I4",
      title: "How speedrunners beat all story missions in The Simpsons: Hit & Run (SPEEDRUN EXPLAINED)",
      name: "The half-inch hunk"
    },
    {
      url: "https://www.youtube.com/watch?v=VoIHVi_LYLg",
      title: "Speedrunning to sleep with everyone in Fallout New Vegas in 2024 (SPEEDRUN EXPLAINED - World Record)",
      name: "The little tripod"
    },
    {
      url: "https://www.youtube.com/watch?v=wu8wIQ6fyHY",
      title: "How speedrunners beat Cuphead in under 28 minutes (SPEEDRUN EXPLAINED - Any%)",
      name: "The limp drumstick"
    },
    {
      url: "https://www.youtube.com/watch?v=YHK0Ox_iTWM",
      title: "How speedrunners beat Half-Life 2 in under 38 minutes (SPEEDRUN EXPLAINED - Any% No Voidclip)",
      name: "Wittle Wiener Wielder"
    },
    {
      url: "https://www.youtube.com/watch?v=_LWVu7w6NSg",
      title: "How speedrunners beat Baldur's Gate 3 in under 4 minutes (SPEEDRUN EXPLAINED - Any%)",
      name: "The phlegm chugger"
    },
    {
      url: "https://www.youtube.com/watch?v=ePBOcZqvYrI",
      title: "How speedrunners beat Outer Wilds in under 8 minutes (SPEEDRUN EXPLAINED - Any%)",
      name: "The seepage king"
    },
    {
      url: "https://www.youtube.com/watch?v=Edd6FwMQzh0",
      title: "How speedrunners beat Starfield in just over 30 minutes (SPEEDRUN EXPLAINED - New Game)",
      name: "The frog's cloaca"
    },
    {
      url: "https://www.youtube.com/watch?v=hToXhkxR5Kg",
      title: "How speedrunners beat Half-Life in 26 minutes (SPEEDRUN EXPLAINED - Scriptless)",
      name: "Richard Skinny"
    },
    {
      url: "https://www.youtube.com/watch?v=TDQENHje3ag",
      title: "How speedrunners beat Tony Hawk's Underground in 32 minutes (SPEEDRUN EXPLAINED - Any%)",
      name: "The dribbling tip"
    },
    {
      url: "https://www.youtube.com/watch?v=c4Gv-De1drg",
      title: "How speedrunners beat Alien: Isolation in 22 minutes (SPEEDRUN EXPLAINED - Any%)",
      name: "Millimeter Peter"
    },
    {
      url: "https://www.youtube.com/watch?v=cN9iV9drNcU",
      title: "How a world record speedrunner beats Super Mario Odyssey in under an hour (SPEEDRUN EXPLAINED Any%)",
      name: "Pizza nips"
    },
    {
      url: "https://www.youtube.com/watch?v=dDK7R-IlQ0Q",
      title: "How speedrunners beat every boss in Control in under 55 minutes (SPEEDRUN EXPLAINED - All Bosses)",
      name: "The miniature member"
    },
    {
      url: "https://www.youtube.com/watch?v=fOSYnHelFe8",
      title: "Speedrun of Hollow Knight (SPEEDRUN EXPLAINED - Any% [No Major Glitches])",
      name: "The migraine giver"
    },
    {
      url: "https://www.youtube.com/watch?v=48fN933ILxA",
      title: "How speedrunners adopt a baby in Fallout: New Vegas (SPEEDRUN EXPLAINED)",
      name: "Dongus Minimus",
      duplicate: "Duplicate of Speedrun to be a pirate in Fallout 4 (SPEEDRUN EXPLAINED)"
    },
    {
      url: "https://www.youtube.com/watch?v=rZjBHmgkBb4",
      title: "How speedrunners beat HITMAN 3 in 5 minutes (SPEEDRUN EXPLAINED - Silent Assassin, Suit Only)",
      name: "Petite Peckerino"
    },
    {
      url: "https://www.youtube.com/watch?v=kXb3lpjhQMw",
      title: "How speedrunners beat Portal 2 in under an hour (SPEEDRUN EXPLAINED - Any% (No SLA))",
      name: "The human embodiment of curdled milk"
    },
    {
      url: "https://www.youtube.com/watch?v=Hozoz9Cv9TE",
      title: "How speedrunners beat HITMAN 2 in under 10 minutes (Silent Assassin, Suit Only - SPEEDRUN EXPLAINED)",
      name: "Weakest Willy"
    },
    {
      url: "https://www.youtube.com/watch?v=XztDN3ej3sU",
      title: "How speedrunners beat Portal in just 5 minutes (SPEEDRUN EXPLAINED - Any% Out of Bounds)",
      name: "Miniscule Dongaloo"
    },
    {
      url: "https://www.youtube.com/watch?v=N_baY6VV44s",
      title: "How speedrunners beat BioShock 2 in under 50 minutes (SPEEDRUN EXPLAINED - Any%)",
      name: "Dinky Joe Johnson"
    },
    {
      url: "https://www.youtube.com/watch?v=vt_F6ZSC2Pg",
      title: "How speedrunners beat Elden Ring in under 5 minutes (SPEEDRUN EXPLAINED - Any%)",
      name: "Shriveled Salami"
    },
    {
      url: "https://www.youtube.com/watch?v=EFmyL7-8MKg",
      title: "How speedrunners beat BioShock in under 30 minutes (SPEEDRUN EXPLAINED - Any%)",
      name: "The five-balled miracle baby"
    },
    {
      url: "https://www.youtube.com/watch?v=wFawJ9v2GI8",
      title: "How speedrunners beat Subnautica in under 30 minutes (SPEEDRUN EXPLAINED - Any%)",
      name: "Don't capitalize my name"
    },
    {
      url: "https://www.youtube.com/watch?v=hdWjxfdUWLs",
      title: "Speedrun to get pregnant in Fallout 4 (SPEEDRUN EXPLAINED)",
      name: "The Air Bud of Speedrunning / The Below-the-Belt shrimp",
      duplicate: "Partial duplicate of Speedrun of Fallout: New Vegas w/ New Glitch (SPEEDRUN EXPLAINED - Any%)"
    },
    {
      url: "https://www.youtube.com/watch?v=JhWRSip4kqE",
      title: "How speedrunners beat Demon's Souls in 45 minutes (SPEEDRUN EXPLAINED - Any%)",
      name: "The reason why my friends have another group chat"
    },
    {
      url: "https://www.youtube.com/watch?v=_kqXGKalKwI",
      title: "How speedrunners beat Dark Souls III in 35 minutes (SPEEDRUN EXPLAINED - Any% No TearDrop Glitch)",
      name: "The soft stump"
    },
    {
      url: "https://www.youtube.com/watch?v=HP_U6hYKDXs",
      title: "How speedrunners beat Bloodborne in under 30 minutes (SPEEDRUN EXPLAINED - Any%)",
      name: "Popcorn Peenie"
    },
    {
      url: "https://www.youtube.com/watch?v=sWbsxzfwEs4",
      title: "How speedrunners beat HITMAN (2016) in 10 minutes (Silent Assassin, Suit Only - SPEEDRUN EXPLAINED)",
      name: "Taygaloo Cat"
    },
    {
      url: "https://www.youtube.com/watch?v=Qm7Uf2xf_h8",
      title: "How speedrunners beat DEATHLOOP in 17 minutes (SPEEDRUN EXPLAINED - Any%)",
      name: "The greatest regret of my parents"
    },
    {
      url: "https://www.youtube.com/watch?v=K4ip3yWQvZ0",
      title: "How speedrunners beat Dark Souls II in under 15 minutes (SPEEDRUN EXPLAINED - Any%)",
      name: "Pipsqueak Johnson"
    },
    {
      url: "https://www.youtube.com/watch?v=BADKudlcV30",
      title: "How speedrunners beat Dishonored 2 in 20 minutes (SPEEDRUN EXPLAINED - Any%, Emily)",
      name: "Richard Tiny"
    },
    {
      url: "https://www.youtube.com/watch?v=BL6j76H7Xpk",
      title: "How speedrunners beat Skyrim in just over 20 minutes (SPEEDRUN EXPLAINED)",
      name: "Lil Shafty"
    },
    {
      url: "https://www.youtube.com/watch?v=b9OvZn2eITo",
      title: "Speedrun of Dark Souls (SPEEDRUN EXPLAINED - Any%)",
      name: "Big Bush Little Mushroom"
    },
    {
      url: "https://www.youtube.com/watch?v=tGBVjJ9NZwA",
      title: "Speedrun to get married in Stardew Valley (SPEEDRUN EXPLAINED)",
      name: "The One-Second Wonder"
    },
    {
      url: "https://www.youtube.com/watch?v=-AizsPlpTnc",
      title: "Speedrun of Fallout 4 VR (SPEEDRUN EXPLAINED - World Record)",
      name: "The speedrunning equivalent of a horse girl"
    },
    {
      url: "https://www.youtube.com/watch?v=m19Py9K_yUI",
      title: "Speedrun to eat a baby in Fallout 3 (SPEEDRUN EXPLAINED)",
      name: "Needlepeen",
      duplicate: "Duplicate of Speedrun of DOOM (2016) (SPEEDRUN EXPLAINED - Any%)"
    },
    {
      url: "https://www.youtube.com/watch?v=23_1uqeLCGE",
      title: "Speedrun of Titanfall 2 (SPEEDRUN EXPLAINED - Any%)",
      name: "The human equivalent of a wet band-aid"
    },
    {
      url: "https://www.youtube.com/watch?v=r3iprXTtXzI",
      title: "Speedrunning to bone in Cyberpunk 2077 (SPEEDRUN EXPLAINED)",
      name: "Dongus Minimus",
      duplicate: "Duplicate of Speedrun to be a pirate in Fallout 4 (SPEEDRUN EXPLAINED)"
    },
    {
      url: "https://www.youtube.com/watch?v=vg00Tip9flI",
      title: "Speedrun of Breath of the Wild (SPEEDRUN EXPLAINED - Any%)",
      name: "Microscope Required"
    },
    {
      url: "https://www.youtube.com/watch?v=ASm42DNN4ds",
      title: "Speedrun of DOOM Eternal (SPEEDRUN EXPLAINED - Any%)",
      name: "The reason why my Mom cries herself to sleep"
    },
    {
      url: "https://www.youtube.com/watch?v=yOMKljWdCIE",
      title: "How are speedrun glitches found?",
      name: "The One-Inch Wonder"
    },
    {
      url: "https://www.youtube.com/watch?v=-VFgizBWjFI",
      title: "How speedrunners beat Fallout 4 in 35 minutes (SPEEDRUN EXPLAINED - Any%)",
      name: "The Air Bud of Speedrunning",
      duplicate: "Duplicate of Speedrun of Fallout: New Vegas w/ New Glitch (SPEEDRUN EXPLAINED - Any%)"
    },
    {
      url: "https://www.youtube.com/watch?v=6B1u5bhO-HI",
      title: "Speedrun of SpongeBob SquarePants: Battle for Bikini Bottom (SPEEDRUN EXPLAINED - 100%)",
      name: "The one pump chump"
    },
    {
      url: "https://www.youtube.com/watch?v=ehtAl1RMrfI",
      title: "Speedrun of Mirror's Edge (SPEEDRUN EXPLAINED - Any%)",
      name: "The reason why the big man stays upstairs"
    },
    {
      url: "https://www.youtube.com/watch?v=vUpdHkz2t7M",
      title: "Speedrun of Ocarina of Time (SPEEDRUN EXPLAINED - Any%)",
      name: "The reason why my father left"
    },
    {
      url: "https://www.youtube.com/watch?v=-skT_seCjys",
      title: "Speedrun of Sekiro: Shadows Die Twice (SPEEDRUN EXPLAINED - Shura Ending)",
      name: "Needlepeen",
      duplicate: "Duplicate of Speedrun of DOOM (2016) (SPEEDRUN EXPLAINED - Any%)"
    },
    {
      url: "https://www.youtube.com/watch?v=6ekogf10P-c",
      title: "Fallout Anthology by tomatoanus in 2:16:21 - AGDQ2020",
      name: "tomatoangus - the G is silent"
    },
    {
      url: "https://www.youtube.com/watch?v=5zMMaVlbhXc",
      title: "Speedrun to get laid in Fallout 4 (SPEEDRUN EXPLAINED)",
      name: "The voice trying to tell you that you're in a coma"
    },
    {
      url: "https://www.youtube.com/watch?v=FfHqG2naKnY",
      title: "Speedrun of The Outer Worlds (SPEEDRUN EXPLAINED - Any%)",
      name: "The Air Bud of Speedrunning",
      duplicate: "Duplicate of Speedrun of Fallout: New Vegas w/ New Glitch (SPEEDRUN EXPLAINED - Any%)"
    },
    {
      url: "https://www.youtube.com/watch?v=bj6d4sA5I5c",
      title: "Speedrun of Untitled Goose Game (SPEEDRUN EXPLAINED - Any%)",
      name: "The least funny person on the Internet"
    },
    {
      url: "https://www.youtube.com/watch?v=j-jSW0V9qXo",
      title: "Speedrun of The Elder Scrolls IV: Oblivion (SPEEDRUN EXPLAINED - No Out-of-Bounds)",
      name: "Dongus Minimus",
      duplicate: "Duplicate of Speedrun to be a pirate in Fallout 4 (SPEEDRUN EXPLAINED)"
    },
    {
      url: "https://www.youtube.com/watch?v=5gxl0YkDgHs",
      title: "How speedrunners beat Prey (2017) in under 7 minutes (SPEEDRUN EXPLAINED - Any%)",
      name: "My Dad's biggest disappointment"
    },
    {
      url: "https://www.youtube.com/watch?v=PdpZ43Wdoi4",
      title: "Speedrun of Dishonored (SPEEDRUN EXPLAINED - Any%)",
      name: "A knock-off 'Burger King foot lettuce' guy"
    },
    {
      url: "https://www.youtube.com/watch?v=ALUkiInHuZU",
      title: "Speedrun of DOOM (2016) (SPEEDRUN EXPLAINED - Any%)",
      name: "Needlepeen"
    },
    {
      url: "https://www.youtube.com/watch?v=U6elxbBlH7c",
      title: "Speedrun to be a pirate in Fallout 4 (SPEEDRUN EXPLAINED)",
      name: "Dongus Minimus"
    },
    {
      url: "https://www.youtube.com/watch?v=ap2NNVLaYH0",
      title: "Speedrun of Fallout: New Vegas w/ New Glitch (SPEEDRUN EXPLAINED - Any%)",
      name: "The Air Bud of Speedrunning"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-zinc-100">Every One of Tomatoanus's Names</h1>
        <p className="text-zinc-400 text-sm">September 25, 2025</p>
        <p className="text-zinc-300 italic">Dedicated to tomatoanus, also known as...</p>
      </div>
      
      <div className="border-t border-zinc-700 pt-6">
        <div className="space-y-4">
          {entries.map((entry, index) => (
            <div key={index} className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50 hover:bg-zinc-800/70 transition-colors">
              <div className="space-y-2">
                <a 
                  href={entry.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2 text-zinc-100 hover:text-red-400 transition-colors"
                >
                  <span className="font-medium leading-tight">{entry.title}</span>
                  <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                
                <div className="text-red-300 font-mono text-sm italic pl-2 border-l-2 border-red-400/30">
                  "{entry.name}"
                </div>
                
                {entry.duplicate && (
                  <div className="text-xs text-zinc-500 pl-2 border-l-2 border-zinc-600">
                    {entry.duplicate}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const metadata = {
  title: "Every One of Tomatoanus's Names",
  date: "September 25, 2025"
};

export default TomatoanusNames;