import React from 'react';

function rotationDemo(props) {
    const [val, setVal] = useState({
        alpha: null,
        beta: null,
        gamma: null
    })

    useEffect(() => {
        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', handleOrientation, true);
        }
    }, [])
    
    
    const handleOrientation = (event) => {
        setVal({
            alpha: event.alpha,
            beta: event.beta,
            gamma: event.gamma
        })
    }

    return (
        <div className="App">
            <ul>
                <li>ɑ: {val.alpha}</li>
                <li>β: {val.beta}</li>
                <li>γ: {val.gamma}</li>
            </ul>
        </div>
    );
}

export default rotationDemo;