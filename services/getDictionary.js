export const fetchDictionary = async (word) => {
    return await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(async (res) => await res.json())
    .catch((err) => console.error(err))
}