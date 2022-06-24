import { DefaultUi, Player, Youtube } from "@vime/react";

import '@vime/core/themes/default.css';

interface VideoProps {
    videoId: string;
}

export function Video({ videoId }: VideoProps) {
    return(
        <div className="flex-1">
            <div
                className="
                bg-black flex justify-center
                "
            >

            <div
                className=" 
                    h-full w-full max-h-[60vh] max-w-[1100px] aspect-video 
                "
            >
                <Player>
                    <Youtube
                        videoId={videoId} />
                    <DefaultUi/>
                </Player>
            </div>
        </div>
        </div>
    )
}