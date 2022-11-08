import { CircleNotch } from "phosphor-react";

export function Loading () {
    return (
        <div className="fixed w-full h-screen top-0 right-0 left-0 bottom-0 flex items-center justify-center">
            <CircleNotch className="animate-spin text-pinkish-red-900 text-2xl" />
        </div>
    )
}