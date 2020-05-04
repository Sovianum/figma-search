
let idCnt = 0
export function getUniqueID(): string {
    const result = "id_" + idCnt
    idCnt++
    return result
}

export function splitInChunks<T>(arr: Array<T>, chunkSize: number): Array<Array<T>> {
    const result = []
    for (let i = 0; i != Math.floor(arr.length/chunkSize) + 1; ++i) {
        const iStart = i * chunkSize
        const iEnd = iStart + chunkSize <= arr.length ? iStart + chunkSize : arr.length
        
        result.push(arr.slice(iStart, iEnd))
    }
    console.log(result)
    return result
}