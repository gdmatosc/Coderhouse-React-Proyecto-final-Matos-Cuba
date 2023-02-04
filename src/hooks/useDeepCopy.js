export function useDeepCopy(oldObj) {
    console.log(`copy in progress`)
    let newObject=JSON.parse(JSON.stringify(oldObj))
    return newObject
}

 