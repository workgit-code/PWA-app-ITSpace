import {useEffect, useState} from 'react';

const usePhoneRotation = () => {
    const [gyroVals, setGyroVals] = useState({
        alpha: 0,
        beta: 0,
        gamma: 0
    })

    useEffect(() => {
        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', handleOrientation, true);
        }
    }, [])
    
    
    const handleOrientation = (event) => {
        setGyroVals({
            alpha: event.alpha,
            beta: event.beta,
            gamma: event.gamma
        })
    }

    return gyroVals
}

export default usePhoneRotation;