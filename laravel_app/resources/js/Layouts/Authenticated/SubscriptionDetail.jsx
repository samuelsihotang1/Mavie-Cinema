import React from "react";

export default function SubscriptionDetail({
    name,
    isPremium,
    remainingActiveDays,
    activeDays,
}) {
    // pastikan angka
    const total = Number(activeDays) || 0;
    const remaining = Math.max(0, Number(remainingActiveDays) || 0);

    // progress = remaining / total; clamp 0..1; handle total=0
    const progress =
        total > 0 ? Math.min(1, Math.max(0, remaining / total)) : 0;

    const percent = Math.round(progress * 100);

    const Bar = ({ trackClass, fillClass }) => (
        <div className={`rounded-full w-full h-[6px] ${trackClass}`}>
            <div
                className={`rounded-full h-full ${fillClass}`}
                style={{ width: `${percent}%` }}
            />
        </div>
    );

    return (
        <>
            {/* BASIC */}
            {!isPremium && (
                <div className="mt-auto pr-[30px]">
                    <div className="p-5 bg-white rounded-[25px] outline outline-1 outline-[#f1f1f1]">
                        <div className="text-black text-lg font-semibold mb-8">
                            {name}
                        </div>
                        <div className="text-black text-sm mb-2">
                            {remaining} dari {total} hari ({percent}%)
                        </div>
                        <Bar
                            trackClass="bg-[#f1f1f1]"
                            fillClass="bg-alerange"
                        />
                    </div>
                </div>
            )}

            {/* PREMIUM */}
            {isPremium && (
                <div className="mt-auto pr-[30px]">
                    <div className="p-5 bg-black rounded-[25px]">
                        <img src="/icons/ic_star-rounded.svg" alt="" />
                        <div className="text-white text-lg font-semibold mt-4 mb-8">
                            {name}
                        </div>
                        <div className="text-white text-sm mb-2">
                            {remaining} dari {total} hari ({percent}%)
                        </div>
                        <Bar
                            trackClass="bg-[#333333]"
                            fillClass="bg-alerange"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
