import { AiFillApi, AiFillDiscord } from "react-icons/ai";
import { GiBottleCap, GiJasmine } from "react-icons/gi";
import {
  LuBed,
  LuCog,
  LuFishSymbol,
  LuFolderArchive,
  LuHash,
  LuInfinity,
} from "react-icons/lu";

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="space-y-3">
        <div className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors">
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-pink-500 rounded-lg flex-shrink-0 flex items-center justify-center">
              <LuHash className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-base mb-1">
                <a
                  href="/projects/rgb-scale/index.html"
                  className="text-blue-400 hover:underline"
                >
                  hex colour scale
                </a>
              </h4>
              <p className="text-muted-foreground text-sm">
                An interactive hex colour scale, inspired by{" "}
                <a
                  href="https://xkcd.com/color/rgb/"
                  className="text-blue-400 hover:underline"
                >
                  xkcd
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors">
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-teal-500 rounded-lg flex-shrink-0 flex items-center justify-center">
              <GiJasmine className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-base mb-1">
                japanese letter game{" "}
                <a
                  href="https://github.com/yakasov/japanese-letter-game-android"
                  className="text-blue-400 hover:underline"
                >
                  android
                </a>{" "}
                <a
                  href="https://github.com/yakasov/japanese-letter-game-ios"
                  className="text-blue-400 hover:underline"
                >
                  ios
                </a>
              </h4>
              <p className="text-muted-foreground text-sm">
                A mobile game for learning the Hiragana alphabet. iOS version is
                more complete and was developed as part of my dissertation.
              </p>
            </div>
          </div>
        </div>

        <div className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors">
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex-shrink-0 flex items-center justify-center">
              <AiFillDiscord className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-base mb-1">
                discord bot{" "}
                <a
                  href="https://github.com/yakasov/bot-rewrite-3-js"
                  className="text-blue-400 hover:underline"
                >
                  javascript
                </a>{" "}
                <a
                  href="https://github.com/yakasov/bot-rewrite-4-ts"
                  className="text-blue-400 hover:underline"
                >
                  typescript
                </a>
              </h4>
              <p className="text-muted-foreground text-sm">
                A Discord bot written in Node.js. Originally this was written in
                Python, then was translated to Javascript, and has now being
                fully rebuilt in Typescript.
              </p>
            </div>
          </div>
        </div>

        <div className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors">
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex-shrink-0 flex items-center justify-center">
              <AiFillApi className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-base mb-1">
                <a
                  href="https://github.com/yakasov/UnleashedSignatureSigner"
                  className="text-blue-400 hover:underline"
                >
                  unleashed api signature signer
                </a>
              </h4>
              <p className="text-muted-foreground text-sm">
                A small C# program that generates the api-auth-signature
                required for use with the Unleashed API.
              </p>
            </div>
          </div>
        </div>

        <div className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors">
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-blue-300 rounded-lg flex-shrink-0 flex items-center justify-center">
              <LuFishSymbol className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-base mb-1">
                <a
                  href="https://yakasov.github.io/fisher/"
                  className="text-blue-400 hover:underline"
                >
                  fisher
                </a>
              </h4>
              <p className="text-muted-foreground text-sm">
                A new fishing incremental game, with improved UI and gameplay
                elements compared to orbiter-game.
              </p>
            </div>
          </div>
        </div>

        <div className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors">
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex-shrink-0 flex items-center justify-center">
              <LuInfinity className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-base mb-1">
                <a
                  href="https://yakasov.github.io/incremental-mass-rewritten-plus/"
                  className="text-blue-400 hover:underline"
                >
                  incremental mass rewritten... plus
                </a>
              </h4>
              <p className="text-muted-foreground text-sm">
                My personal tweaks and edits to MrRedShark77's Incremental Mass
                Rewritten.
              </p>
            </div>
          </div>
        </div>

        <div className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors">
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-cyan-500 rounded-lg flex-shrink-0 flex items-center justify-center">
              <LuFolderArchive className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-base mb-1">
                <a
                  href="https://github.com/yakasov/teams-cache-extractor"
                  className="text-blue-400 hover:underline"
                >
                  microsoft teams cache extractor
                </a>
              </h4>
              <p className="text-muted-foreground text-sm">
                A cache extractor for Microsoft Teams. Retrieves all media,
                although not messages. Useful if you plan on abandoning
                Microsoft Teams.
              </p>
            </div>
          </div>
        </div>

        <div className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors">
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-emerald-500 rounded-lg flex-shrink-0 flex items-center justify-center">
              <LuBed className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-base mb-1">
                <a
                  href="https://github.com/yakasov/NoBedTooFar"
                  className="text-blue-400 hover:underline"
                >
                  minecraft: nobedtoofar
                </a>
              </h4>
              <p className="text-muted-foreground text-sm">
                A Fabric mod for Minecraft 1.21 to let players sleep at any
                range. Written in Java.
              </p>
            </div>
          </div>
        </div>

        <div className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors">
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-lime-500 rounded-lg flex-shrink-0 flex items-center justify-center">
              <LuCog className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-base mb-1">
                <a
                  href="https://github.com/yakasov/YakasovFabricTweaks"
                  className="text-blue-400 hover:underline"
                >
                  minecraft: yakasovfabrictweaks
                </a>
              </h4>
              <p className="text-muted-foreground text-sm">
                A Fabric mod that combines several suggestions from the
                r/minecraftsuggestions subreddit.
              </p>
            </div>
          </div>
        </div>

        <div className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors">
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-amber-500 rounded-lg flex-shrink-0 flex items-center justify-center">
              <GiBottleCap className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-base mb-1">
                <a
                  href="https://github.com/yakasov/foundryvtt-fallout"
                  className="text-blue-400 hover:underline"
                >
                  foundryvtt-fallout
                </a>
              </h4>
              <p className="text-muted-foreground text-sm">
                Some personal edits to the Fallout 2d20 System for Foundry VTT,
                bringing the system more inline with traditional D&D 5e.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
