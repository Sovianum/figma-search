
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

/**
 * Calculate a 32 bit FNV-1a hash
 * Found here: https://gist.github.com/vaiorabbit/5657561
 * Ref.: http://isthe.com/chongo/tech/comp/fnv/
 *
 * @param {string} str the input value
 * @param {boolean} [asString=false] set to true to return the hash value as 
 *     8-digit hex string instead of an integer
 * @param {integer} [seed] optionally pass the hash of the previous chunk
 * @returns {integer | string}
 */
export function hashFnv32a(str: string) {
    let hval = 0x811c9dc5

    for (let i = 0; i < str.length; i++) {
        hval ^= str.charCodeAt(i);
        hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
    }
    
    return hval >>> 0;
}