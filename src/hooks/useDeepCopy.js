const file='[useDeepCopy.js]'

export function useDeepCopy(oldObj) {
    console.log(`${file} | (copy in progress)`)
    let newObject=JSON.parse(JSON.stringify(oldObj))

    return newObject
}

 