export function dateToYMD(date: Date): string {
    return date.toLocaleString("ja-JP",{
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });
}