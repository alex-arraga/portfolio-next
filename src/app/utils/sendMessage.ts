export const sendMessage = async (text: string) => {
    await fetch("https://api.telegram.org/bot6736589583:AAF0KAqA5pcNm_X9hc7AlSK1j06TZAyieEU/sendMessage", {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            chat_id: 6144907154,
            text: text
        })
    })
}