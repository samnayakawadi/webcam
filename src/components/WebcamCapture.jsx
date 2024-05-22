import { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const WebcamComponent = () => {
    const webcamRef = useRef(null);
    const [isStreaming, setIsStreaming] = useState(false);
    const [imageData, setImageData] = useState(null);

    const startStreaming = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            setIsStreaming(true);
            setImageData(false)
            if (webcamRef.current) webcamRef.current.srcObject = stream;
        } catch (error) {
            console.error('Error accessing webcam:', error);
        }
    };

    const captureImage = () => {
        setIsStreaming(false);
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            setImageData(imageSrc);
        }
    };

    return (
        <div className="webcam-container">
            {imageData && <img src={imageData} alt="Captured webcam image" />}
            {isStreaming ? (
                <div>
                    <Webcam
                        audio={false} // Disable audio if not needed
                        height={480}
                        width={640}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                    />
                    <br />
                    <button onClick={captureImage}>Capture The Image</button>
                </div>
            ) : (
                <div>
                    <br />
                    <button onClick={startStreaming}>Start Streaming</button>
                </div>
            )}
        </div>
    );
};

export default WebcamComponent;