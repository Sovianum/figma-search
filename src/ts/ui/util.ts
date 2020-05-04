
let idCnt = 0
export function getUniqueID(): string {
    const result = "id_" + idCnt
    idCnt++
    return result
}