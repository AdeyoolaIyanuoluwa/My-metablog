// eslint-disable-next-line no-unused-vars
import React, { useEffect, } from 'react'
import { useRef } from 'react'

const useSecondRunEffect = (callback,deps) => {
    const isFirstRun = useRef(true)
    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false

            return
        }
        callback()
    }, deps)

}

export default useSecondRunEffect